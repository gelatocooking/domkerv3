import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  ensureAllowedOrigin,
  ensureContactRateLimit,
  getClientIp,
  verifyTurnstile,
} from "../../../lib/contact-security";

export const runtime = "nodejs";

const MIN_FILL_TIME_MS = 3000;
const MAX_FILL_TIME_MS = 1000 * 60 * 60 * 12;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+()\-\s]{7,50}$/;
const URL_REGEX = /(https?:\/\/|www\.)/gi;
const REPEATED_CHAR_REGEX = /(.)\1{6,}/i;
const NON_ALPHANUMERIC_ONLY_REGEX = /^[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeText = (value: string) =>
  value
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export async function POST(request: Request) {
  try {
    try {
      ensureAllowedOrigin(request);
    } catch (error) {
      return NextResponse.json(
        {
          message:
            error instanceof Error
              ? error.message
              : "Nieprawidłowe źródło żądania.",
        },
        { status: 403 }
      );
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { message: "Nieprawidłowy format żądania." },
        { status: 415 }
      );
    }

    const body = (await request.json()) as {
      email?: string;
      phone?: string;
      topic?: string;
      consent?: boolean;
      website?: string;
      startedAt?: number | string;
      turnstileToken?: string;
    };

    const email = body.email?.trim().toLowerCase() ?? "";
    const phone = body.phone?.trim() ?? "";
    const topic = normalizeText(body.topic ?? "");
    const consent = Boolean(body.consent);
    const website = body.website?.trim() ?? "";
    const startedAt = Number(body.startedAt);
    const turnstileToken = body.turnstileToken?.trim() ?? "";
    const now = Date.now();
    const clientIp = getClientIp(request);
    const userAgent = request.headers.get("user-agent") || "";

    if (!userAgent) {
      return NextResponse.json(
        { message: "Brak wymaganych nagłówków żądania." },
        { status: 400 }
      );
    }

    if (website) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    if (!email || !phone || !topic || !consent) {
      return NextResponse.json(
        { message: "Brak wymaganych pól." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(startedAt)) {
      return NextResponse.json(
        { message: "Nieprawidłowa sesja formularza." },
        { status: 400 }
      );
    }

    const fillTime = now - startedAt;
    if (fillTime < MIN_FILL_TIME_MS || fillTime > MAX_FILL_TIME_MS) {
      return NextResponse.json(
        { message: "Nieprawidłowy czas wypełniania formularza." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Podaj poprawny adres e-mail." },
        { status: 400 }
      );
    }

    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { message: "Podaj poprawny numer telefonu." },
        { status: 400 }
      );
    }

    if (email.length > 320 || phone.length > 50 || topic.length < 20 || topic.length > 5000) {
      return NextResponse.json(
        { message: "Sprawdź długość podanych danych." },
        { status: 400 }
      );
    }

    const words = topic.split(/\s+/).filter(Boolean);
    const letterCount = (topic.match(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g) || []).length;

    if (words.length < 4 || letterCount < 15) {
      return NextResponse.json(
        { message: "Wiadomość jest zbyt krótka lub zbyt ogólna." },
        { status: 400 }
      );
    }

    if (NON_ALPHANUMERIC_ONLY_REGEX.test(topic) || REPEATED_CHAR_REGEX.test(topic)) {
      return NextResponse.json(
        { message: "Wiadomość wygląda na nieprawidłową." },
        { status: 400 }
      );
    }

    const normalizedTopic = topic.toLowerCase();
    if (
      normalizedTopic === email ||
      normalizedTopic === phone.toLowerCase() ||
      normalizedTopic.includes("test test") ||
      normalizedTopic.includes("asdf") ||
      normalizedTopic.includes("qwerty")
    ) {
      return NextResponse.json(
        { message: "Wiadomość wygląda na testową lub pustą." },
        { status: 400 }
      );
    }

    const urlMatches = topic.match(URL_REGEX) || [];
    if (urlMatches.length > 1) {
      return NextResponse.json(
        { message: "Wiadomość zawiera zbyt wiele linków." },
        { status: 400 }
      );
    }

    try {
      await verifyTurnstile(turnstileToken, clientIp);
      await ensureContactRateLimit(`${clientIp}:${email}`, now);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Nie udało się zweryfikować formularza.";
      const status =
        message.includes("limit") || message.includes("Odczekaj")
          ? 429
          : message.includes("Brakuje konfiguracji Turnstile")
            ? 500
            : 400;

      return NextResponse.json(
        { message },
        { status }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !CONTACT_TO) {
      return NextResponse.json(
        { message: "Brakuje konfiguracji formularza po stronie serwera." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeTopic = escapeHtml(topic).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Formularz kontaktowy" <${SMTP_FROM}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: "Nowa wiadomość z formularza kontaktowego",
      text: `Nowa wiadomość z formularza:\n\nEmail: ${email}\nTelefon: ${phone || "-"}\nIP: ${clientIp}\nUser-Agent: ${userAgent}\n\nTreść:\n${topic}`,
      html: `<h2>Nowa wiadomość z formularza</h2>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Telefon:</strong> ${safePhone}</p>
<p><strong>IP:</strong> ${escapeHtml(clientIp)}</p>
<p><strong>User-Agent:</strong> ${escapeHtml(userAgent)}</p>
<p><strong>Treść:</strong></p>
<p>${safeTopic}</p>`,
    });

    return NextResponse.json(
      { message: "Wiadomość została wysłana." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd wysyłki formularza:", error);

    return NextResponse.json(
      { message: "Błąd serwera podczas wysyłki wiadomości." },
      { status: 500 }
    );
  }
}

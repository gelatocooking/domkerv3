import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { SITE_URL } from "./seo";

const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 15;
const RATE_LIMIT_MAX_REQUESTS = 5;
const COOLDOWN_MS = 1000 * 30;

type InMemoryRecord = {
  entries: number[];
  lastAcceptedAt: number;
};

const inMemoryRateLimitStore = new Map<string, InMemoryRecord>();

const getAllowedOrigins = () => {
  const configuredOrigins =
    process.env.ALLOWED_FORM_ORIGINS?.split(",")
      .map((origin) => origin.trim())
      .filter(Boolean) ?? [];

  const defaults = [SITE_URL];

  try {
    const siteUrl = new URL(SITE_URL);
    if (siteUrl.hostname === "domker.pl") {
      defaults.push(`https://www.${siteUrl.hostname}`);
    }
  } catch {
    // ignore malformed fallback
  }

  if (process.env.NODE_ENV !== "production") {
    defaults.push("http://localhost:3000", "http://127.0.0.1:3000");
  }

  return new Set([...defaults, ...configuredOrigins]);
};

const cleanInMemoryRateLimitStore = (now: number) => {
  for (const [key, record] of inMemoryRateLimitStore.entries()) {
    const freshEntries = record.entries.filter((entry) => now - entry < RATE_LIMIT_WINDOW_MS);

    if (freshEntries.length === 0 && now - record.lastAcceptedAt > RATE_LIMIT_WINDOW_MS) {
      inMemoryRateLimitStore.delete(key);
      continue;
    }

    inMemoryRateLimitStore.set(key, {
      entries: freshEntries,
      lastAcceptedAt: record.lastAcceptedAt,
    });
  }
};

const ensureInMemoryRateLimit = (key: string, now: number) => {
  cleanInMemoryRateLimitStore(now);

  const record = inMemoryRateLimitStore.get(key) ?? {
    entries: [],
    lastAcceptedAt: 0,
  };

  const freshEntries = record.entries.filter((entry) => now - entry < RATE_LIMIT_WINDOW_MS);

  if (record.lastAcceptedAt && now - record.lastAcceptedAt < COOLDOWN_MS) {
    throw new Error("Odczekaj chwile przed wyslaniem kolejnego formularza.");
  }

  if (freshEntries.length >= RATE_LIMIT_MAX_REQUESTS) {
    throw new Error("Przekroczono limit prob. Sprobuj ponownie za kilka minut.");
  }

  inMemoryRateLimitStore.set(key, {
    entries: [...freshEntries, now],
    lastAcceptedAt: now,
  });
};

const getUpstashRateLimit = () => {
  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env;

  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  const globalStore = globalThis as typeof globalThis & {
    __contactRateLimit?: Ratelimit;
  };

  if (!globalStore.__contactRateLimit) {
    globalStore.__contactRateLimit = new Ratelimit({
      redis: new Redis({
        url: UPSTASH_REDIS_REST_URL,
        token: UPSTASH_REDIS_REST_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX_REQUESTS, "15 m"),
      analytics: false,
      prefix: "contact-form",
    });
  }

  return globalStore.__contactRateLimit;
};

export const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
};

export const ensureAllowedOrigin = (request: Request) => {
  const allowedOrigins = getAllowedOrigins();
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto");

  if (!origin) {
    if (
      process.env.NODE_ENV !== "production" &&
      host &&
      (host.includes("localhost") || host.includes("127.0.0.1"))
    ) {
      return;
    }

    throw new Error("Nieprawidlowe zrodlo zadania.");
  }

  if (!allowedOrigins.has(origin)) {
    throw new Error("Zadanie pochodzi z niedozwolonego zrodla.");
  }

  if (host) {
    try {
      const originUrl = new URL(origin);
      const normalizedOriginHost = originUrl.host;
      const normalizedHost = host.trim();
      const normalizedProto = forwardedProto || originUrl.protocol.replace(":", "");
      const expectedOrigin = `${normalizedProto}://${normalizedHost}`;

      if (!allowedOrigins.has(expectedOrigin) && normalizedOriginHost !== normalizedHost) {
        throw new Error("Nieprawidlowy host zadania.");
      }
    } catch {
      throw new Error("Nieprawidlowy naglowek Origin.");
    }
  }
};

export const ensureContactRateLimit = async (key: string, now: number) => {
  const upstashRateLimit = getUpstashRateLimit();

  if (!upstashRateLimit) {
    ensureInMemoryRateLimit(key, now);
    return;
  }

  const result = await upstashRateLimit.limit(key);
  if (!result.success) {
    throw new Error("Przekroczono limit prob. Sprobuj ponownie za kilka minut.");
  }
};

export const verifyTurnstile = async (token: string, ip: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const publicSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!secret && !publicSiteKey) {
    return;
  }

  if (!secret || !publicSiteKey) {
    throw new Error("Brakuje konfiguracji Turnstile po stronie serwera.");
  }

  if (!token) {
    throw new Error("Potwierdz zabezpieczenie antyspamowe.");
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: ip,
    }),
  });

  if (!response.ok) {
    throw new Error("Nie udalo sie zweryfikowac zabezpieczenia antyspamowego.");
  }

  const data = (await response.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };

  if (!data.success) {
    throw new Error("Weryfikacja antyspamowa nie powiodla sie.");
  }
};

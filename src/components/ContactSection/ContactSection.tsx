"use client";

import Script from "next/script";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../Button/Button";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./ContactSection.module.css";

declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
    };
  }
}

export interface ContactChip {
  label: string;
  accent?: boolean;
}

export interface ContactSectionFormContent {
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  topicLabel: string;
  topicPlaceholder: string;
  consentText: string;
  submitLabel: string;
}

export interface ContactSectionMetaContent {
  avatars: string[];
  text: string;
}

export interface ContactSectionContent {
  kickerLabel: string;
  title: string;
  description: string;
  chips: ContactChip[];
  form: ContactSectionFormContent;
  meta: ContactSectionMetaContent;
}

interface ContactSectionProps {
  content: ContactSectionContent;
}

export default function ContactSection({ content }: ContactSectionProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    topic: "",
    consent: false,
    website: "",
    startedAt: Date.now(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;

    if (type === "checkbox" && "checked" in event.target) {
      const target = event.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    const form = event.currentTarget;
    const turnstileToken =
      new FormData(form).get("cf-turnstile-response")?.toString().trim() ?? "";

    if (!formData.email.trim() || !formData.phone.trim() || !formData.topic.trim() || !formData.consent) {
      setMessage({
        type: "error",
        text: "Uzupełnij e-mail, telefon, wiadomość i zaznacz zgodę.",
      });
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setMessage({
        type: "error",
        text: "Potwierdź zabezpieczenie antyspamowe.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Wystąpił błąd podczas wysyłki.");
      }

      setMessage({
        type: "success",
        text: data.message || "Wiadomość została wysłana.",
      });
      if (turnstileSiteKey && typeof window !== "undefined") {
        window.turnstile?.reset();
      }
      setFormData({
        email: "",
        phone: "",
        topic: "",
        consent: false,
        website: "",
        startedAt: Date.now(),
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Nie udało się wysłać formularza.",
      });
      if (turnstileSiteKey && typeof window !== "undefined") {
        window.turnstile?.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className={styles.section}>
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      ) : null}
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.leftCard}>
            <div className={styles.leftContent}>
              <SectionKicker label={content.kickerLabel} tone="light" />
              <h2 className={styles.title}>{content.title}</h2>
              <p className={styles.text}>{content.description}</p>
              <div className={styles.chips}>
                {content.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`${styles.chip} ${chip.accent ? styles.chipAccent : ""}`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <form className={styles.formCard} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-email">
                {content.form.emailLabel}
              </label>
              <input
                className={styles.input}
                id="contact-email"
                name="email"
                type="email"
                placeholder={content.form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                inputMode="email"
                maxLength={320}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-phone">
                {content.form.phoneLabel}
              </label>
              <input
                className={styles.input}
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder={content.form.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                maxLength={50}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-topic">
                {content.form.topicLabel}
              </label>
              <textarea
                className={styles.textarea}
                id="contact-topic"
                name="topic"
                placeholder={content.form.topicPlaceholder}
                value={formData.topic}
                onChange={handleChange}
                required
                minLength={20}
                maxLength={5000}
              />
            </div>
            <div className={styles.honeypotField} aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <input type="hidden" name="startedAt" value={formData.startedAt} />
            <label className={styles.consent}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span className={styles.consentText}>{content.form.consentText}</span>
            </label>
            {turnstileSiteKey ? (
              <div className={styles.turnstileWrap}>
                <div
                  className="cf-turnstile"
                  data-sitekey={turnstileSiteKey}
                  data-theme="light"
                  data-size="flexible"
                  data-appearance="always"
                />
              </div>
            ) : null}
            <div className={styles.formCta}>
              <Button
                type="submit"
                className={styles.formButton}
                label={isSubmitting ? "Wysyłanie..." : content.form.submitLabel}
                iconName="arrowRight"
                disabled={isSubmitting}
              />
            </div>
            {message ? (
              <p
                className={`${styles.message} ${
                  message.type === "success" ? styles.messageSuccess : styles.messageError
                }`}
                role="status"
                aria-live="polite"
              >
                {message.text}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

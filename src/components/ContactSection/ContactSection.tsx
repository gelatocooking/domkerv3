import Button from "../Button/Button";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./ContactSection.module.css";

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
  return (
    <section id='kontakt' className={styles.section}>
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

          <form className={styles.formCard}>
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
              />
            </div>
            <label className={styles.consent}>
              <input className={styles.checkbox} type="checkbox" name="consent" />
              <span className={styles.consentText}>{content.form.consentText}</span>
            </label>
            <div className={styles.formCta}>
              <Button
                type="submit"
                className={styles.formButton}
                label={content.form.submitLabel}
                iconName="arrowRight"
              />
            </div>
          </form>
        </div>

    
      </div>
    </section>
  );
}

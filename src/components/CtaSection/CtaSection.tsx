import Button from "../Button/Button";
import styles from "./CtaSection.module.css";

export interface CtaSectionContent {
  eyebrowText: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  avatars: string[];
}

interface CtaSectionProps {
  content: CtaSectionContent;
}

export default function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              
              <span className={styles.eyebrowText}>{content.eyebrowText}</span>
            </div>

            <h3 className={styles.title}>{content.title}</h3>
            <p className={styles.text}>{content.description}</p>
          </div>

          <div className={styles.cta}>
            <Button
              className={styles.ctaButton}
              label={content.buttonLabel}
              iconName="arrowRight"
              href={content.buttonHref}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

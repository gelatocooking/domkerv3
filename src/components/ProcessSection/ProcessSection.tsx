import Button from "../Button/Button";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./ProcessSection.module.css";

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface ProcessSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  steps: ProcessStep[];
  ctaLabel: string;
}

interface ProcessSectionProps {
  content: ProcessSectionContent;
}

export default function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.headingGroup}>
            <SectionKicker label={content.kickerLabel} />
            <h2 className={styles.title}>
              {content.titleLines.map((line) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>
            <p className={styles.description}>{content.description}</p>
          </div>

          <div className={styles.steps}>
            {content.steps.map((step) => (
              <article key={step.index} className={styles.stepCard}>
                <div className={styles.stepBadge}>{step.index}</div>
                <div className={styles.stepContent}>
                  <h3 className={`${styles.stepTitle} ${styles.h3}`}>{step.title}</h3>
                  <p className={styles.stepText}>{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Button label={content.ctaLabel} iconName="arrowRight" />
          </div>
        </div>
      </div>
    </section>
  );
}

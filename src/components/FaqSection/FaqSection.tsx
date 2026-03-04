import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./FaqSection.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionContent {
  kickerLabel: string;
  title: string;
  description: string;
  highlightText: string;
  avatars: string[];
  items: FaqItem[];
}

interface FaqSectionProps {
  content: FaqSectionContent;
}

export default function FaqSection({ content }: FaqSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <SectionKicker label={content.kickerLabel} />
          <h2 className={styles.title}>{content.title}</h2>
          <div className={styles.metaRow}>
            <div className={styles.avatars}>
              {content.avatars.map((avatar) => (
                <span key={avatar} className={styles.avatar} aria-hidden="true">
                  {avatar}
                </span>
              ))}
            </div>
          </div>
          <p className={styles.description}>
            {content.description} <span className={styles.highlight}>{content.highlightText}</span>
          </p>
        </div>

        <div className={styles.list}>
          {content.items.map((item, index) => (
            <details
              key={item.question}
              className={styles.item}
              open={index === 0}
            >
              <summary className={styles.summary}>
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon}>
                  <Icon name="chevronDown" size="sm" />
                </span>
              </summary>
              <div className={styles.answer}>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

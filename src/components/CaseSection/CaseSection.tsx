import Image from "next/image";
import Button from "../Button/Button";
import SectionKicker from "../SectionKicker/SectionKicker";
import { stripTrailingListPeriod } from "@/lib/text";
import styles from "./CaseSection.module.css";

export interface CaseSectionMedia {
  src: string;
  alt: string;
}

export interface CaseSectionItem {
  typeLabel: string;
  title: string;
  context: string[];
  scope: string[];
  resultLead: string;
  resultText: string;
  ctaLabel: string;
  media: CaseSectionMedia;
  reverseOnDesktop?: boolean;
}

export interface CaseSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  items: CaseSectionItem[];
}

interface CaseSectionProps {
  content: CaseSectionContent;
}

export default function CaseSection({ content }: CaseSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <SectionKicker label={content.kickerLabel} />
          <h2 className={styles.title}>
            {content.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.subtitle}>{content.description}</p>
        </div>

        <div className={styles.list}>
          {content.items.map((item) => (
            <article
              key={item.title}
              className={`${styles.card} ${item.reverseOnDesktop ? styles.cardReverse : ""}`}
            >
              <div className={styles.media}>
                <Image
                  src={item.media.src}
                  alt={item.media.alt}
                  fill
                  className={styles.mediaImage}
                />
              </div>

              <div className={styles.body}>
                <span className={styles.caseType}>{item.typeLabel}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                <div className={styles.blocks}>
                  <div className={styles.block}>
                    <span className={styles.blockLabel}>Kontekst</span>
                    <ul className={styles.listItems}>
                      {item.context.map((entry) => (
                        <li key={entry} className={styles.listItem}>
                          {stripTrailingListPeriod(entry)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.block}>
                    <span className={styles.blockLabel}>Zakres</span>
                    <ul className={styles.listItems}>
                      {item.scope.map((entry) => (
                        <li key={entry} className={styles.listItem}>
                          {stripTrailingListPeriod(entry)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.block}>
                    <span className={styles.blockLabel}>Rezultat</span>
                    <div className={styles.result}>
                      <p className={styles.resultLead}>{item.resultLead}</p>
                      <p className={styles.resultText}>{item.resultText}</p>
                    </div>
                  </div>
                </div>

                <Button
                  className={styles.cardButton}
                  label={item.ctaLabel}
                  iconName="arrowRight"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import buttonStyles from "../Button/Button.module.css";
import styles from "./KnowledgeSection.module.css";

export type KnowledgeCardMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "preview";
      primarySrc: string;
      primaryAlt: string;
      secondarySrc: string;
      secondaryAlt: string;
    };

export interface KnowledgeCard {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  media: KnowledgeCardMedia;
}

export interface KnowledgeSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  cards: KnowledgeCard[];
}

interface KnowledgeSectionProps {
  content: KnowledgeSectionContent;
}

export default function KnowledgeSection({ content }: KnowledgeSectionProps) {
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

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              {card.media.type === "preview" ? (
                <div className={styles.preview}>
                  <div className={styles.previewStack}>
                    <div className={styles.previewCard}>
                      <Image
                        src={card.media.primarySrc}
                        alt={card.media.primaryAlt}
                        fill
                        className={styles.previewImage}
                      />
                    </div>
                    <div className={styles.previewCardAlt}>
                      <Image
                        src={card.media.secondarySrc}
                        alt={card.media.secondaryAlt}
                        fill
                        className={styles.previewImage}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.media}>
                  <Image
                    src={card.media.src}
                    alt={card.media.alt}
                    fill
                    className={styles.mediaImage}
                  />
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.description}</p>
                </div>
                {card.buttonHref ? (
                  <Link href={card.buttonHref} className={`${buttonStyles.button} ${styles.cardButton}`}>
                    <span className={buttonStyles.label}>{card.buttonLabel}</span>
                    <span className={buttonStyles.icon}>
                      <Icon name="arrowRight" size="lg" />
                    </span>
                  </Link>
                ) : (
                  <Button
                    className={styles.cardButton}
                    label={card.buttonLabel}
                    iconName="arrowRight"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import SectionKicker from "../SectionKicker/SectionKicker";
import Icon from "../Icon/Icon";
import { TypewriterTimed } from "../HeroType/HeroType";
import { stripTrailingListPeriod } from "@/lib/text";
import styles from "./CoordinatorSection.module.css";

export interface CoordinatorSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  imageSrc: string;
  imageAlt: string;
  cardTitlePrefix: string;
  cardTitleText: string;
  cardTitleTexts?: string[];
  points: string[];
}

interface CoordinatorSectionProps {
  content: CoordinatorSectionContent;
}

export default function CoordinatorSection({
  content,
}: CoordinatorSectionProps) {
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
          <p className={styles.description}>{content.description}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.mediaCard}>
            <div className={styles.mediaFrame}>
              <Image
                src={content.imageSrc}
                alt={content.imageAlt}
                fill
                className={styles.mediaImage}
              />
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>
              <span>{content.cardTitlePrefix} </span>
              <span className={styles.cardTitleAccent}>
                <TypewriterTimed
                  text={content.cardTitleText}
                  texts={content.cardTitleTexts}
                  charsPerSecond={18}
                  deleteCharsPerSecond={26}
                  pauseAfterTypedMs={2000}
                  pauseAfterDeletedMs={250}
                  loop
                  cursor={false}
                />
              </span>
            </h3>
            <ul className={styles.points}>
              {content.points.map((point) => (
                <li key={point} className={styles.pointItem}>
                  <span className={styles.pointIcon}>
                    <Icon name="clipboardCheck" size="sm" />
                  </span>
                  <span className={styles.pointText}>
                    {stripTrailingListPeriod(point)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

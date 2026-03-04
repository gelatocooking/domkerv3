import type { IconName } from "../Icon/Icon";
import BenefitCard, { type ProblemTone } from "../BenefitCard/BenefitCard";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./BenefitsSection.module.css";

export interface BenefitItem {
  iconName: IconName;
  label: string;
  title: string;
  description: string;
  tone: ProblemTone;
}

export interface BenefitsSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  items: BenefitItem[];
}

interface BenefitsSectionProps {
  content: BenefitsSectionContent;
}

export default function BenefitsSection({ content }: BenefitsSectionProps) {
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
        <div className={styles.cards}>
          {content.items.map((benefit) => (
            <BenefitCard key={`${benefit.label}-${benefit.title}`} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

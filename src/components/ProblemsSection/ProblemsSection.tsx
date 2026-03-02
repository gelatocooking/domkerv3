import type { IconName } from "../Icon/Icon";
import ProblemCard, { type ProblemTone } from "../ProblemCard/ProblemCard";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./ProblemsSection.module.css";

export interface ProblemItem {
  iconName: IconName;
  label: string;
  title: string;
  description: string;
  tone: ProblemTone;
}

export interface ProblemsSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  items: ProblemItem[];
}

interface ProblemsSectionProps {
  content: ProblemsSectionContent;
}

export default function ProblemsSection({ content }: ProblemsSectionProps) {
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
          {content.items.map((problem) => (
            <ProblemCard key={`${problem.label}-${problem.title}`} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}

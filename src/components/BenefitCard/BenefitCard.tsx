import Icon, { type IconName } from "../Icon/Icon";
import styles from "./BenefitCard.module.css";

export type ProblemTone =
  | "data"
  | "finance"
  | "processes"
  | "risk"
  | "technology"
  | "resources";

interface BenefitCardProps {
  iconName: IconName;
  label: string;
  title: string;
  description: string;
  tone: ProblemTone;
}

const toneClasses: Record<ProblemTone, string> = {
  data: styles.toneData,
  finance: styles.toneFinance,
  processes: styles.toneProcesses,
  risk: styles.toneRisk,
  technology: styles.toneTechnology,
  resources: styles.toneResources,
};

export default function BenefitCard({
  iconName,
  title,
  description,
  tone,
}: BenefitCardProps) {
  return (
    <article className={styles.card}>
      <div className={`${styles.badge} ${toneClasses[tone]}`}>
        <span className={styles.badgeIcon}>
          <Icon name={iconName} size="sm" />
        </span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

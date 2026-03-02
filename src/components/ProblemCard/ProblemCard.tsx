import Icon, { type IconName } from "../Icon/Icon";
import styles from "./ProblemCard.module.css";

export type ProblemTone =
  | "data"
  | "finance"
  | "processes"
  | "risk"
  | "technology"
  | "resources";

interface ProblemCardProps {
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

export default function ProblemCard({
  iconName,
  label,
  title,
  description,
  tone,
}: ProblemCardProps) {
  return (
    <article className={styles.card}>
      <div className={`${styles.badge} ${toneClasses[tone]}`}>
        <span className={styles.badgeIcon}>
          <Icon name={iconName} size="sm" />
        </span>
        <span className={styles.badgeText}>{label}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

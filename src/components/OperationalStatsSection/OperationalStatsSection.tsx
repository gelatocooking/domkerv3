import styles from "./OperationalStatsSection.module.css";

export interface OperationalStatItem {
  value: string;
  label: string;
}

export interface OperationalStatsSectionContent {
  items: OperationalStatItem[];
}

interface OperationalStatsSectionProps {
  content: OperationalStatsSectionContent;
}

export default function OperationalStatsSection({
  content,
}: OperationalStatsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.panel}>
          {content.items.map((item) => (
            <article key={`${item.value}-${item.label}`} className={styles.card}>
              <strong className={styles.value}>{item.value}</strong>
              <p className={styles.label}>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

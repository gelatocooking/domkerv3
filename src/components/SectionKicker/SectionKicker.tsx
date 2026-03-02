import Icon from "../Icon/Icon";
import styles from "./SectionKicker.module.css";

interface SectionKickerProps {
  label: string;
  tone?: "dark" | "light";
}

export default function SectionKicker({ label, tone = "dark" }: SectionKickerProps) {
  const classes = [styles.kicker, tone === "light" ? styles.kickerLight : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span className={styles.kickerIcon}>
        <Icon name="lightbulb" size="sm" />
      </span>
      <span className={styles.kickerText}>{label}</span>
      <span className={styles.kickerIcon}>
        <Icon name="lightbulb" size="sm" />
      </span>
    </div>
  );
}

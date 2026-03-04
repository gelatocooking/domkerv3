import Image from "next/image";
import Button from "../Button/Button";
import Icon, { type IconName } from "../Icon/Icon";
import styles from "./Hero.module.css";

export interface HeroContent {
  badge: string;
  titleLines: string[];
  emphasisText?: string;
  emphasisIconName?: IconName;
  emphasisSuffix?: string;
  description: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
}

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>{content.badge}</span>
          </div>

          <h1 className={styles.heading}>
            {content.titleLines.map((line) => (
              <span key={line} className={styles.headingLine}>
                {line}
              </span>
            ))}
            {content.emphasisText ? (
              <span className={styles.headingRow}>
                <span className={styles.iconBadge}>
                  <Icon name={content.emphasisIconName ?? "lightbulb"} size="md" />
                </span>
                <em className={styles.headingEm}>{content.emphasisText}</em>
                {content.emphasisSuffix ? (
                  <span className={styles.headingSlash}>{content.emphasisSuffix}</span>
                ) : null}
              </span>
            ) : null}
          </h1>

          <p className={styles.bodyText}>{content.description}</p>

          <Button
            className={styles.heroCta}
            label={content.ctaLabel}
            iconName="arrowRight"
          />
        </div>
        <div>
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            width={600}
            height={400}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}

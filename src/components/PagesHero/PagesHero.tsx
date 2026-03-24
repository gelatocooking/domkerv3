import Button from "../Button/Button";
import Icon, { type IconName } from "../Icon/Icon";
import heroStyles from "../Hero/Hero.module.css";
import styles from "./PagesHero.module.css";

export interface PagesHeroContent {
  badge: string;
  titleLines: string[];
  emphasisText?: string;
  emphasisIconName?: IconName;
  emphasisSuffix?: string;
  description: string;
  ctaLabel: string;
}

interface PagesHeroProps {
  content: PagesHeroContent;
}

export default function PagesHero({ content }: PagesHeroProps) {
  return (
    <section className={heroStyles.hero}>
      <div className={`${styles.pagegrid} ${styles.grid}`}>
        <div className={`${heroStyles.content} ${styles.content}`}>
          <div className={`${heroStyles.badge} ${styles.badge}`}>
            <span className={heroStyles.badgeText}>{content.badge}</span>
          </div>

          <h1 className={`${heroStyles.heading} ${styles.heading}`}>
            {content.titleLines.map((line) => (
              <span key={line} className={heroStyles.headingLine}>
                {line}
              </span>
            ))}
            {content.emphasisText ? (
              <span className={`${heroStyles.headingRow} ${styles.headingRow}`}>
                <span className={heroStyles.iconBadge}>
                  <Icon
                    name={content.emphasisIconName ?? "lightbulb"}
                    size="md"
                  />
                </span>
                <em className={heroStyles.headingEm}>{content.emphasisText}</em>
                {content.emphasisSuffix ? (
                  <span className={heroStyles.headingSlash}>
                    {content.emphasisSuffix}
                  </span>
                ) : null}
              </span>
            ) : null}
          </h1>

          <p className={`${heroStyles.bodyText} ${styles.bodyText}`}>
            {content.description}
          </p>

          <div className={styles.ctaRow}>
            <Button
              className={heroStyles.heroCta}
              label={content.ctaLabel}
              iconName="arrowRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

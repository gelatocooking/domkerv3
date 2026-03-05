import Image from "next/image";
import Button from "../Button/Button";
import { HeroHeadline } from "../HeroHeadline/HeroHeadline";
import { type IconName } from "../Icon/Icon";
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
              <HeroHeadline
                text={content.emphasisText}
                suffix={content.emphasisSuffix}
                charsPerSecond={18}
                startDelayMs={250}
                loop={false}
                cursor={true}
              />
            ) : null}
          </h1>

          <p className={styles.bodyText}>{content.description}</p>

          <Button
            className={styles.heroCta}
            label={content.ctaLabel}
            iconName="arrowRight"
          />
        </div>
        <div className={styles.mediaCard}>
          <div className={styles.mediaFrame}>
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill
              className={styles.mediaImage}
              priority
            />
            <div className={styles.mediaOverlay} />
            <div className={styles.mediaAccent} />
          </div>
        </div>
      </div>
    </section>
  );
}

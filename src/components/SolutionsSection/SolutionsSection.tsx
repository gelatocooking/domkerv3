"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import Icon, { type IconName } from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import SolutionsIllustration, {
  type SolutionsIllustrationVariant,
} from "../SolutionsIllustration/SolutionsIllustration";
import styles from "./SolutionsSection.module.css";

export interface SolutionItem {
  iconName: IconName;
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  mediaAlt: string;
  mediaSrc: string;
  illustrationVariant?: SolutionsIllustrationVariant;
}

export interface SolutionsSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  items: SolutionItem[];
}

interface SolutionsSectionProps {
  content: SolutionsSectionContent;
}

export default function SolutionsSection({ content }: SolutionsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = content.items[activeIndex];

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
          <p className={styles.subtitle}>{content.description}</p>
        </div>

        <div className={styles.content}>
          <ul className={styles.list}>
            {content.items.map((item, index) => (
              <li key={item.label} className={styles.listItem}>
                <button
                  type="button"
                  className={`${styles.listButton} ${
                    index === activeIndex ? styles.listButtonActive : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  <span className={styles.listIcon}>
                    <Icon name={item.iconName} size="sm" />
                  </span>
                  <span className={styles.listText}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.card}>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{activeItem.title}</h3>
              <p className={styles.cardText}>{activeItem.description}</p>
              <Button
                className={styles.cardButton}
                label={activeItem.ctaLabel}
                iconName="arrowRight"
              />
            </div>
            <div className={styles.cardMedia}>
              <div className={styles.mediaFrame}>
                {activeItem.illustrationVariant ? (
                  <SolutionsIllustration variant={activeItem.illustrationVariant} />
                ) : (
                  <Image
                    src={activeItem.mediaSrc}
                    alt={activeItem.mediaAlt}
                    fill
                    className={styles.mediaImage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

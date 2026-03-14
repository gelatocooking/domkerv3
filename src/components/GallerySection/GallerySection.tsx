"use client";

import { useState } from "react";
import Image from "next/image";
import Icon, { type IconName } from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./GallerySection.module.css";

export interface GalleryTag {
  id: string;
  label: string;
  iconName: IconName;
}

export interface GalleryItem {
  title: string;
  categoryLabel: string;
  categoryIconName: IconName;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

export interface GallerySectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  tags: GalleryTag[];
  items: GalleryItem[];
}

interface GallerySectionProps {
  content: GallerySectionContent;
}

export default function GallerySection({ content }: GallerySectionProps) {
  const [activeTag, setActiveTag] = useState(content.tags[0]?.id ?? "");

  const visibleItems =
    activeTag === "all"
      ? content.items
      : content.items.filter((item) => item.tags.includes(activeTag));

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
          <ul className={styles.filters}>
            {content.tags.map((tag) => (
              <li key={tag.id} className={styles.filterItem}>
                <button
                  type="button"
                  className={`${styles.filterButton} ${
                    tag.id === activeTag ? styles.filterButtonActive : ""
                  }`}
                  onClick={() => setActiveTag(tag.id)}
                  aria-pressed={tag.id === activeTag}
                >
                  <span className={styles.filterIcon}>
                    <Icon name={tag.iconName} size="sm" />
                  </span>
                  <span className={styles.filterText}>{tag.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.grid}>
            {visibleItems.map((item) => (
              <article key={`${item.categoryLabel}-${item.title}`} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className={styles.mediaImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaIcon}>
                        <Icon name={item.categoryIconName} size="sm" />
                      </span>
                      <span className={styles.metaText}>{item.categoryLabel}</span>
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <span className={styles.cardCta}>
                    <span className={styles.cardCtaText}>Zobacz więcej</span>
                    <span className={styles.cardCtaIcon}>
                      <Icon name="arrowRight" size="sm" />
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

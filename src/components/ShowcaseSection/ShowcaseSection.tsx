"use client";

import { useCallback, useRef } from "react";
import SectionKicker from "../SectionKicker/SectionKicker";
import Icon from "../Icon/Icon";
import styles from "./ShowcaseSection.module.css";

export interface ShowcaseItem {
  tag: string;
  title: string;
  description: string;
  result: string;
}

export interface ShowcaseSectionContent {
  kickerLabel: string;
  title: string;
  description: string;
  items: ShowcaseItem[];
}

interface ShowcaseSectionProps {
  content: ShowcaseSectionContent;
}

export default function ShowcaseSection({ content }: ShowcaseSectionProps) {
  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollCards = useCallback((direction: 1 | -1) => {
    const container = cardsRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? container.clientWidth;
    const styles = getComputedStyle(container);
    const gapValue = parseFloat(styles.columnGap || styles.gap || "0");
    const gap = Number.isNaN(gapValue) ? 0 : gapValue;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  }, []);

  const handlePrev = () => scrollCards(-1);
  const handleNext = () => scrollCards(1);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <SectionKicker label={content.kickerLabel} tone="light" />
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.description}</p>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.controlButton}
            aria-label="Wstecz"
            onClick={handlePrev}
          >
            <Icon name="arrowRight" size="sm" className={styles.controlIconLeft} />
          </button>
          <button
            type="button"
            className={styles.controlButton}
            aria-label="Dalej"
            onClick={handleNext}
          >
            <Icon name="arrowRight" size="sm" />
          </button>
        </div>

        <div className={styles.cards} ref={cardsRef}>
          {content.items.map((item) => (
            <article key={item.title} className={styles.card}>
              <span className={styles.cardTag}>{item.tag}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
              <div className={styles.cardResult}>
                <span className={styles.cardResultIcon}>
                  <Icon name="trophy" size="sm" />
                </span>
                <span className={styles.cardResultText}>{item.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

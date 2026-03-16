"use client";

import { useMemo, useState } from "react";
import Button from "../Button/Button";
import Icon, { type IconName } from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./ScenarioBudgetSection.module.css";

export interface ScenarioBudgetLevel {
  id: string;
  label: string;
  budget: string;
  description: string;
  scopeTitle: string;
  scopeItems: string[];
  fitText: string;
  budgetLabel: string;
  factors: string[];
  ctaLabel: string;
}

export interface ScenarioBudgetItem {
  id: string;
  iconName: IconName;
  label: string;
  title: string;
  description: string;
  levels: ScenarioBudgetLevel[];
}

export interface ScenarioBudgetSectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  items: ScenarioBudgetItem[];
  factorsTitle: string;
  factorsDescription: string;
  footerTitle: string;
  footerDescription: string;
  footerPrimaryCta: string;
}

interface ScenarioBudgetSectionProps {
  content: ScenarioBudgetSectionContent;
}

export default function ScenarioBudgetSection({
  content,
}: ScenarioBudgetSectionProps) {
  const [activeItemId, setActiveItemId] = useState(content.items[0]?.id ?? "");
  const activeItem = useMemo(
    () => content.items.find((item) => item.id === activeItemId) ?? content.items[0],
    [activeItemId, content.items]
  );
  const [activeLevelId, setActiveLevelId] = useState(
    content.items[0]?.levels[0]?.id ?? ""
  );

  const activeLevel = useMemo(
    () =>
      activeItem?.levels.find((level) => level.id === activeLevelId) ??
      activeItem?.levels[0],
    [activeItem, activeLevelId]
  );

  if (!activeItem || !activeLevel) {
    return null;
  }

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
          <ul className={styles.serviceList}>
            {content.items.map((item) => (
              <li key={item.id} className={styles.serviceListItem}>
                <button
                  type="button"
                  className={`${styles.serviceButton} ${
                    item.id === activeItem.id ? styles.serviceButtonActive : ""
                  }`}
                  onClick={() => {
                    setActiveItemId(item.id);
                    setActiveLevelId(item.levels[0]?.id ?? "");
                  }}
                  aria-pressed={item.id === activeItem.id}
                >
                  <span className={styles.serviceIcon}>
                    <Icon name={item.iconName} size="sm" />
                  </span>
                  <span className={styles.serviceText}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderContent}>
                <span className={styles.cardEyebrow}>{activeItem.label}</span>
                <h3 className={styles.cardTitle}>{activeItem.title}</h3>
                <p className={styles.cardText}>{activeItem.description}</p>
              </div>

              <div className={styles.levels}>
                {activeItem.levels.map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    className={`${styles.levelButton} ${
                      level.id === activeLevel.id ? styles.levelButtonActive : ""
                    }`}
                    onClick={() => setActiveLevelId(level.id)}
                    aria-pressed={level.id === activeLevel.id}
                  >
                    <span className={styles.levelLabel}>{level.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.cardGrid}>
              <div className={styles.leftColumn}>
                <div className={styles.block}>
                  <span className={styles.blockLabel}>{activeLevel.label}</span>
                  <p className={styles.blockText}>{activeLevel.description}</p>
                </div>

                <div className={styles.block}>
                  <span className={styles.blockLabel}>{activeLevel.scopeTitle}</span>
                  <ul className={styles.scopeList}>
                    {activeLevel.scopeItems.map((item) => (
                      <li key={item} className={styles.scopeItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.block}>
                  <span className={styles.blockLabel}>
                    {"Ten wariant zwykle wybieraj\u0105 klienci, gdy"}
                  </span>
                  <p className={styles.blockText}>{activeLevel.fitText}</p>
                </div>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.budgetBox}>
                  <span className={styles.budgetLabel}>{activeLevel.budgetLabel}</span>
                  <strong className={styles.budgetValue}>{activeLevel.budget}</strong>
                </div>

                <div className={styles.factorsBox}>
                  <span className={styles.blockLabel}>
                    {"Na koszt wp\u0142ywa najbardziej"}
                  </span>
                  <div className={styles.factorTags}>
                    {activeLevel.factors.map((factor) => (
                      <span key={factor} className={styles.factorTag}>
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className={styles.cardButton}
                  label={activeLevel.ctaLabel}
                  iconName="arrowRight"
                />
              </div>
            </div>
          </article>

          <div className={styles.infoBox}>
            <span className={styles.infoTitle}>{content.factorsTitle}</span>
            <p className={styles.infoText}>{content.factorsDescription}</p>
          </div>

      
        </div>
      </div>
    </section>
  );
}

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
  ctaHref?: string;
  mediaAlt: string;
  mediaSrc: string;
  illustrationVariant?: SolutionsIllustrationVariant;
  mobileCentered?: boolean;
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
  const resolvedIllustrationVariant =
    activeItem.illustrationVariant ??
    (activeItem.iconName === "mapPin" &&
      activeItem.description.includes("układać wszystkiego od nowa")
      ? "scalableOrderBoard"
      : activeItem.iconName === "building2" &&
          activeItem.description.includes("przewidywalnych oknach realizacji")
        ? "regularWindowsBoard"
      : activeItem.iconName === "clipboardList" &&
          activeItem.description.includes("między punktami")
        ? "multiPointSystemBoard"
      : activeItem.iconName === "sparkles" &&
          activeItem.description.includes("szybkiej wycenie ze zdjęć")
        ? "quickBookingFlowBoard"
      : activeItem.iconName === "clipboardCheck" &&
          activeItem.description.includes("wykończenie")
        ? "floorQualificationBoard"
      : activeItem.iconName === "sparkles" &&
          activeItem.description.includes("śladami ruchu")
        ? "soilClassificationBoard"
      : activeItem.iconName === "shieldAlert" &&
          activeItem.description.includes("bezpieczeństwo materiału")
        ? "safeMethodFlowBoard"
      : activeItem.iconName === "building2" &&
          activeItem.description.includes("ograniczyć kolizje z użytkowaniem")
        ? "activeFacilityBoard"
      : activeItem.iconName === "clipboardList" &&
          activeItem.description.includes("historii użytkowania posadzki")
        ? "realResultBoard"
      : activeItem.iconName === "mapPin" &&
          activeItem.description.includes("Metraż jest punktem wyjścia")
        ? "pricingRangeFlowBoard"
      : activeItem.iconName === "clipboardCheck" &&
          activeItem.description.includes("harmonogram ma sens operacyjny")
        ? "cyclicalSetupBoard"
      : activeItem.iconName === "layoutGrid" &&
          activeItem.description.includes("tydzień po tygodniu")
        ? "serviceLevelBoard"
      : activeItem.iconName === "shieldAlert" &&
          activeItem.description.includes("wspierać pracę obiektu")
        ? "serviceRhythmFlowBoard"
      : activeItem.iconName === "users" &&
          activeItem.description.includes("Stały kontakt porządkuje komunikację")
        ? "singleContactGridBoard"
      : activeItem.iconName === "calendarClock" &&
          activeItem.description.includes("stabilność współpracy")
        ? "serviceStabilityBoard"
      : activeItem.iconName === "truck" &&
          activeItem.description.includes("dodatkowe prace da się korygować")
        ? "flexibleScopeFlowBoard"
      : activeItem.iconName === "grid3x3" &&
          activeItem.description.includes("stałym efekcie")
        ? "recurringModelBoard"
      : activeItem.iconName === "shieldAlert" &&
          activeItem.description.includes("układ okien")
        ? "glassAccessBoard"
      : activeItem.iconName === "mapPin" &&
          activeItem.description.includes("widełkami albo terminem")
        ? "quickEstimateFlowBoard"
      : activeItem.iconName === "mapPin" && activeItem.description.includes("ogólnopolsko")
        ? "polandEntryBoard"
      : activeItem.iconName === "shieldAlert" &&
          activeItem.description.includes("rejestr")
        ? "entryReadyBoard"
        : activeItem.iconName === "sparkles" &&
            activeItem.description.includes("finalizacja")
          ? "operationalLeadBoard"
          : activeItem.iconName === "clipboardCheck" &&
              activeItem.description.includes("protok")
            ? "handoffDocumentsBoard"
        : undefined);

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

          <div
            className={`${styles.card} ${
              activeItem.mobileCentered ? styles.cardMobileCentered : ""
            }`}
          >
            <div
              className={`${styles.cardBody} ${
                activeItem.mobileCentered ? styles.cardBodyMobileCentered : ""
              }`}
            >
              <h3 className={styles.cardTitle}>{activeItem.title}</h3>
              <p className={styles.cardText}>{activeItem.description}</p>
              <Button
                className={`${styles.cardButton} ${
                  activeItem.mobileCentered ? styles.cardButtonMobileCentered : ""
                }`}
                label={activeItem.ctaLabel}
                iconName="arrowRight"
                href={activeItem.ctaHref}
              />
            </div>
            <div
              className={`${styles.cardMedia} ${
                activeItem.mobileCentered ? styles.cardMediaMobileCentered : ""
              }`}
            >
              <div
                className={`${styles.mediaFrame} ${
                  activeItem.mobileCentered ? styles.mediaFrameMobileCentered : ""
                }`}
              >
                {resolvedIllustrationVariant ? (
                  <SolutionsIllustration variant={resolvedIllustrationVariant} />
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

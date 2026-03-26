"use client";

import type { CSSProperties } from "react";
import Icon from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./HighlightsSection.module.css";

const bubbles = [
  { text: "Nie wiem, jak...", className: "bubbleLeft" },
  { text: "Blokuje nas...", className: "bubbleTop" },
  { text: "Nie da się...", className: "bubbleRight" },
  { text: "Mamy dość...", className: "bubbleBottom" },
] as const;

const highlights = [
  {
    title: "Koordynator na miejscu i\u00A0finalizacja etapu",
    text:
      "Masz jedną osobę odpowiedzialną za realizację i jedną wersję ustaleń. Zbieramy wymagania do odbioru, dzielimy obiekt na strefy i pilnujemy kolejności prac, żeby nie wracał brud po innych ekipach. Na koniec dostajesz komplet: zakres, status, zdjęcia i protokół.",
    visual: "insights",
  },
  {
    title: "Dispatching zleceń i\u00A0dowody wykonania",
    text:
      "Zamiast telefonów i zgadywania pracujemy na przydziałach i statusach. Każda ekipa ma obiekt, godzinę wejścia, zakres i checklistę, a po pracy zostawia raport i zdjęcia. Mniej pustych przebiegów, szybsze wychwytywanie jakości i łatwiejsze wdrażanie nowych osób.",
    visual: "insights",
  },
  {
    title: "Ochrona wykończeń i\u00A0praca pod materiał",
    text:
      "Dobieramy chemię i technologię do powierzchni, żeby nie zrobić szkody na posadzkach, szkle i armaturze. Ustalamy strefy wrażliwe i sposób zabezpieczenia, a ryzyka dokumentujemy od razu protokołem, zanim przerodzą się w spór. Efekt ma być odbiorowy i bezpieczny.",
    visual: "insights",
  },
] as const;

export default function HighlightsSection() {
  // Dopasuj do wysokości headera w Twoim layoucie
  const headerOffset = "96px";

  return (
    <section
      className={styles.section}
      style={{ "--header-offset": headerOffset } as CSSProperties}
    >
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <SectionKicker label="NASZE WYRÓŻNIKI" />
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              Co realnie stoi za przewidywalną  
            </span>
            <span className={styles.titleLine}>realizacją, standardem i terminem</span>
          </h2>
          <p className={styles.subtitle}>
            Skuteczne wdrożenie w sprzątaniu B2B nie opiera się na deklaracjach, tylko na sposobie prowadzenia realizacji. W Domker łączymy koordynację na obiekcie, kontrolę wykonania, sprawny dispatching zleceń i technologię dobraną do materiałów, żeby finalizować etapy bez zbędnych powrotów, bez chaosu organizacyjnego i bez ryzyka dla nowych wykończeń.
          </p>
        </div>

        <div className={styles.cards}>
          {highlights.map((item, i) => {
            const isLast = i === highlights.length - 1;

            return (
              <div
                key={item.title}
                className={`${styles.cardWrap} ${isLast ? styles.cardWrapLast : ""}`}
                style={
                  {
                    "--stack-z": `${100 + i}`,
                  } as CSSProperties
                }
              >
                <article className={styles.card}>
                  <div className={styles.textBlock}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>

                  {item.visual === "insights" ? (
                    <div className={styles.visual}>
                      <div className={styles.trendLine} aria-hidden="true" />

                      <div className={styles.consultation}>
                        <span className={styles.leafIcon}>
                          <Icon name="chevronsRight" size="sm" />
                        </span>
                        <span className={styles.consultationText}>KONSULTACJA</span>
                      </div>

                      <div className={styles.callout}>
                        Wiemy, jak działać i nie mamy blokad w rozwoju
                      </div>

                      {bubbles.map((bubble) => (
                        <div
                          key={bubble.text}
                          className={`${styles.bubble} ${styles[bubble.className]}`}
                        >
                          {bubble.text}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
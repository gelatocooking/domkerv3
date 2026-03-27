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
    visual: "coordinator",
  },
  {
    title: "Dispatching zleceń i\u00A0dowody wykonania",
    text:
      "Zamiast telefonów i zgadywania pracujemy na przydziałach i statusach. Każda ekipa ma obiekt, godzinę wejścia, zakres i checklistę, a po pracy zostawia raport i zdjęcia. Mniej pustych przebiegów, szybsze wychwytywanie jakości i łatwiejsze wdrażanie nowych osób.",
    visual: "dispatching",
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

                  {item.visual === "coordinator" ? (
                    <div className={styles.visual}>
                      <div className={styles.coordinatorPanel}>
                        <div className={styles.coordinatorChips}>
                          <span className={styles.coordinatorChip}>Wymagania</span>
                          <span className={styles.coordinatorChip}>Strefy</span>
                          <span className={styles.coordinatorChip}>Kolejność</span>
                        </div>

                        <div className={styles.coordinatorGrid}>
                          <div className={styles.coordinatorCard}>
                            <span className={styles.coordinatorCardIcon}>
                              <Icon name="database" size="sm" />
                            </span>
                            <span className={styles.coordinatorMicroLines} aria-hidden="true">
                              <span />
                              <span />
                              <span />
                            </span>
                            <span className={styles.coordinatorCardLabel}>Zakres</span>
                          </div>

                          <div className={styles.coordinatorCard}>
                            <span className={styles.coordinatorCardIcon}>
                              <Icon name="clipboardCheck" size="sm" />
                            </span>
                            <span className={styles.coordinatorStatusBar} aria-hidden="true">
                              <span />
                            </span>
                            <span className={styles.coordinatorCardLabel}>Status</span>
                          </div>

                          <div className={styles.coordinatorCard}>
                            <span className={styles.coordinatorCardIcon}>
                              <Icon name="layoutGrid" size="sm" />
                            </span>
                            <span className={styles.coordinatorPhotoStack} aria-hidden="true">
                              <span />
                              <span />
                            </span>
                            <span className={styles.coordinatorCardLabel}>Zdjęcia</span>
                          </div>

                          <div className={styles.coordinatorCard}>
                            <span className={styles.coordinatorCardIcon}>
                              <Icon name="fileText" size="sm" />
                            </span>
                            <span className={styles.coordinatorProtocolMark} aria-hidden="true">
                              <span />
                            </span>
                            <span className={styles.coordinatorCardLabel}>Protokół</span>
                          </div>

                          <div className={styles.coordinatorCore}>
                            <span className={styles.coordinatorCoreRing} aria-hidden="true" />
                            <span className={styles.coordinatorCoreIcon}>
                              <Icon name="workflow" size="sm" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {item.visual === "dispatching" ? (
                    <div className={styles.visual}>
                      <div className={styles.dispatchPanel}>
                        <div className={styles.dispatchChips}>
                          <span className={styles.dispatchChip}>Przydziały</span>
                          <span className={styles.dispatchChip}>Statusy</span>
                          <span className={styles.dispatchChip}>Dowody</span>
                        </div>

                        <div className={styles.dispatchLayout}>
                          <div className={styles.dispatchList}>
                            <div className={styles.dispatchItem}>
                              <span className={styles.dispatchItemDot}>
                                <Icon name="store" size="sm" />
                              </span>
                              <span className={styles.dispatchItemName}>Obiekt A</span>
                              <span className={styles.dispatchItemStatus}>W drodze</span>
                            </div>

                            <div className={`${styles.dispatchItem} ${styles.dispatchItemActive}`}>
                              <span className={styles.dispatchItemDot}>
                                <Icon name="store" size="sm" />
                              </span>
                              <span className={styles.dispatchItemName}>Obiekt B</span>
                              <span className={styles.dispatchItemStatus}>W trakcie</span>
                            </div>

                            <div className={styles.dispatchItem}>
                              <span className={styles.dispatchItemDot}>
                                <Icon name="store" size="sm" />
                              </span>
                              <span className={styles.dispatchItemName}>Obiekt C</span>
                              <span className={styles.dispatchItemStatus}>Raport dodany</span>
                            </div>

                            <div className={styles.dispatchItem}>
                              <span className={styles.dispatchItemDot}>
                                <Icon name="store" size="sm" />
                              </span>
                              <span className={styles.dispatchItemName}>Obiekt D</span>
                              <span className={styles.dispatchItemStatus}>Zakończone</span>
                            </div>
                          </div>

                          <div className={styles.dispatchDetail}>
                            <div className={styles.dispatchHeader}>
                              <span className={styles.dispatchTitle}>Obiekt B</span>
                              <span className={styles.dispatchState}>W trakcie</span>
                            </div>

                            <div className={styles.dispatchMetaRow}>
                              <div className={styles.dispatchMiniCard}>
                                <span className={styles.dispatchMiniLabel}>Godzina wejścia</span>
                                <span className={styles.dispatchMiniValue}>06:00</span>
                              </div>

                              <div className={styles.dispatchMiniCard}>
                                <span className={styles.dispatchMiniLabel}>Zakres</span>
                                <span className={styles.dispatchScopeLines} aria-hidden="true">
                                  <span />
                                  <span />
                                  <span />
                                </span>
                              </div>
                            </div>

                            <div className={styles.dispatchChecklist}>
                              <span className={styles.dispatchSectionLabel}>Checklista</span>
                              <div className={styles.dispatchChecklistItem}>
                                <span className={styles.dispatchCheckDot}>
                                  <Icon name="clipboardCheck" size="sm" />
                                </span>
                                <span>Wejście potwierdzone</span>
                              </div>
                              <div className={styles.dispatchChecklistItem}>
                                <span className={`${styles.dispatchCheckDot} ${styles.dispatchCheckDotActive}`}>
                                  <Icon name="route" size="sm" />
                                </span>
                                <span>Zakres w realizacji</span>
                              </div>
                              <div className={styles.dispatchChecklistItem}>
                                <span className={styles.dispatchCheckDotEmpty} />
                                <span>Detale sprawdzone</span>
                              </div>
                            </div>

                            <div className={styles.dispatchBottomRow}>
                              <div className={styles.dispatchEvidenceCard}>
                                <span className={styles.dispatchSectionLabel}>Zdjęcia</span>
                                <span className={styles.dispatchPhotoStack} aria-hidden="true">
                                  <span />
                                  <span />
                                  <span />
                                </span>
                              </div>

                              <div className={styles.dispatchEvidenceCard}>
                                <span className={styles.dispatchSectionLabel}>Raport</span>
                                <span className={styles.dispatchReportRow}>
                                  <span className={styles.dispatchReportIcon}>
                                    <Icon name="fileText" size="sm" />
                                  </span>
                                  <span className={styles.dispatchReportStatus}>W przygotowaniu</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

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

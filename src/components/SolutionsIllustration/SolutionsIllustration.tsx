"use client";

import Icon from "../Icon/Icon";
import styles from "./SolutionsIllustration.module.css";

export type SolutionsIllustrationVariant =
  | "zonedCleaningPlan"
  | "operationalServiceBoard"
  | "logisticsServiceBoard"
  | "surfaceSelectionBoard"
  | "polandNetworkBoard";

interface SolutionsIllustrationProps {
  variant: SolutionsIllustrationVariant;
}

export default function SolutionsIllustration({
  variant,
}: SolutionsIllustrationProps) {
  if (variant === "zonedCleaningPlan") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={"Ilustracja obiektu podzielonego na strefy i kolejno\u015b\u0107 prac"}
      >
        <div className={styles.toolbar}>
          <span className={styles.toolbarPill}>{"Strefy"}</span>
          <span className={styles.toolbarPill}>{"Kolejno\u015b\u0107"}</span>
          <span className={styles.toolbarPill}>{"Odbi\u00f3r"}</span>
        </div>

        <div className={styles.plan}>
          <div className={`${styles.zone} ${styles.zoneGlass}`}>
            <span className={styles.zoneIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.zoneLabel}>{"Szk\u0142o"}</span>
          </div>

          <div className={`${styles.zone} ${styles.zoneFloor}`}>
            <span className={styles.zoneIcon}>
              <Icon name="grid3x3" size="sm" />
            </span>
            <span className={styles.zoneLabel}>{"Pod\u0142oga"}</span>
          </div>

          <div className={`${styles.zone} ${styles.zoneDetail}`}>
            <span className={styles.zoneIcon}>
              <Icon name="star" size="sm" />
            </span>
            <span className={styles.zoneLabel}>{"Detale"}</span>
          </div>
          <div className={`${styles.zone} ${styles.zoneReview}`}>
            <span className={styles.zoneIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.zoneLabel}>{"Odbi\u00f3r"}</span>
          </div>


          <div className={`${styles.routeStep} ${styles.routeStepOne}`}>
            <Icon name="chevronsRight" size="sm" />
          </div>
          <div className={`${styles.routeStep} ${styles.routeStepTwo}`}>
            <Icon name="chevronsRight" size="sm" />
          </div>
          <div className={`${styles.routeStep} ${styles.routeStepThree}`}>
            <Icon name="chevronsRight" size="sm" />
          </div>

          <div className={styles.structure}>
            <span className={styles.structureLineHorizontal} />
            <span className={styles.structureLineVertical} />
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerAccent}>
            <Icon name="workflow" size="sm" />
          </span>
          <p className={styles.footerText}>
            {"Dzia\u0142amy metodycznie, strefowo i z planem."}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "operationalServiceBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={"Ilustracja harmonogramu sta\u0142ej obs\u0142ugi i kontroli jako\u015bci"}
      >
        <div className={styles.boardHeader}>
          <div className={styles.boardHeaderMain}>
            <span className={styles.boardEyebrow}>{"Sta\u0142a obs\u0142uga"}</span>
            <span className={styles.boardTitle}>{"Panel operacyjny"}</span>
          </div>
          <span className={styles.boardStatus}>
            <Icon name="clipboardCheck" size="sm" />
            {" Ci\u0105g\u0142o\u015b\u0107 serwisu"}
          </span>
        </div>

        <div className={styles.boardGrid}>
          <div className={styles.boardCalendar}>
            <span className={styles.boardSectionLabel}>{"Tydzie\u0144"}</span>
            <div className={styles.boardDays}>
              <span className={styles.boardDay}>{"Pn"}</span>
              <span className={styles.boardDay}>{"Wt"}</span>
              <span className={styles.boardDay}>{"\u015ar"}</span>
              <span className={styles.boardDay}>{"Cz"}</span>
              <span className={styles.boardDay}>{"Pt"}</span>
            </div>
            <div className={styles.boardTimeline}>
              <span className={`${styles.boardSlot} ${styles.boardSlotDone}`} />
              <span className={`${styles.boardSlot} ${styles.boardSlotProgress}`} />
              <span className={`${styles.boardSlot} ${styles.boardSlotDone}`} />
              <span className={`${styles.boardSlot} ${styles.boardSlotPlanned}`} />
              <span className={`${styles.boardSlot} ${styles.boardSlotPlanned}`} />
            </div>
          </div>

          <div className={styles.boardTasks}>
            <span className={styles.boardSectionLabel}>{"Zadania"}</span>

            <div className={styles.taskRow}>
              <span className={styles.taskIcon}>
                <Icon name="sparkles" size="sm" />
              </span>
              <span className={styles.taskLabel}>{"Recepcja i wej\u015bcie"}</span>
              <span className={`${styles.taskBadge} ${styles.taskBadgeDone}`}>
                {"Wykonane"}
              </span>
            </div>

            <div className={styles.taskRow}>
              <span className={styles.taskIcon}>
                <Icon name="grid3x3" size="sm" />
              </span>
              <span className={styles.taskLabel}>{"Posadzki i ci\u0105gi"}</span>
              <span className={`${styles.taskBadge} ${styles.taskBadgeProgress}`}>
                {"W trakcie"}
              </span>
            </div>

            <div className={styles.taskRow}>
              <span className={styles.taskIcon}>
                <Icon name="building2" size="sm" />
              </span>
              <span className={styles.taskLabel}>{"Biura i zaplecze"}</span>
              <span className={`${styles.taskBadge} ${styles.taskBadgePlanned}`}>
                {"Zaplanowane"}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.boardFooter}>
          <div className={styles.qualityCard}>
            <span className={styles.qualityIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <div className={styles.qualityBody}>
              <span className={styles.qualityTitle}>{"Kontrola jako\u015bci"}</span>
              <span className={styles.qualityText}>
                {"Sta\u0142y standard bez ci\u0105g\u0142ego pilnowania."}
              </span>
            </div>
          </div>

          <div className={styles.stabilityCard}>
            <span className={styles.stabilitySignal}>
              <span className={styles.stabilityDot} />
            </span>
            <span className={styles.stabilityText}>{"Obiekt dzia\u0142a stabilnie."}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "logisticsServiceBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={"Ilustracja dashboardu us\u0142ugi z logistyk\u0105"}
      >
        <div className={styles.logisticsFooter}>
          <div className={styles.phoneMockup}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <div className={styles.phoneCard}>
                <span className={styles.phoneCardIcon}>
                  <Icon name="messageSquare" size="sm" />
                </span>
                <div className={styles.phoneCardBody}>
                  <span className={styles.phoneCardTitle}>{"Zdj\u0119cie"}</span>
                  <span className={styles.phoneCardMeta}>{"Witryna / okno"}</span>
                </div>
              </div>

              <div className={styles.phoneCard}>
                <span className={styles.phoneCardIcon}>
                  <Icon name="badgeDollarSign" size="sm" />
                </span>
                <div className={styles.phoneCardBody}>
                  <span className={styles.phoneCardTitle}>{"Wycena"}</span>
                  <span className={styles.phoneCardMeta}>{"Szybka"}</span>
                </div>
              </div>

              <div className={styles.phoneCard}>
                <span className={styles.phoneCardIcon}>
                  <Icon name="calendarClock" size="sm" />
                </span>
                <div className={styles.phoneCardBody}>
                  <span className={styles.phoneCardTitle}>{"Termin"}</span>
                  <span className={styles.phoneCardMeta}>{"NA CITO"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.logisticsBadgeRow}>
            <span className={`${styles.logisticsBadge} ${styles.logisticsBadgeDate}`}>
              {"Gotowe"}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "surfaceSelectionBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={"Ilustracja doboru technologii do rodzaju posadzki"}
      >
        <div className={styles.surfaceHeader}>
          <span className={styles.surfaceEyebrow}>{"Panel doboru"}</span>
          <span className={styles.surfaceTitle}>{"Parametry czyszczenia"}</span>
        </div>

        <div className={styles.surfaceBoard}>
          <div className={styles.surfaceControl}>
            <div className={styles.surfaceControlHead}>
              <span className={styles.surfaceControlLabel}>{"Nawierzchnia"}</span>
              <span className={styles.surfaceControlValue}>{"Dobrana"}</span>
            </div>
            <div className={styles.surfaceTrack}>
              <span className={`${styles.surfaceTrackFill} ${styles.surfaceTrackFillSurface}`} />
            </div>
          </div>

          <div className={styles.surfaceControl}>
            <div className={styles.surfaceControlHead}>
              <span className={styles.surfaceControlLabel}>{"Zabrudzenie"}</span>
              <span className={styles.surfaceControlValue}>{"Analiza"}</span>
            </div>
            <div className={styles.surfaceTrack}>
              <span className={`${styles.surfaceTrackFill} ${styles.surfaceTrackFillDirt}`} />
            </div>
          </div>

          

         
        </div>

        <div className={styles.surfaceFooter}>
          <span className={styles.surfaceFooterIcon}>
            <Icon name="clipboardCheck" size="sm" />
          </span>
          <span className={styles.surfaceFooterText}>{"Efekt ko\u0144cowy"}</span>
        </div>
      </div>
    );
  }

  if (variant === "polandNetworkBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={"Ilustracja sieci punktów realizacji na mapie Polski"}
      >
        <div className={styles.networkHeader}>
          <span className={styles.networkEyebrow}>{"Zasięg realizacji"}</span>
          <span className={styles.networkTitle}>{"Jedna współpraca, wiele miast"}</span>
        </div>

        <div className={styles.networkBoard}>
          <svg
            viewBox="0 0 240 180"
            className={styles.networkMap}
            aria-hidden="true"
            focusable="false"
          >
            <path
              className={styles.networkOutline}
              d="M56 36
                L80 32 L88 18 L104 12 L122 10 L130 18
                L126 26 L132 32 L144 26 L160 32 L182 32
                L202 28 L214 42 L214 62 L222 82 L224 104
                L216 116 L224 126 L222 144 L208 154 L196 176
                L204 194 L200 210 L180 202 L166 196 L150 196
                L140 200 L134 190 L126 192 L114 188 L104 168
                L94 174 L86 158 L72 154 L62 148 L54 156
                L44 146 L50 136 L50 126 L40 126 L30 116
                L26 100 L30 88 L22 76 L28 66 L20 54 L26 40 Z"
            />
            <path className={styles.networkLine} d="M66 56 L108 44 L154 54 L186 76" />
            <path className={styles.networkLine} d="M66 56 L78 100 L108 134" />
            <path className={styles.networkLine} d="M108 44 L126 86 L108 134" />
            <path className={styles.networkLine} d="M154 54 L126 86 L170 122" />
            <path className={styles.networkLine} d="M186 76 L170 122 L108 134" />
            <path className={styles.networkLine} d="M78 100 L126 86 L170 122" />
            <circle className={styles.networkNode} cx="66" cy="56" r="5" />
            <circle className={styles.networkNode} cx="108" cy="44" r="5" />
            <circle className={styles.networkNode} cx="154" cy="54" r="5" />
            <circle className={styles.networkNode} cx="186" cy="76" r="5" />
            <circle className={styles.networkNode} cx="78" cy="100" r="5" />
            <circle className={styles.networkNode} cx="126" cy="86" r="6" />
            <circle className={styles.networkNode} cx="170" cy="122" r="5" />
            <circle className={styles.networkNode} cx="108" cy="134" r="5" />
          </svg>

          
        </div>

        <div className={styles.networkFooter}>
          <span className={styles.networkFooterIcon}>
            <Icon name="workflow" size="sm" />
          </span>
          <span className={styles.networkFooterText}>{"1 partner / wiele punktów"}</span>
        </div>
      </div>
    );
  }

  return null;
}

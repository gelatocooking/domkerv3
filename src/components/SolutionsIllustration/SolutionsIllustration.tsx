"use client";

import Icon from "../Icon/Icon";
import styles from "./SolutionsIllustration.module.css";

export type SolutionsIllustrationVariant =
  | "zonedCleaningPlan"
  | "operationalServiceBoard"
  | "logisticsServiceBoard"
  | "surfaceSelectionBoard"
  | "polandNetworkBoard"
  | "acceptanceStandardBoard"
  | "acceptancePriorityMap"
  | "materialMethodBoard"
  | "internalReviewFlowBoard"
  | "capacityScaleBoard"
  | "polandEntryBoard"
  | "singleContactFlowBoard"
  | "offerHandoffFlowBoard"
  | "entryReadyBoard"
  | "operationalLeadBoard"
  | "handoffDocumentsBoard"
  | "scalableOrderBoard"
  | "regularWindowsBoard"
  | "multiPointSystemBoard"
  | "quickBookingFlowBoard"
  | "recurringModelBoard"
  | "glassAccessBoard"
  | "quickEstimateFlowBoard"
  | "floorQualificationBoard"
  | "soilClassificationBoard"
  | "safeMethodFlowBoard"
  | "activeFacilityBoard"
  | "realResultBoard"
  | "pricingRangeFlowBoard"
  | "cyclicalSetupBoard"
  | "serviceLevelBoard"
  | "serviceRhythmFlowBoard"
  | "singleContactGridBoard"
  | "serviceStabilityBoard"
  | "flexibleScopeFlowBoard";

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
            viewBox="0 0 240 220"
            className={styles.networkMap}
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
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

  if (variant === "polandEntryBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja ogólnopolskiego zasięgu i organizacji wejścia pod termin, dostęp i procedury"
        }
      >
        <div className={styles.entryToolbar}>
          <span className={styles.entryChip}>{"Polska"}</span>
          <span className={styles.entryChip}>{"Termin"}</span>
          <span className={styles.entryChip}>{"Wejście"}</span>
        </div>

        <div className={styles.entryBoard}>
          <svg
            viewBox="0 0 240 220"
            className={styles.entryMap}
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              className={styles.entryOutline}
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
          </svg>

          <div className={styles.entryModules}>
            <div className={styles.entryModule}>
              <span className={styles.entryModuleIcon}>
                <Icon name="calendarClock" size="sm" />
              </span>
              <span className={styles.entryModuleLabel}>{"Termin"}</span>
            </div>

            <div className={styles.entryModule}>
              <span className={styles.entryModuleIcon}>
                <Icon name="building2" size="sm" />
              </span>
              <span className={styles.entryModuleLabel}>{"Dostęp"}</span>
            </div>

            <div className={styles.entryModule}>
              <span className={styles.entryModuleIcon}>
                <Icon name="clipboardCheck" size="sm" />
              </span>
              <span className={styles.entryModuleLabel}>{"Procedury"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "acceptanceStandardBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja klasyfikacji typu odbioru, standardu i zakresu przed startem realizacji"
        }
      >
        <div className={styles.acceptanceToolbar}>
          <span className={styles.acceptanceChip}>{"Typ odbioru"}</span>
          <span className={styles.acceptanceChip}>{"Standard"}</span>
          <span className={styles.acceptanceChip}>{"Zakres"}</span>
        </div>

        <div className={styles.acceptanceGrid}>
          <div className={`${styles.acceptanceTile} ${styles.acceptanceTileInvestor}`}>
            <span className={styles.acceptanceTileIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.acceptanceTileDetail} />
            <span className={styles.acceptanceTileLabel}>{"Inwestorski"}</span>
          </div>

          <div className={`${styles.acceptanceTile} ${styles.acceptanceTileOffice}`}>
            <span className={styles.acceptanceTileIcon}>
              <Icon name="fileText" size="sm" />
            </span>
            <span className={styles.acceptanceTileDetail} />
            <span className={styles.acceptanceTileLabel}>{"Urzędowy"}</span>
          </div>

          <div className={`${styles.acceptanceTile} ${styles.acceptanceTileApartments}`}>
            <span className={styles.acceptanceTileIcon}>
              <Icon name="building2" size="sm" />
            </span>
            <span className={styles.acceptanceTileDetail} />
            <span className={styles.acceptanceTileLabel}>{"Mieszkania"}</span>
          </div>

          <div className={`${styles.acceptanceTile} ${styles.acceptanceTileShared}`}>
            <span className={styles.acceptanceTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.acceptanceTileDetail} />
            <span className={styles.acceptanceTileLabel}>{"Części wspólne"}</span>
          </div>

          <div className={styles.acceptanceCenterBadge}>
            <Icon name="clipboardList" size="sm" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "acceptancePriorityMap") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja mapy priorytetów odbiorowych z wyróżnionymi strefami ocenianymi jako pierwsze"
        }
      >
        <div className={styles.priorityToolbar}>
          <span className={styles.priorityChip}>{"Strefy"}</span>
          <span className={styles.priorityChip}>{"Priorytet"}</span>
          <span className={styles.priorityChip}>{"Odbiór"}</span>
        </div>

        <div className={styles.priorityMap}>
          <div className={`${styles.priorityZone} ${styles.priorityZoneEntrances}`}>
            <span className={styles.priorityZoneIcon}>
              <Icon name="building2" size="sm" />
            </span>
            <span className={styles.priorityZoneBadge}>{"Priorytet"}</span>
            <span className={styles.priorityZoneDetail} />
            <span className={styles.priorityZoneLabel}>{"Wejścia"}</span>
          </div>

          <div className={`${styles.priorityZone} ${styles.priorityZoneGlass}`}>
            <span className={styles.priorityZoneIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.priorityZoneBadge}>{"Priorytet"}</span>
            <span className={styles.priorityZoneDetail} />
            <span className={styles.priorityZoneLabel}>{"Przeszklenia"}</span>
          </div>

          <div className={`${styles.priorityZone} ${styles.priorityZoneTraffic}`}>
            <span className={styles.priorityZoneIcon}>
              <Icon name="route" size="sm" />
            </span>
            <span className={styles.priorityZoneDetail} />
            <span className={styles.priorityZoneLabel}>{"Komunikacja"}</span>
          </div>

          <div className={`${styles.priorityZone} ${styles.priorityZoneShared}`}>
            <span className={styles.priorityZoneIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.priorityZoneDetail} />
            <span className={styles.priorityZoneLabel}>{"Wspólne"}</span>
          </div>

          <div className={`${styles.priorityZone} ${styles.priorityZoneGarage}`}>
            <span className={styles.priorityZoneLabel}>{"Garaże"}</span>
          </div>


        </div>
      </div>
    );
  }

  if (variant === "materialMethodBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja doboru bezpiecznej technologii do rodzaju powierzchni i materiału"
        }
      >
        <div className={styles.materialBoard}>
          <div className={styles.materialGrid}>
            <div className={`${styles.materialTile} ${styles.materialTileActive}`}>
              <span className={styles.materialTileIcon}>
                <Icon name="grid3x3" size="sm" />
              </span>
              <span className={styles.materialTileSurface} />
              <span className={styles.materialTileLabel}>{"Posadzki"}</span>
            </div>

            <div className={styles.materialTile}>
              <span className={styles.materialTileIcon}>
                <Icon name="sparkles" size="sm" />
              </span>
              <span className={styles.materialTileGlass}>
                <span className={styles.materialTileGlassLine} />
              </span>
              <span className={styles.materialTileLabel}>{"Szyby"}</span>
            </div>

            <div className={styles.materialTile}>
              <span className={styles.materialTileIcon}>
                <Icon name="shieldAlert" size="sm" />
              </span>
              <span className={styles.materialTileFixture}>
                <span className={styles.materialTileFixtureDot} />
              </span>
              <span className={styles.materialTileLabel}>{"Armatura"}</span>
            </div>

            <div className={styles.materialTile}>
              <span className={styles.materialTileIcon}>
                <Icon name="layoutGrid" size="sm" />
              </span>
              <span className={styles.materialTileProfile}>
                <span className={styles.materialTileProfileCorner} />
              </span>
              <span className={styles.materialTileLabel}>{"Profile"}</span>
            </div>
          </div>

          <div className={styles.materialHub}>
            <span className={styles.materialHubBadge}>
              <Icon name="workflow" size="sm" />
            </span>
          </div>

          <div className={styles.materialDetail}>
            <div className={styles.materialDetailHeader}>
              <span className={styles.materialDetailTitle}>{"Posadzki"}</span>
              <span className={styles.materialDetailTag}>{"Wrażliwe"}</span>
            </div>

            <div className={styles.materialDetailBlock}>
              <span className={styles.materialDetailLabel}>{"Ryzyko"}</span>
              <span className={styles.materialDetailText}>{"Rysy"}</span>
              <span className={styles.materialDetailText}>{"Zmatowienia"}</span>
            </div>

            <div className={styles.materialDetailBlock}>
              <span className={styles.materialDetailLabel}>{"Metoda"}</span>
              <span className={styles.materialDetailLine} />
              <span className={styles.materialDetailLineWide} />
            </div>

            <div className={styles.materialDetailBlock}>
              <span className={styles.materialDetailLabel}>{"Narzędzia"}</span>
              <span className={styles.materialDetailLineShort} />
            </div>

            <div className={styles.materialDetailBlock}>
              <span className={styles.materialDetailLabel}>{"Efekt"}</span>
              <span className={styles.materialDetailSafe}>{"Bez zacieków"}</span>
              <span className={styles.materialDetailSafe}>{"Bezpiecznie"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "internalReviewFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja wewnętrznego procesu kontroli jakości przed zgłoszeniem etapu jako gotowego"
        }
      >
        <div className={styles.reviewFlowToolbar}>
          <span className={styles.reviewFlowChip}>{"Kontrola"}</span>
          <span className={styles.reviewFlowChip}>{"Poprawki"}</span>
          <span className={styles.reviewFlowChip}>{"Gotowość"}</span>
        </div>

        <div className={styles.reviewFlowBoard}>
          <div className={styles.reviewFlowStep}>
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Checklista"}</span>
          </div>

          <div className={styles.reviewFlowStep}>
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Wewnętrznie"}</span>
          </div>

          <div
            className={`${styles.reviewFlowStep} ${styles.reviewFlowStepSuccess}`}
          >
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Gotowe"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "capacityScaleBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja skali realizacji od lokali po większe obiekty i etapy wraz z wydajnością operacyjną"
        }
      >
        <div className={styles.capacityToolbar}>
          <span className={styles.capacityChip}>{"Skala"}</span>
          <span className={styles.capacityChip}>{"Etap"}</span>
          <span className={styles.capacityChip}>{"Wydajność"}</span>
        </div>

        <div className={styles.capacityGrid}>
          <div className={styles.capacityTile}>
            <span className={styles.capacityTileIcon}>
              <Icon name="building2" size="sm" />
            </span>
            <span className={styles.capacityTileDetail} />
            <span className={styles.capacityTileLabel}>{"Lokale"}</span>
          </div>

          <div className={styles.capacityTile}>
            <span className={styles.capacityTileIcon}>
              <Icon name="hardHat" size="sm" />
            </span>
            <span className={styles.capacityTileDetail} />
            <span className={styles.capacityTileLabel}>{"Obiekty"}</span>
          </div>

          <div className={styles.capacityTile}>
            <span className={styles.capacityTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.capacityTileDetail} />
            <span className={styles.capacityTileLabel}>{"Etapy"}</span>
          </div>

          <div className={`${styles.capacityTile} ${styles.capacityTileAccent}`}>
            <span className={styles.capacityTileIcon}>
              <Icon name="grid3x3" size="sm" />
            </span>
            <span className={styles.capacityTileMetric}>{"5000 m²"}</span>
            <span className={styles.capacityTileMicro} aria-hidden="true">
              <span />
              <span />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "entryReadyBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja panelu gotowości wejścia z dostępami, NDA, rejestrem i procedurami przygotowanymi przed startem"
        }
        >
        <div className={styles.entryReadyToolbar}>
          <span className={styles.reviewFlowChip}>{"Dostęp"}</span>
          <span className={styles.reviewFlowChip}>{"Procedury"}</span>
          <span className={styles.reviewFlowChip}>{"Start"}</span>
        </div>

        <div className={styles.entryReadyGrid}>
          <div className={`${styles.entryReadyTile} ${styles.entryReadyTileAccess}`}>
            <span className={styles.entryReadyTileIcon}>
              <Icon name="building2" size="sm" />
            </span>
            <span className={styles.entryReadyTileDetail} />
            <span className={styles.entryReadyTileLabel}>{"Dostępy"}</span>
          </div>

          <div className={`${styles.entryReadyTile} ${styles.entryReadyTileNda}`}>
            <span className={styles.entryReadyTileIcon}>
              <Icon name="shieldAlert" size="sm" />
            </span>
            <span className={styles.entryReadyTileDetail} />
            <span className={styles.entryReadyTileLabel}>{"NDA"}</span>
          </div>

          <div className={`${styles.entryReadyTile} ${styles.entryReadyTileRegister}`}>
            <span className={styles.entryReadyTileIcon}>
              <Icon name="clipboardList" size="sm" />
            </span>
            <span className={styles.entryReadyTileDetail} />
            <span className={styles.entryReadyTileLabel}>{"Rejestr"}</span>
          </div>

          <div className={`${styles.entryReadyTile} ${styles.entryReadyTileRules}`}>
            <span className={styles.entryReadyTileIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.entryReadyTileDetail} />
            <span className={styles.entryReadyTileLabel}>{"Procedury"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "operationalLeadBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja operacyjnego prowadzenia realizacji z akceptacją po stronie klienta i finalizacją po stronie wykonawcy"
        }
        >
        <div className={styles.leadToolbar}>
          <span className={styles.reviewFlowChip}>{"Decyzja"}</span>
          <span className={styles.reviewFlowChip}>{"Prowadzenie"}</span>
          <span className={styles.reviewFlowChip}>{"Finał"}</span>
        </div>

        <div className={styles.leadBoard}>
          <div className={styles.leadMinorTile}>
            <span className={styles.leadMinorIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.leadMinorLabel}>{"Akceptacja"}</span>
          </div>

          <div className={styles.leadMainTile}>
            <span className={styles.leadMainIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.leadMainDetail}>
              <span />
              <span />
            </span>
            <span className={styles.leadMainLabel}>{"Proces"}</span>
          </div>

          <div className={styles.leadMinorTile}>
            <span className={styles.leadMinorIcon}>
              <Icon name="fileText" size="sm" />
            </span>
            <span className={styles.leadMinorLabel}>{"Finalizacja"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "handoffDocumentsBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja uporządkowanego pakietu dokumentów końcowych po realizacji: zdjęć, protokołu, potwierdzenia i zamknięcia"
        }
      >
        <div className={styles.documentsToolbar}>
          <span className={styles.reviewFlowChip}>{"Zdjęcia"}</span>
          <span className={styles.reviewFlowChip}>{"Protokół"}</span>
          <span className={styles.reviewFlowChip}>{"Zamknięcie"}</span>
        </div>

        <div className={styles.documentsGrid}>
          <div className={`${styles.documentsTile} ${styles.documentsTilePhotos}`}>
            <span className={styles.documentsTileIcon}>
              <Icon name="messageSquare" size="sm" />
            </span>
            <span className={styles.documentsTileDetail} />
            <span className={styles.documentsTileLabel}>{"Zdjęcia"}</span>
          </div>

          <div className={`${styles.documentsTile} ${styles.documentsTileProtocol}`}>
            <span className={styles.documentsTileIcon}>
              <Icon name="fileText" size="sm" />
            </span>
            <span className={styles.documentsTileDetail} />
            <span className={styles.documentsTileLabel}>{"Protokół"}</span>
          </div>

          <div className={`${styles.documentsTile} ${styles.documentsTileConfirmation}`}>
            <span className={styles.documentsTileIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.documentsTileDetail} />
            <span className={styles.documentsTileLabel}>{"Potwierdzenie"}</span>
          </div>

          <div className={`${styles.documentsTile} ${styles.documentsTileClosure}`}>
            <span className={styles.documentsTileIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.documentsTileDetail} />
            <span className={styles.documentsTileLabel}>{"Zamknięcie"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "scalableOrderBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja uporządkowanego modelu współpracy działającego przy jednym obiekcie, wielu lokalizacjach i kilku etapach"
        }
      >
        <div className={styles.scalableToolbar}>
          <span className={styles.reviewFlowChip}>{"Obiekt"}</span>
          <span className={styles.reviewFlowChip}>{"Skala"}</span>
          <span className={styles.reviewFlowChip}>{"Porządek"}</span>
        </div>

        <div className={styles.scalableGrid}>
          <div className={`${styles.scalableTile} ${styles.scalableTileObject}`}>
            <span className={styles.scalableTileIcon}>
              <Icon name="building2" size="sm" />
            </span>
            <span className={styles.scalableTileDetail} />
            <span className={styles.scalableTileLabel}>{"Obiekt"}</span>
          </div>

          <div className={`${styles.scalableTile} ${styles.scalableTileLocations}`}>
            <span className={styles.scalableTileIcon}>
              <Icon name="mapPin" size="sm" />
            </span>
            <span className={styles.scalableTileDetail}>
              <span />
              <span />
            </span>
            <span className={styles.scalableTileLabel}>{"Lokalizacje"}</span>
          </div>

          <div className={`${styles.scalableTile} ${styles.scalableTileStages}`}>
            <span className={styles.scalableTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.scalableTileDetail} />
            <span className={styles.scalableTileLabel}>{"Etapy"}</span>
          </div>

          <div className={`${styles.scalableTile} ${styles.scalableTileSystem}`}>
            <span className={styles.scalableTileIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.scalableTileDetail} />
            <span className={styles.scalableTileLabel}>{"Porządek"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "regularWindowsBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja regularnego modelu współpracy dla lokali, handlu, witryn i okien w przewidywalnych oknach realizacji"
        }
      >
        <div className={styles.windowsRegularToolbar}>
          <span className={styles.reviewFlowChip}>{"Regularnie"}</span>
          <span className={styles.reviewFlowChip}>{"Witryny"}</span>
          <span className={styles.reviewFlowChip}>{"Terminy"}</span>
        </div>

        <div className={styles.windowsRegularGrid}>
          <div className={`${styles.windowsRegularTile} ${styles.windowsRegularTileLocal}`}>
            <span className={styles.windowsRegularTileIcon}>
              <Icon name="building2" size="sm" />
            </span>
            <span className={styles.windowsRegularTileDetail} />
            <span className={styles.windowsRegularTileLabel}>{"Lokale"}</span>
          </div>

          <div className={`${styles.windowsRegularTile} ${styles.windowsRegularTileRetail}`}>
            <span className={styles.windowsRegularTileIcon}>
              <Icon name="store" size="sm" />
            </span>
            <span className={styles.windowsRegularTileDetail} />
            <span className={styles.windowsRegularTileLabel}>{"Handel"}</span>
          </div>

          <div className={`${styles.windowsRegularTile} ${styles.windowsRegularTileGlass}`}>
            <span className={styles.windowsRegularTileIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.windowsRegularTileDetail} />
            <span className={styles.windowsRegularTileLabel}>{"Witryny"}</span>
          </div>

          <div className={`${styles.windowsRegularTile} ${styles.windowsRegularTileWindows}`}>
            <span className={styles.windowsRegularTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.windowsRegularTileDetail} />
            <span className={styles.windowsRegularTileLabel}>{"Okna"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "multiPointSystemBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja wielu punktów objętych jednym standardem i jedną organizacją usługi"
        }
      >
        <div className={styles.multiPointToolbar}>
          <span className={styles.reviewFlowChip}>{"Punkty"}</span>
          <span className={styles.reviewFlowChip}>{"Standard"}</span>
          <span className={styles.reviewFlowChip}>{"Organizacja"}</span>
        </div>

        <div className={styles.multiPointBoard}>
          <div className={styles.multiPointList}>
            <div className={styles.multiPointItem}>
              <span className={styles.multiPointItemIcon}>
                <Icon name="store" size="sm" />
              </span>
              <span className={styles.multiPointItemLabel}>{"Punkt A"}</span>
            </div>

            <div className={styles.multiPointItem}>
              <span className={styles.multiPointItemIcon}>
                <Icon name="store" size="sm" />
              </span>
              <span className={styles.multiPointItemLabel}>{"Punkt B"}</span>
            </div>

            <div className={styles.multiPointItem}>
              <span className={styles.multiPointItemIcon}>
                <Icon name="store" size="sm" />
              </span>
              <span className={styles.multiPointItemLabel}>{"Punkt C"}</span>
            </div>
          </div>

          <div className={styles.multiPointSystem}>
            <span className={styles.multiPointSystemIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.multiPointSystemDetail}>
              <span />
              <span />
            </span>
            <span className={styles.multiPointSystemLabel}>{"System"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "quickBookingFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja prostego modelu umawiania usługi: zdjęcia, wycena i termin"
        }
      >
        <div className={styles.quickBookingToolbar}>
          <span className={styles.reviewFlowChip}>{"Zdjęcia"}</span>
          <span className={styles.reviewFlowChip}>{"Wycena"}</span>
          <span className={styles.reviewFlowChip}>{"Termin"}</span>
        </div>

        <div className={styles.quickBookingBoard}>
          <div className={styles.quickBookingStep}>
            <span className={styles.quickBookingStepIcon}>
              <Icon name="messageSquare" size="sm" />
            </span>
            <span className={styles.quickBookingStepLabel}>{"Zdjęcia"}</span>
          </div>

          <div className={styles.quickBookingStep}>
            <span className={styles.quickBookingStepIcon}>
              <Icon name="fileText" size="sm" />
            </span>
            <span className={styles.quickBookingStepLabel}>{"Wycena"}</span>
          </div>

          <div className={`${styles.quickBookingStep} ${styles.quickBookingStepAccent}`}>
            <span className={styles.quickBookingStepIcon}>
              <Icon name="calendarClock" size="sm" />
            </span>
            <span className={styles.quickBookingStepLabel}>{"Termin"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "recurringModelBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja wyboru między jednorazowym wejściem a cyklicznym modelem usługi"
        }
      >
        <div className={styles.recurringToolbar}>
          <span className={styles.reviewFlowChip}>{"Wejście"}</span>
          <span className={styles.reviewFlowChip}>{"Rytm"}</span>
          <span className={styles.reviewFlowChip}>{"Efekt"}</span>
        </div>

        <div className={styles.recurringGrid}>
          <div className={`${styles.recurringTile} ${styles.recurringTileSingle}`}>
            <span className={styles.recurringTileIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.recurringTileDetail} />
            <span className={styles.recurringTileLabel}>{"Jednorazowo"}</span>
          </div>

          <div className={`${styles.recurringTile} ${styles.recurringTileRecurring}`}>
            <span className={styles.recurringTileIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.recurringTileDetail} />
            <span className={styles.recurringTileLabel}>{"Cyklicznie"}</span>
          </div>

          <div className={`${styles.recurringTile} ${styles.recurringTileEffect}`}>
            <span className={styles.recurringTileIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.recurringTileDetail} />
            <span className={styles.recurringTileLabel}>{"Efekt"}</span>
          </div>

          <div className={`${styles.recurringTile} ${styles.recurringTileRhythm}`}>
            <span className={styles.recurringTileIcon}>
              <Icon name="calendarClock" size="sm" />
            </span>
            <span className={styles.recurringTileDetail} />
            <span className={styles.recurringTileLabel}>{"Rytm"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "glassAccessBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja warunków wejścia przy przeszkleniach: szyby, układ, dostęp oraz wspólny moduł wejścia"
        }
      >
        <div className={styles.glassAccessToolbar}>
          <span className={styles.reviewFlowChip}>{"Szyby"}</span>
          <span className={styles.reviewFlowChip}>{"Układ"}</span>
          <span className={styles.reviewFlowChip}>{"Dostęp"}</span>
        </div>

        <div className={styles.glassAccessBoard}>
          <div className={styles.glassAccessList}>
            <div className={styles.glassAccessItem}>
              <span className={styles.glassAccessItemIcon}>
                <Icon name="sparkles" size="sm" />
              </span>
              <span className={styles.glassAccessItemLabel}>{"Szyby"}</span>
            </div>

            <div className={styles.glassAccessItem}>
              <span className={styles.glassAccessItemIcon}>
                <Icon name="layoutGrid" size="sm" />
              </span>
              <span className={styles.glassAccessItemLabel}>{"Układ"}</span>
            </div>

            <div className={styles.glassAccessItem}>
              <span className={styles.glassAccessItemIcon}>
                <Icon name="building2" size="sm" />
              </span>
              <span className={styles.glassAccessItemLabel}>{"Dostęp"}</span>
            </div>
          </div>

          <div className={styles.glassAccessMain}>
            <span className={styles.glassAccessMainIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.glassAccessMainDetail} />
            <span className={styles.glassAccessMainLabel}>{"Wejście"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "quickEstimateFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja szybkiej kwalifikacji usługi: zdjęcia, widełki i termin"
        }
      >
        <div className={styles.quickEstimateToolbar}>
          <span className={styles.reviewFlowChip}>{"Zdjęcia"}</span>
          <span className={styles.reviewFlowChip}>{"Widełki"}</span>
          <span className={styles.reviewFlowChip}>{"Termin"}</span>
        </div>

        <div className={styles.quickEstimateBoard}>
          <div className={styles.quickEstimateStep}>
            <span className={styles.quickEstimateStepIcon}>
              <Icon name="messageSquare" size="sm" />
            </span>
            <span className={styles.quickEstimateStepLabel}>{"Zdjęcia"}</span>
          </div>

          <div className={styles.quickEstimateStep}>
            <span className={styles.quickEstimateStepIcon}>
              <Icon name="badgeDollarSign" size="sm" />
            </span>
            <span className={styles.quickEstimateStepLabel}>{"Widełki"}</span>
          </div>

          <div className={styles.quickEstimateStep}>
            <span className={styles.quickEstimateStepIcon}>
              <Icon name="calendarClock" size="sm" />
            </span>
            <span className={styles.quickEstimateStepLabel}>{"Termin"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "floorQualificationBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja pierwszej kwalifikacji posadzki na podstawie materiału, wykończenia, zabrudzeń i śladów"
        }
      >
        <div className={styles.floorQualificationToolbar}>
          <span className={styles.reviewFlowChip}>{"Posadzka"}</span>
          <span className={styles.reviewFlowChip}>{"Stan"}</span>
          <span className={styles.reviewFlowChip}>{"Metoda"}</span>
        </div>

        <div className={styles.floorQualificationGrid}>
          <div className={`${styles.floorQualificationTile} ${styles.floorQualificationTileSurface}`}>
            <span className={styles.floorQualificationTileIcon}>
              <Icon name="grid3x3" size="sm" />
            </span>
            <span className={styles.floorQualificationTileDetail} />
            <span className={styles.floorQualificationTileLabel}>{"Materiał"}</span>
          </div>

          <div className={`${styles.floorQualificationTile} ${styles.floorQualificationTileFinish}`}>
            <span className={styles.floorQualificationTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.floorQualificationTileDetail} />
            <span className={styles.floorQualificationTileLabel}>{"Wykończenie"}</span>
          </div>

          <div className={`${styles.floorQualificationTile} ${styles.floorQualificationTileDirt}`}>
            <span className={styles.floorQualificationTileIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.floorQualificationTileDetail} />
            <span className={styles.floorQualificationTileLabel}>{"Zabrudzenia"}</span>
          </div>

          <div className={`${styles.floorQualificationTile} ${styles.floorQualificationTileMarks}`}>
            <span className={styles.floorQualificationTileIcon}>
              <Icon name="shieldAlert" size="sm" />
            </span>
            <span className={styles.floorQualificationTileDetail} />
            <span className={styles.floorQualificationTileLabel}>{"Ślady"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "soilClassificationBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja rozróżniania pyłu, osadów i śladów przed doborem metody pracy"
        }
      >
        <div className={styles.soilClassificationToolbar}>
          <span className={styles.reviewFlowChip}>{"Osady"}</span>
          <span className={styles.reviewFlowChip}>{"Ślady"}</span>
          <span className={styles.reviewFlowChip}>{"Dobór"}</span>
        </div>

        <div className={styles.soilClassificationBoard}>
          <div className={styles.soilClassificationList}>
            <div className={styles.soilClassificationItem}>
              <span className={styles.soilClassificationItemIcon}>
                <Icon name="sparkles" size="sm" />
              </span>
              <span className={styles.soilClassificationItemLabel}>{"Pył"}</span>
            </div>

            <div className={styles.soilClassificationItem}>
              <span className={styles.soilClassificationItemIcon}>
                <Icon name="layoutGrid" size="sm" />
              </span>
              <span className={styles.soilClassificationItemLabel}>{"Osady"}</span>
            </div>

            <div className={styles.soilClassificationItem}>
              <span className={styles.soilClassificationItemIcon}>
                <Icon name="shieldAlert" size="sm" />
              </span>
              <span className={styles.soilClassificationItemLabel}>{"Ślady"}</span>
            </div>
          </div>

          <div className={styles.soilClassificationMain}>
            <span className={styles.soilClassificationMainIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.soilClassificationMainDetail} />
            <span className={styles.soilClassificationMainLabel}>{"Metoda"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "safeMethodFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja ostrożnego doboru chemii i padów prowadzącego do bezpiecznego efektu na posadzce"
        }
      >
        <div className={styles.safeMethodToolbar}>
          <span className={styles.reviewFlowChip}>{"Chemia"}</span>
          <span className={styles.reviewFlowChip}>{"Pady"}</span>
          <span className={styles.reviewFlowChip}>{"Bezpiecznie"}</span>
        </div>

        <div className={styles.safeMethodBoard}>
          <div className={styles.safeMethodStep}>
            <span className={styles.safeMethodStepIcon}>
              <Icon name="plugZap" size="sm" />
            </span>
            <span className={styles.safeMethodStepLabel}>{"Chemia"}</span>
          </div>

          <div className={styles.safeMethodStep}>
            <span className={styles.safeMethodStepIcon}>
              <Icon name="circle" size="sm" />
            </span>
            <span className={styles.safeMethodStepLabel}>{"Pady"}</span>
          </div>

          <div className={`${styles.safeMethodStep} ${styles.safeMethodStepAccent}`}>
            <span className={styles.safeMethodStepIcon}>
              <Icon name="shieldAlert" size="sm" />
            </span>
            <span className={styles.safeMethodStepLabel}>{"Efekt"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "activeFacilityBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja dopasowania realizacji do warunków pracy, stref, rytmu i ruchu w działającym obiekcie"
        }
      >
        <div className={styles.activeFacilityToolbar}>
          <span className={styles.reviewFlowChip}>{"Strefy"}</span>
          <span className={styles.reviewFlowChip}>{"Rytm"}</span>
          <span className={styles.reviewFlowChip}>{"Praca"}</span>
        </div>

        <div className={styles.activeFacilityGrid}>
          <div className={`${styles.activeFacilityTile} ${styles.activeFacilityTileConditions}`}>
            <span className={styles.activeFacilityTileIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.activeFacilityTileDetail} />
            <span className={styles.activeFacilityTileLabel}>{"Warunki"}</span>
          </div>

          <div className={`${styles.activeFacilityTile} ${styles.activeFacilityTileZones}`}>
            <span className={styles.activeFacilityTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.activeFacilityTileDetail} />
            <span className={styles.activeFacilityTileLabel}>{"Strefy"}</span>
          </div>

          <div className={`${styles.activeFacilityTile} ${styles.activeFacilityTileRhythm}`}>
            <span className={styles.activeFacilityTileIcon}>
              <Icon name="calendarClock" size="sm" />
            </span>
            <span className={styles.activeFacilityTileDetail} />
            <span className={styles.activeFacilityTileLabel}>{"Rytm"}</span>
          </div>

          <div className={`${styles.activeFacilityTile} ${styles.activeFacilityTileTraffic}`}>
            <span className={styles.activeFacilityTileIcon}>
              <Icon name="route" size="sm" />
            </span>
            <span className={styles.activeFacilityTileDetail} />
            <span className={styles.activeFacilityTileLabel}>{"Ruch"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "realResultBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja uczciwej oceny realnego efektu na podstawie materiału, zabrudzeń i historii nawierzchni"
        }
      >
        <div className={styles.realResultToolbar}>
          <span className={styles.reviewFlowChip}>{"Materiał"}</span>
          <span className={styles.reviewFlowChip}>{"Stan"}</span>
          <span className={styles.reviewFlowChip}>{"Realnie"}</span>
        </div>

        <div className={styles.realResultBoard}>
          <div className={styles.realResultList}>
            <div className={styles.realResultItem}>
              <span className={styles.realResultItemIcon}>
                <Icon name="grid3x3" size="sm" />
              </span>
              <span className={styles.realResultItemLabel}>{"Materiał"}</span>
            </div>

            <div className={styles.realResultItem}>
              <span className={styles.realResultItemIcon}>
                <Icon name="sparkles" size="sm" />
              </span>
              <span className={styles.realResultItemLabel}>{"Brud"}</span>
            </div>

            <div className={styles.realResultItem}>
              <span className={styles.realResultItemIcon}>
                <Icon name="route" size="sm" />
              </span>
              <span className={styles.realResultItemLabel}>{"Historia"}</span>
            </div>
          </div>

          <div className={styles.realResultMain}>
            <span className={styles.realResultMainIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.realResultMainDetail} />
            <span className={styles.realResultMainLabel}>{"Efekt"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "pricingRangeFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja wyceny opartej na metrażu, stanie i orientacyjnych widełkach zamiast sztywnej ceny za m²"
        }
      >
        <div className={styles.pricingRangeToolbar}>
          <span className={styles.reviewFlowChip}>{"Metraż"}</span>
          <span className={styles.reviewFlowChip}>{"Stan"}</span>
          <span className={styles.reviewFlowChip}>{"Widełki"}</span>
        </div>

        <div className={styles.pricingRangeBoard}>
          <div className={styles.pricingRangeStep}>
            <span className={styles.pricingRangeStepIcon}>
              <Icon name="grid3x3" size="sm" />
            </span>
            <span className={styles.pricingRangeStepLabel}>{"Metraż"}</span>
          </div>

          <div className={styles.pricingRangeStep}>
            <span className={styles.pricingRangeStepIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.pricingRangeStepLabel}>{"Stan"}</span>
          </div>

          <div className={`${styles.pricingRangeStep} ${styles.pricingRangeStepAccent}`}>
            <span className={styles.pricingRangeStepIcon}>
              <Icon name="badgeDollarSign" size="sm" />
            </span>
            <span className={styles.pricingRangeStepLabel}>{"Widełki"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "cyclicalSetupBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja ustawienia zakresu, rytmu, częstotliwości i planu dla sprzątania cyklicznego"
        }
      >
        <div className={styles.cyclicalSetupToolbar}>
          <span className={styles.reviewFlowChip}>{"Zakres"}</span>
          <span className={styles.reviewFlowChip}>{"Rytm"}</span>
          <span className={styles.reviewFlowChip}>{"Obsługa"}</span>
        </div>

        <div className={styles.cyclicalSetupGrid}>
          <div className={`${styles.cyclicalSetupTile} ${styles.cyclicalSetupTileScope}`}>
            <span className={styles.cyclicalSetupTileIcon}>
              <Icon name="clipboardList" size="sm" />
            </span>
            <span className={styles.cyclicalSetupTileDetail} />
            <span className={styles.cyclicalSetupTileLabel}>{"Zakres"}</span>
          </div>

          <div className={`${styles.cyclicalSetupTile} ${styles.cyclicalSetupTileRhythm}`}>
            <span className={styles.cyclicalSetupTileIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.cyclicalSetupTileDetail} />
            <span className={styles.cyclicalSetupTileLabel}>{"Rytm"}</span>
          </div>

          <div className={`${styles.cyclicalSetupTile} ${styles.cyclicalSetupTileFrequency}`}>
            <span className={styles.cyclicalSetupTileIcon}>
              <Icon name="calendarClock" size="sm" />
            </span>
            <span className={styles.cyclicalSetupTileDetail} />
            <span className={styles.cyclicalSetupTileLabel}>{"Częstość"}</span>
          </div>

          <div className={`${styles.cyclicalSetupTile} ${styles.cyclicalSetupTilePlan}`}>
            <span className={styles.cyclicalSetupTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.cyclicalSetupTileDetail} />
            <span className={styles.cyclicalSetupTileLabel}>{"Plan"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "serviceLevelBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja utrzymywanego poziomu wykonania opartego o standard, rytm i powtarzalność tygodniowej obsługi"
        }
      >
        <div className={styles.serviceLevelToolbar}>
          <span className={styles.reviewFlowChip}>{"Standard"}</span>
          <span className={styles.reviewFlowChip}>{"Rytm"}</span>
          <span className={styles.reviewFlowChip}>{"Stałość"}</span>
        </div>

        <div className={styles.serviceLevelBoard}>
          <div className={styles.serviceLevelList}>
            <div className={styles.serviceLevelItem}>
              <span className={styles.serviceLevelItemIcon}>
                <Icon name="clipboardCheck" size="sm" />
              </span>
              <span className={styles.serviceLevelItemLabel}>{"Standard"}</span>
            </div>

            <div className={styles.serviceLevelItem}>
              <span className={styles.serviceLevelItemIcon}>
                <Icon name="workflow" size="sm" />
              </span>
              <span className={styles.serviceLevelItemLabel}>{"Rytm"}</span>
            </div>

            <div className={styles.serviceLevelItem}>
              <span className={styles.serviceLevelItemIcon}>
                <Icon name="calendarClock" size="sm" />
              </span>
              <span className={styles.serviceLevelItemLabel}>{"Tydzień"}</span>
            </div>
          </div>

          <div className={styles.serviceLevelMain}>
            <span className={styles.serviceLevelMainIcon}>
              <Icon name="trophy" size="sm" />
            </span>
            <span className={styles.serviceLevelMainDetail} />
            <span className={styles.serviceLevelMainLabel}>{"Poziom"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "serviceRhythmFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja dopasowania godzin i rytmu miejsca do serwisu sprzątania cyklicznego"
        }
      >
        <div className={styles.serviceRhythmToolbar}>
          <span className={styles.reviewFlowChip}>{"Godziny"}</span>
          <span className={styles.reviewFlowChip}>{"Rytm"}</span>
          <span className={styles.reviewFlowChip}>{"Serwis"}</span>
        </div>

        <div className={styles.serviceRhythmBoard}>
          <div className={styles.serviceRhythmStep}>
            <span className={styles.serviceRhythmStepIcon}>
              <Icon name="calendarClock" size="sm" />
            </span>
            <span className={styles.serviceRhythmStepLabel}>{"Godziny"}</span>
          </div>

          <div className={styles.serviceRhythmStep}>
            <span className={styles.serviceRhythmStepIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.serviceRhythmStepLabel}>{"Rytm"}</span>
          </div>

          <div className={`${styles.serviceRhythmStep} ${styles.serviceRhythmStepAccent}`}>
            <span className={styles.serviceRhythmStepIcon}>
              <Icon name="sparkles" size="sm" />
            </span>
            <span className={styles.serviceRhythmStepLabel}>{"Serwis"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "singleContactGridBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja prostej współpracy opartej na stałym kontakcie, dialogu, decyzjach i porządku"
        }
      >
        <div className={styles.singleContactGridToolbar}>
          <span className={styles.reviewFlowChip}>{"Kontakt"}</span>
          <span className={styles.reviewFlowChip}>{"Decyzje"}</span>
          <span className={styles.reviewFlowChip}>{"Współpraca"}</span>
        </div>

        <div className={styles.singleContactGrid}>
          <div className={`${styles.singleContactGridTile} ${styles.singleContactGridTileContact}`}>
            <span className={styles.singleContactGridTileIcon}>
              <Icon name="users" size="sm" />
            </span>
            <span className={styles.singleContactGridTileDetail} />
            <span className={styles.singleContactGridTileLabel}>{"Kontakt"}</span>
          </div>

          <div className={`${styles.singleContactGridTile} ${styles.singleContactGridTileDialog}`}>
            <span className={styles.singleContactGridTileIcon}>
              <Icon name="messageSquare" size="sm" />
            </span>
            <span className={styles.singleContactGridTileDetail} />
            <span className={styles.singleContactGridTileLabel}>{"Dialog"}</span>
          </div>

          <div className={`${styles.singleContactGridTile} ${styles.singleContactGridTileDecisions}`}>
            <span className={styles.singleContactGridTileIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.singleContactGridTileDetail} />
            <span className={styles.singleContactGridTileLabel}>{"Decyzje"}</span>
          </div>

          <div className={`${styles.singleContactGridTile} ${styles.singleContactGridTileOrder}`}>
            <span className={styles.singleContactGridTileIcon}>
              <Icon name="layoutGrid" size="sm" />
            </span>
            <span className={styles.singleContactGridTileDetail} />
            <span className={styles.singleContactGridTileLabel}>{"Porządek"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "serviceStabilityBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja stabilności stałej obsługi mimo zmian po stronie wykonawcy"
        }
      >
        <div className={styles.serviceStabilityToolbar}>
          <span className={styles.reviewFlowChip}>{"Ciągłość"}</span>
          <span className={styles.reviewFlowChip}>{"Zmiany"}</span>
          <span className={styles.reviewFlowChip}>{"Stabilność"}</span>
        </div>

        <div className={styles.serviceStabilityBoard}>
          <div className={styles.serviceStabilityList}>
            <div className={styles.serviceStabilityItem}>
              <span className={styles.serviceStabilityItemIcon}>
                <Icon name="workflow" size="sm" />
              </span>
              <span className={styles.serviceStabilityItemLabel}>{"Ciągłość"}</span>
            </div>

            <div className={styles.serviceStabilityItem}>
              <span className={styles.serviceStabilityItemIcon}>
                <Icon name="route" size="sm" />
              </span>
              <span className={styles.serviceStabilityItemLabel}>{"Zmiany"}</span>
            </div>

            <div className={styles.serviceStabilityItem}>
              <span className={styles.serviceStabilityItemIcon}>
                <Icon name="sparkles" size="sm" />
              </span>
              <span className={styles.serviceStabilityItemLabel}>{"Serwis"}</span>
            </div>
          </div>

          <div className={styles.serviceStabilityMain}>
            <span className={styles.serviceStabilityMainIcon}>
              <Icon name="shieldAlert" size="sm" />
            </span>
            <span className={styles.serviceStabilityMainDetail} />
            <span className={styles.serviceStabilityMainLabel}>{"Stabilność"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "flexibleScopeFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja elastycznej współpracy, w której zakres, rytm i korekta usługi mogą być dopasowywane do zmieniających się potrzeb obiektu"
        }
      >
        <div className={styles.flexibleScopeToolbar}>
          <span className={styles.reviewFlowChip}>{"Zakres"}</span>
          <span className={styles.reviewFlowChip}>{"Rytm"}</span>
          <span className={styles.reviewFlowChip}>{"Zmiana"}</span>
        </div>

        <div className={styles.flexibleScopeBoard}>
          <div className={styles.flexibleScopeStep}>
            <span className={styles.flexibleScopeStepIcon}>
              <Icon name="clipboardList" size="sm" />
            </span>
            <span className={styles.flexibleScopeStepLabel}>{"Zakres"}</span>
          </div>

          <div className={styles.flexibleScopeStep}>
            <span className={styles.flexibleScopeStepIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.flexibleScopeStepLabel}>{"Rytm"}</span>
          </div>

          <div className={`${styles.flexibleScopeStep} ${styles.flexibleScopeStepAccent}`}>
            <span className={styles.flexibleScopeStepIcon}>
              <Icon name="route" size="sm" />
            </span>
            <span className={styles.flexibleScopeStepLabel}>{"Korekta"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "singleContactFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja jednego punktu kontaktu, statusu i dokumentów w uporządkowanym przepływie komunikacji"
        }
      >
        <div className={styles.reviewFlowToolbar}>
          <span className={styles.reviewFlowChip}>{"Opiekun"}</span>
          <span className={styles.reviewFlowChip}>{"Status"}</span>
          <span className={styles.reviewFlowChip}>{"Dokumenty"}</span>
        </div>

        <div className={styles.reviewFlowBoard}>
          <div className={styles.reviewFlowStep}>
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="users" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Prowadzi"}</span>
          </div>

          <div className={styles.reviewFlowStep}>
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="clipboardCheck" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Status"}</span>
          </div>

          <div
            className={`${styles.reviewFlowStep} ${styles.reviewFlowStepSuccess}`}
          >
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="fileText" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Dokumenty"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "offerHandoffFlowBoard") {
    return (
      <div
        className={styles.scene}
        role="img"
        aria-label={
          "Ilustracja uporządkowania zakresu i warunków w gotową formę do przekazania dalej w firmie"
        }
      >
        <div className={styles.reviewFlowToolbar}>
          <span className={styles.reviewFlowChip}>{"Zakres"}</span>
          <span className={styles.reviewFlowChip}>{"Warunki"}</span>
          <span className={styles.reviewFlowChip}>{"Dalej"}</span>
        </div>

        <div className={styles.reviewFlowBoard}>
          <div className={styles.reviewFlowStep}>
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="clipboardList" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Zakres"}</span>
          </div>

          <div className={styles.reviewFlowStep}>
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="workflow" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Warunki"}</span>
          </div>

          <div
            className={`${styles.reviewFlowStep} ${styles.reviewFlowStepSuccess}`}
          >
            <span className={styles.reviewFlowStepIcon}>
              <Icon name="fileText" size="sm" />
            </span>
            <span className={styles.reviewFlowStepLabel}>{"Przekaż"}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

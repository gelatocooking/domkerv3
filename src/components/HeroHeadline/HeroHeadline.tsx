"use client";

import { FlipIconInterval } from "../FlipIconInterval/FlipIconInterval";
import { TypewriterTimed } from "../HeroType/HeroType";
import styles from "./HeroHeadline.module.css";

export interface HeroHeadlineProps {
  text: string;
  suffix?: string;
  charsPerSecond?: number;
  startDelayMs?: number;
  loop?: boolean;
  cursor?: boolean;
}

export function HeroHeadline({
  text,
  suffix = "/",
  charsPerSecond = 18,
  startDelayMs = 250,
  loop = false,
  cursor = true,
}: HeroHeadlineProps) {
  return (
    <span className={styles.row}>
      <span className={styles.iconBadge}>
        <FlipIconInterval />
      </span>
      <em className={styles.typed}>
        <TypewriterTimed
          text={text}
          charsPerSecond={charsPerSecond}
          startDelayMs={startDelayMs}
          loop={loop}
          cursor={cursor}
        />
      </em>
      {suffix ? <span className={styles.slash}>{suffix}</span> : null}
    </span>
  );
}

"use client";

import { useMemo, useState } from "react";
import { FlipIconInterval } from "../FlipIconInterval/FlipIconInterval";
import { TypewriterTimed } from "../HeroType/HeroType";
import { type IconName } from "../Icon/Icon";
import styles from "./HeroHeadline.module.css";

export interface HeroHeadlineProps {
  text: string;
  texts?: string[];
  iconName?: IconName;
  iconNames?: IconName[];
  suffix?: string;
  charsPerSecond?: number;
  startDelayMs?: number;
  loop?: boolean;
  cursor?: boolean;
}

export function HeroHeadline({
  text,
  texts,
  iconName = "lightbulb",
  iconNames,
  suffix = "/",
  charsPerSecond = 18,
  startDelayMs = 10000,
  loop = false,
  cursor = true,
}: HeroHeadlineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = useMemo(() => {
    const items = iconNames?.length ? iconNames : [iconName];
    return items.filter(Boolean);
  }, [iconName, iconNames]);
  const activeIcon = icons[activeIndex] ?? iconName;

  return (
    <span className={styles.row}>
      <span className={styles.iconBadge}>
        <FlipIconInterval iconName={activeIcon} />
      </span>
      <em className={styles.typed}>
        <TypewriterTimed
          text={text}
          texts={texts}
          onIndexChange={setActiveIndex}
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

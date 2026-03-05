"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Icon from "../Icon/Icon";
import styles from "./FlipIconInterval.module.css";

export type FlipIconIntervalProps = {
  everyMs?: number;
  liftPx?: number;
  rotateDeg?: number;
  durationSec?: number;
  className?: string;
};

export function FlipIconInterval({
  everyMs = 15000,
  liftPx = 10,
  rotateDeg = 360,
  durationSec = 0.9,
  className,
}: FlipIconIntervalProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      await controls.set({ y: 0, rotateZ: 0 });

      await controls.start({
        y: -liftPx,
        rotateZ: rotateDeg,
        transition: { duration: durationSec, ease: "easeInOut" },
      });

      if (cancelled) return;

      await controls.start({
        y: 0,
        transition: { duration: 0.25, ease: "easeOut" },
      });

      await controls.set({ rotateZ: 0 });
    };

    run();

    const id = setInterval(run, everyMs);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [controls, everyMs, liftPx, rotateDeg, durationSec]);

  return (
    <span className={`${styles.wrap} ${className ?? ""}`}>
      <motion.span className={styles.inner} animate={controls}>
        <Icon name="lightbulb" size="sm" />
      </motion.span>
    </span>
  );
}

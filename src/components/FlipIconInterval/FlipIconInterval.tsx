"use client";

import { AnimatePresence, motion } from "framer-motion";
import Icon, { type IconName } from "../Icon/Icon";
import styles from "./FlipIconInterval.module.css";

export type FlipIconIntervalProps = {
  iconName?: IconName;
  className?: string;
};

export function FlipIconInterval({
  iconName = "lightbulb",
  className,
}: FlipIconIntervalProps) {
  return (
    <span className={`${styles.wrap} ${className ?? ""}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={iconName}
          className={styles.inner}
          initial={{ opacity: 0, rotateY: -90, rotateX: 16, scale: 0.86 }}
          animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: 90, rotateX: -16, scale: 0.86 }}
          transition={{ duration: 0.42, ease: "easeInOut" }}
        >
          <Icon name={iconName} size="sm" />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

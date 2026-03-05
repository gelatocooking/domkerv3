"use client";

import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import styles from "./FlipIcon3D.module.css";

export type FlipIcon3DProps = {
  durationSec?: number;
  className?: string;
};

export function FlipIcon3D({
  durationSec = 0.5,
  className,
}: FlipIcon3DProps) {
  return (
    <span className={`${styles.wrap} ${className ?? ""}`}>
      <motion.span
        className={styles.inner}
        animate={{ rotateX: 180 }}
        transition={{
          duration: durationSec,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Icon name="lightbulb" size="sm" />
      </motion.span>
    </span>
  );
}
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./HeroType.module.css";

type TypeMode = "typing" | "deleting";

export type TypewriterTimedProps = {
  text: string;
  texts?: string[];
  onIndexChange?: (index: number) => void;
  charsPerSecond?: number;
  deleteCharsPerSecond?: number;
  startDelayMs?: number;
  pauseAfterTypedMs?: number;
  pauseAfterDeletedMs?: number;
  loop?: boolean;
  cursor?: boolean;
  className?: string;
};

export function TypewriterTimed({
  text,
  texts,
  onIndexChange,
  charsPerSecond = 18,
  deleteCharsPerSecond = 26,
  startDelayMs = 0,
  pauseAfterTypedMs = 2000,
  pauseAfterDeletedMs = 250,
  loop = false,
  cursor = true,
  className,
}: TypewriterTimedProps) {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState<TypeMode>("typing");
  const [activeIndex, setActiveIndex] = useState(0);

  const sequence = useMemo(() => {
    const items = texts?.length ? texts : [text];
    return items.filter(Boolean);
  }, [text, texts]);
  const activeText = sequence[activeIndex] ?? text;

  const msPerChar = useMemo(() => 1000 / charsPerSecond, [charsPerSecond]);
  const msPerCharDelete = useMemo(
    () => 1000 / deleteCharsPerSecond,
    [deleteCharsPerSecond]
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    onIndexChange?.(activeIndex);
  }, [activeIndex, onIndexChange]);

  useEffect(() => {
    clearTimer();

    const delay = count === 0 && mode === "typing" ? startDelayMs : 0;

    if (mode === "typing" && count < activeText.length) {
      timerRef.current = setTimeout(() => {
        setCount((current) => Math.min(current + 1, activeText.length));
      }, delay || msPerChar);
      return () => clearTimer();
    }

    if (mode === "typing" && count >= activeText.length) {
      if (!loop || sequence.length < 2) return () => clearTimer();

      timerRef.current = setTimeout(() => {
        setMode("deleting");
      }, pauseAfterTypedMs);
      return () => clearTimer();
    }

    if (mode === "deleting" && count > 0) {
      timerRef.current = setTimeout(() => {
        setCount((current) => Math.max(current - 1, 0));
      }, msPerCharDelete);
      return () => clearTimer();
    }

    if (mode === "deleting" && count === 0) {
      timerRef.current = setTimeout(() => {
        setActiveIndex((current) =>
          sequence.length > 1 ? (current + 1) % sequence.length : current
        );
        setMode("typing");
      }, pauseAfterDeletedMs);
      return () => clearTimer();
    }

    return () => {
      clearTimer();
    };
  }, [
    activeText,
    count,
    loop,
    mode,
    sequence.length,
    startDelayMs,
    pauseAfterTypedMs,
    pauseAfterDeletedMs,
    msPerChar,
    msPerCharDelete,
  ]);

  const visible = activeText.slice(0, count);

  return (
    <span className={className} aria-label={activeText}>
      {visible}
      {cursor ? <BlinkCursor /> : null}
    </span>
  );
}

function BlinkCursor() {
  return (
    <span aria-hidden="true" className={styles.cursor}>
      |
    </span>
  );
}

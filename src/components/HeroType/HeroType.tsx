"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./HeroType.module.css";

type TypeMode = "typing" | "pause" | "deleting";

export type TypewriterTimedProps = {
  text: string;
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
  charsPerSecond = 18,
  deleteCharsPerSecond = 26,
  startDelayMs = 0,
  pauseAfterTypedMs = 900,
  pauseAfterDeletedMs = 250,
  loop = false,
  cursor = true,
  className,
}: TypewriterTimedProps) {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState<TypeMode>("typing");

  const msPerChar = useMemo(() => 1000 / charsPerSecond, [charsPerSecond]);
  const msPerCharDelete = useMemo(
    () => 1000 / deleteCharsPerSecond,
    [deleteCharsPerSecond]
  );

  const rafId = useRef<number | null>(null);
  const startT = useRef<number>(0);
  const baseCount = useRef<number>(0);

  const cancel = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = null;
    startT.current = 0;
  };

  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout> | null = null;
    let pauseTimer: ReturnType<typeof setTimeout> | null = null;

    cancel();
    setCount(0);
    setMode("typing");
    baseCount.current = 0;

    const step = (t: number) => {
      if (!startT.current) startT.current = t;
      const elapsed = t - startT.current;

      const perChar = mode === "deleting" ? msPerCharDelete : msPerChar;
      const delta = Math.floor(elapsed / perChar);

      if (mode === "typing") {
        const next = Math.min(text.length, baseCount.current + delta);
        setCount(next);

        if (next >= text.length) {
          cancel();
          if (loop) {
            pauseTimer = setTimeout(() => {
              baseCount.current = text.length;
              setMode("deleting");
              startT.current = 0;
              rafId.current = requestAnimationFrame(step);
            }, pauseAfterTypedMs);
          }
          return;
        }
      }

      if (mode === "deleting") {
        const next = Math.max(0, baseCount.current - delta);
        setCount(next);

        if (next <= 0) {
          cancel();
          pauseTimer = setTimeout(() => {
            baseCount.current = 0;
            setMode("typing");
            startT.current = 0;
            rafId.current = requestAnimationFrame(step);
          }, pauseAfterDeletedMs);
          return;
        }
      }

      rafId.current = requestAnimationFrame(step);
    };

    delayTimer = setTimeout(() => {
      startT.current = 0;
      baseCount.current = mode === "deleting" ? text.length : 0;
      rafId.current = requestAnimationFrame(step);
    }, startDelayMs);

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      if (pauseTimer) clearTimeout(pauseTimer);
      cancel();
    };
  }, [
    text,
    loop,
    startDelayMs,
    pauseAfterTypedMs,
    pauseAfterDeletedMs,
    msPerChar,
    msPerCharDelete,
    mode,
  ]);

  const visible = text.slice(0, count);

  return (
    <span className={className} aria-label={text}>
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
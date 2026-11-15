"use client";
// Adapted from React Bits: Tilted Card, Spotlight Card, Magnet, Decrypted Text.
// Source URLs and retained license: docs/component-sources.md.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useSpring } from "motion/react";
import { useMotionPreferences } from "./motion-preferences";

const spring = { stiffness: 170, damping: 20, mass: 0.7 };
export function TiltedCard({ children }: { children: ReactNode }) {
  const { enabled } = useMotionPreferences();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  useEffect(() => {
    if (!enabled) {
      rotateX.jump(0);
      rotateY.jump(0);
    }
  }, [enabled, rotateX, rotateY]);
  return (
    <div
      className="tilt-stage"
      onPointerMove={(event) => {
        if (!enabled || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 14);
        rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <motion.div className="tilted-surface" style={{ rotateX, rotateY }}>
        {children}
      </motion.div>
    </div>
  );
}

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const { enabled } = useMotionPreferences();
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!enabled) ref.current?.style.removeProperty("--spotlight-active");
  }, [enabled]);
  return (
    <motion.article
      ref={ref}
      data-reveal
      layout={enabled}
      className={`${className} spotlight-card`}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: enabled ? 0.3 : 0 }}
      onPointerMove={(event) => {
        if (!enabled || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--spotlight-x",
          `${event.clientX - rect.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--spotlight-y",
          `${event.clientY - rect.top}px`,
        );
        event.currentTarget.style.setProperty("--spotlight-active", "1");
      }}
      onPointerLeave={(event) =>
        event.currentTarget.style.removeProperty("--spotlight-active")
      }
    >
      {children}
    </motion.article>
  );
}

export function Magnet({ children }: { children: ReactNode }) {
  const { enabled } = useMotionPreferences();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  useEffect(() => {
    if (!enabled) {
      x.jump(0);
      y.jump(0);
    }
  }, [enabled, x, y]);
  return (
    <span
      className="magnet-target"
      onPointerMove={(event) => {
        if (!enabled || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * 10);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.span className="magnet-surface" style={{ x, y }}>
        {children}
      </motion.span>
    </span>
  );
}

export function DecryptedText({ text }: { text: string }) {
  const { enabled } = useMotionPreferences();
  const [run, setRun] = useState(0);
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!enabled || !run) {
      setDisplay(text);
      return;
    }
    let iteration = 0;
    const characters = "01<>/{}+*";
    const timer = setInterval(() => {
      iteration += 1;
      setDisplay(
        Array.from(text, (char, index) =>
          index < iteration / 2 || char === "."
            ? char
            : characters[Math.floor(Math.random() * characters.length)],
        ).join(""),
      );
      if (iteration >= text.length * 2) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, [enabled, run, text]);
  return (
    <span
      className="decrypted-text"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && enabled)
          setRun((value) => value + 1);
      }}
      onPointerLeave={() => setRun(0)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text, (char, index) => (
          <span className="decrypt-cell" key={index}>
            <span className="decrypt-ghost">{char}</span>
            <span className="decrypt-glyph">{display[index]}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

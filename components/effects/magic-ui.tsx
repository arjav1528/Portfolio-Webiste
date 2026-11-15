"use client";
// Adapted from Magic UI Ripple Button and Scroll Progress; see docs/component-sources.md.
import { useEffect, useRef, useState, type ButtonHTMLAttributes } from "react";
import { motion, useScroll } from "motion/react";
import { useMotionPreferences } from "./motion-preferences";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
export function RippleButton({
  children,
  onClick,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { enabled } = useMotionPreferences();
  const nextId = useRef(0);
  const [ripple, setRipple] = useState<{
    x: number;
    y: number;
    size: number;
    id: number;
  } | null>(null);
  useEffect(() => {
    if (!ripple) return;
    const timeout = setTimeout(() => setRipple(null), 600);
    return () => clearTimeout(timeout);
  }, [ripple]);
  useEffect(() => {
    if (!enabled) setRipple(null);
  }, [enabled]);
  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className={`ripple-button ${className}`}
      onClick={(event) => {
        if (enabled) {
          const rect = event.currentTarget.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height) * 2;
          setRipple({
            id: ++nextId.current,
            size,
            x:
              (event.detail === 0
                ? rect.width / 2
                : event.clientX - rect.left) -
              size / 2,
            y:
              (event.detail === 0
                ? rect.height / 2
                : event.clientY - rect.top) -
              size / 2,
          });
        }
        onClick?.(event);
      }}
    >
      <span className="ripple-label">{children}</span>
      {ripple && (
        <span
          key={ripple.id}
          aria-hidden="true"
          className="button-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      )}
    </button>
  );
}

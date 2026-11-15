"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMotionPreferences } from "./motion-preferences";

export function ViewportMotion() {
  const { enabled } = useMotionPreferences();
  const revealed = useRef(new WeakSet<Element>());

  useEffect(() => {
    if (!enabled || !window.IntersectionObserver || !Element.prototype.animate)
      return;

    const active = new Map<Element, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        let stagger = 0;
        for (const { target, isIntersecting } of entries) {
          if (!isIntersecting) continue;
          observer.unobserve(target);
          revealed.current.add(target);
          if (target.contains(document.activeElement)) continue;

          // Individual translate preserves the cards' existing tilt and hover transforms.
          const animation = target.animate(
            [
              { opacity: 0, translate: "0 28px" },
              { opacity: 1, translate: "0 0" },
            ],
            {
              id: "viewport-reveal",
              duration: 650,
              delay: Math.min(stagger++, 3) * 70,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );
          active.set(target, animation);
          animation.onfinish = () => active.delete(target);
        }
      },
      { rootMargin: "0px 0px 32px 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      if (!revealed.current.has(element)) observer.observe(element);
    });
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest("[data-reveal]");
      if (!element) return;
      observer.unobserve(element);
      revealed.current.add(element);
      active.get(element)?.cancel();
      active.delete(element);
    };
    document.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      active.forEach((animation) => animation.cancel());
      document.removeEventListener("focusin", revealFocused);
    };
  }, [enabled]);

  return null;
}

export function HeroParallax({ children }: { children: ReactNode }) {
  const { enabled } = useMotionPreferences();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 48]);
  return (
    <motion.div
      ref={ref}
      className="hero-collage scroll-scene"
      style={{ y: enabled ? y : 0 }}
    >
      {children}
    </motion.div>
  );
}

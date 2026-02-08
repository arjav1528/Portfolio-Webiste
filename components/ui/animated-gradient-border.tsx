"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  gradient?: string;
}

export function AnimatedGradientBorder({
  children,
  className,
  innerClassName,
  gradient = "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
}: AnimatedGradientBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-[2px] overflow-hidden",
        "bg-[length:200%_200%] animate-gradient-shift",
        className
      )}
      style={{
        backgroundImage: gradient.startsWith("linear")
          ? gradient
          : `linear-gradient(90deg, ${gradient})`,
      }}
    >
      <div
        className={cn(
          "relative z-10 rounded-[10px] bg-background/95 backdrop-blur-sm",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

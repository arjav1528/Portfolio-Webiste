"use client";

import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  size?: number;
  radius?: number;
  color?: string;
}

export function DotPattern({
  className,
  size = 16,
  radius = 1,
  color = "rgb(255 255 255 / 0.08)",
}: DotPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, ${color} ${radius}px, transparent 0)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

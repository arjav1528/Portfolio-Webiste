"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-press-start tracking-tight">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 mt-4 mb-6",
          align === "center" ? "mx-auto" : ""
        )}
        style={{ originX: align === "center" ? 0.5 : 0 }}
      />
      {subtitle && (
        <div className="text-lg text-muted-foreground max-w-2xl leading-relaxed mt-2">
          {subtitle}
        </div>
      )}
    </motion.div>
  );
}

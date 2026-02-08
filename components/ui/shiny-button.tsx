"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export function ShinyButton({
  children,
  className,
  asChild,
  ...props
}: ShinyButtonProps) {
  const Comp = asChild ? motion.a : motion.button;
  return (
    <Comp
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3 font-semibold",
        "bg-gradient-to-r from-blue-600 to-violet-600 text-white",
        "shadow-lg shadow-violet-500/25",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30",
        className
      )}
      {...(props as any)}
    >
      {children}
    </Comp>
  );
}

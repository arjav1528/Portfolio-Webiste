"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Coffee } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

export function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden">
      <DotPattern className="opacity-30" color="rgb(255 255 255 / 0.02)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Separator className="my-8 bg-white/10" />

          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500 inline-block" />
              </motion.span>
              <span>by</span>
              <Badge
                variant="secondary"
                className="px-2.5 py-1 text-xs font-medium border border-white/10"
              >
                Arjav Patel
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Coffee className="h-4 w-4" />
              <span>Fueled by coffee and curiosity</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-xs text-muted-foreground/80"
            >
              <Code className="h-3 w-3" />
              <span>© {currentYear} Arjav Patel. All rights reserved.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

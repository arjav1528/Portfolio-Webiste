"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";

export function ResumePreview() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const resumeUrl = "/Arjav_Patel_Final_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Arjav_Patel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 24,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <AnimatedGradientBorder
          className="cursor-pointer h-full group"
          innerClassName="p-6 h-full"
        >
          <div
            className="flex items-center gap-4"
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Open resume preview"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="flex-shrink-0"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                View My Resume
              </h3>
              <p className="text-sm text-muted-foreground">
                Click to preview or download
              </p>
            </div>

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex-shrink-0"
            >
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
        </AnimatedGradientBorder>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden border-white/10 bg-background/95 backdrop-blur-xl">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <DialogTitle className="text-2xl font-bold font-press-start">
                  Resume Preview
                </DialogTitle>
                <DialogDescription className="mt-1 text-muted-foreground">
                  Arjav Patel - Software Engineer & Mobile Developer
                </DialogDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleOpenInNewTab}
                  className="rounded-lg border-white/20 hover:bg-white/5"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Full
                </Button>
                <Button
                  size="sm"
                  onClick={handleDownload}
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="relative w-full h-[calc(90vh-120px)] overflow-hidden">
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  key="pdf-preview"
                  initial={{ opacity: 0, scale: 0.98, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 16 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-full h-full"
                >
                  <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-0"
                    title="Resume Preview"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

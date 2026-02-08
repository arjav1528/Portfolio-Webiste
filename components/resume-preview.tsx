"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ResumePreview() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const resumeUrl = '/Arjav_Patel_Final_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Arjav_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, '_blank');
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
        delay: 0.3,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
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
        whileHover={hoverVariants.hover}
        className="relative"
      >
        <Card 
          className="group cursor-pointer overflow-hidden border-border/40 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br from-background to-muted/20"
          onClick={() => setIsOpen(true)}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              {/* Animated Icon */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.h3
                  className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors"
                >
                  View My Resume
                </motion.h3>
                <motion.p
                  className="text-sm text-muted-foreground"
                >
                  Click to preview or download
                </motion.p>
              </div>

              {/* Arrow Icon */}
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
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

            {/* Animated Border Gradient */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* PDF Preview Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold">Resume Preview</DialogTitle>
                <DialogDescription className="mt-1">
                  Arjav Patel - Software Engineer & Mobile Developer
                </DialogDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleOpenInNewTab}
                  className="group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Open Full
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleDownload}
                  className="group"
                >
                  <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download
                </Button>
              </div>
            </div>
          </DialogHeader>
          
          <div className="relative w-full h-[calc(90vh-120px)] overflow-hidden ">
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  key="pdf-preview"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
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


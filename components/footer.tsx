"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Separator className="my-8" />
          
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={inView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>by</span>
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                Arjav Patel
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <Coffee className="h-4 w-4" />
              <span>Fueled by coffee and curiosity</span>
            </motion.div>

        

            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
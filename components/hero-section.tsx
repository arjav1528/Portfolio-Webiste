"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/80 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24  bg-purple-600/80 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-3/4 left-[10%] w-24 h-24 bg-purple-600/80 rounded-full blur-xl"
        />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Professional Photo */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="group w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 relative"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:animate-ripple" />
                <style jsx>{`
                  @keyframes ripple {
                    from {
                      opacity: 0.5;
                      transform: scale(1);
                    }
                    to {
                      opacity: 0;
                      transform: scale(1.5);
                    }
                  }
                  .animate-ripple {
                    animation: ripple 1s ease-out infinite;
                  }
                `}</style>
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-background">
                  <Image
                    src="/photo.jpg"
                    alt="Arjav Patel"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-sour-gummy"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Arjav Patel
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 min-h-[2.5rem] flex items-center justify-center"
          >
            <span className="mr-2">Specializing in</span>
            <span className="text-primary">
              {inView && (
                <Typewriter
                  options={{
                    strings: ['Flutter', 'React Native', 'NextJS', 'React', 'Flask', 'FastAPI', 'NodeJS', 'Python', 'Java'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                    cursor: '|',
                    wrapperClassName: 'text-primary'
                  }}
                />
              )}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Crafting exceptional mobile and web experiences with modern technologies. 
            Leading teams to build innovative solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="group px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/arjav1528', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/arjav1528', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:arjav1528@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
}
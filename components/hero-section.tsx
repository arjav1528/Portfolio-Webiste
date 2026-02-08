"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { ResumePreview } from "@/components/resume-preview";
import Shuffle from "@/components/Shuffle";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aceternity-style spotlight */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60"
          fill="rgb(139 92 246 / 0.15)"
        />
      </div>
      <DotPattern className="opacity-60" color="rgb(255 255 255 / 0.04)" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Avatar with animated border */}
          <motion.div variants={itemVariants} className="mb-8">
            <AnimatedGradientBorder
              className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-[3px] overflow-hidden"
              innerClassName="rounded-full overflow-hidden w-full h-full"
            >
              <div className="relative w-full h-full rounded-full bg-background">
                <Image
                  src="/photo.jpg"
                  alt="Arjav Patel"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedGradientBorder>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 font-press-start"
          >
            <Shuffle
              text="Arjav Patel"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="font-press-start text-4xl sm:text-5xl lg:text-7xl"
            />
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground mb-4 min-h-[2rem] flex items-center justify-center flex-wrap gap-x-2"
          >
            <span>Specializing in</span>
            <span className="text-primary font-semibold">
              {inView && (
                <Typewriter
                  options={{
                    strings: [
                      "Flutter",
                      "React Native",
                      "Next.js",
                      "React",
                      "Flask",
                      "FastAPI",
                      "Node.js",
                      "Python",
                      "Django",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 40,
                    cursor: "|",
                    wrapperClassName: "text-primary",
                  }}
                />
              )}
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Crafting exceptional mobile and web experiences with modern
            technologies. Leading teams to build solutions that make a
            difference.
          </motion.p>

          {/* CTAs with shadcn + Magic UI style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
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
              className="group px-8 py-6 text-base font-semibold rounded-xl border-2 border-white/20 hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>

          {/* Resume card - prominent and interactive */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto mb-12">
            <ResumePreview />
          </motion.div>

          {/* Social links with hover states */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/arjav1528",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/arjav1528",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:arjav1528@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

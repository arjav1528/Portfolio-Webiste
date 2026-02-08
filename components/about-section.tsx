"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Users, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { DotPattern } from "@/components/ui/dot-pattern";

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Expertise in Flutter, React, and modern web technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Specialized in creating responsive, user-friendly mobile applications",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Experience leading teams of 50+ developers in collaborative projects",
    },
    {
      icon: BookOpen,
      title: "Teaching & Mentorship",
      description:
        "Passionate about sharing knowledge and mentoring junior developers",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              About <span className="text-primary">Me</span>
            </>
          }
          subtitle="A glimpse into my journey and what drives my work."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={slideInLeft} className="space-y-6 content-backdrop p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate Senior Application Developer with a strong
              foundation in Electronics and Instrumentation Engineering from
              BITS Pilani Goa. My journey led me to specialize in mobile app
              development, where I&apos;ve found my true calling in creating
              innovative, user-centered applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in Flutter, React, and modern development practices,
              I focus on building responsive, scalable applications that
              deliver exceptional user experiences. My leadership experience
              includes managing teams of 50+ developers and mentoring the next
              generation of tech professionals.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Flutter",
                "React",
                "Dart",
                "JavaScript",
                "Firebase",
                "Node.js",
                "Leadership",
                "Mentoring",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-medium border border-white/10 hover:border-primary/30 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={slideInRight}
                transition={{ delay: index * 0.08 }}
              >
                <CardSpotlight className="transition-all duration-300 hover:scale-[1.02] p-6">
                  <div className="flex items-start gap-4 relative z-20">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center border border-white/10">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-white mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-neutral-200 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

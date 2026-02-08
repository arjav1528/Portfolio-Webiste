"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

export function EducationSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = {
    degree:
      "B.E. (Hons) Electronics and Instrumentation Engineering",
    institution: "BITS Pilani, Goa Campus",
    duration: "Aug 2023 – May 2027",
    location: "Goa, India",
    status: "Pursuing",
    description:
      "Comprehensive engineering program focusing on electronics, instrumentation, and control systems with strong emphasis on mathematical foundations and practical applications. While pursuing my core electronics curriculum, I have also undertaken several Computer Science major courses to complement my technical skills and broaden my expertise.",
    coursework: [
      "Object-Oriented Programming",
      "Digital Design",
      "Computer Programming",
      "Control Systems",
      "Microprocessors and Interfacing",
      "Engineering Mathematics",
      "Circuit Analysis",
    ],
    achievements: [
      "App Development Head - Developers' Society BITS Goa",
      "Lead Instructor - Center for Technical Education",
      "Multiple Hackathon Participations",
      "Research Publications in Renewable Energy",
    ],
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Mathematical Modeling",
      "Circuit Design",
      "Programming",
      "Team Leadership",
    ],
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              <span className="text-primary">Education</span>
            </>
          }
          subtitle="My academic journey at one of India's premier technical institutions, building a strong foundation in engineering and technology."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          <motion.div variants={slideInLeft}>
            <AnimatedGradientBorder
              className="h-full"
              innerClassName="overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {education.status}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      {education.degree}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center gap-2 text-primary font-medium">
                    <BookOpen className="h-4 w-4" />
                    {education.institution}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {education.duration}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    {education.location}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {education.description}
                </p>
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  <Image
                    src="/bits.jpg"
                    alt="BITS Pilani Goa Campus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedGradientBorder>
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-6">
            <AnimatedGradientBorder innerClassName="p-6">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {course}
                  </div>
                ))}
              </div>
            </AnimatedGradientBorder>

            <AnimatedGradientBorder innerClassName="p-6">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <Award className="h-5 w-5 text-primary" />
                Academic Achievements
              </h4>
              <ul className="space-y-3">
                {education.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </AnimatedGradientBorder>

            <AnimatedGradientBorder innerClassName="p-6">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                Key Skills Developed
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs border border-white/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </AnimatedGradientBorder>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Server, Database, Wrench, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "React Native", level: 70 },
        { name: "Dart", level: 90 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Next.js", level: 65 },
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Supabase", level: 60 },
        { name: "Firebase", level: 85 },
        { name: "Git", level: 90 },
      ],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 85 },
        { name: "Postman", level: 85 },
        { name: "GitHub", level: 90 },
      ],
    },
    {
      title: "Leadership & Soft Skills",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Team Leadership", level: 75 },
        { name: "Mentoring", level: 90 },
        { name: "Project Management", level: 80 },
        { name: "Communication", level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Technical <span className="text-primary">Skills</span>
            </>
          }
          subtitle="A comprehensive overview of my technical expertise and proficiency across various technologies."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <AnimatedGradientBorder
                className="h-full"
                innerClassName="p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-xs font-mono border border-white/10"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay:
                              categoryIndex * 0.05 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

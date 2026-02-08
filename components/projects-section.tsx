"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Smartphone,
  Bot,
  ShoppingCart,
  ChartNetwork,
  Calendar,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Night Vigil - Goa Police Hackathon",
      description:
        "A platform that enables Goa Police to track and manage night vigils across the state. Built with Flutter, React, FaceNet, Python, and various APIs it allows police officers to track and manage night vigils across the state.",
      technologies: ["Flutter", "React", "FaceNet", "Python", "REST APIs"],
      highlights: [
        "Night Vigil Tracking",
        "Police Management",
        "State-wide Tracking",
        "Face Recognition",
      ],
      featured: true,
      icon: Shield,
      github: "https://github.com/arjav1528/Night-Vigil-Goa-Police-Hackathon",
    },
    {
      title: "BITS Goa Fest Management App",
      description:
        "Developed a scalable Flutter-based fest app for Waves, Quark, and Spree, streamlining event, pass, and schedule management for 3.5K+ users while securely handling ₹6M+ in payments through an integrated payment interface.",
      technologies: ["Flutter", "Firebase", "Node.js", "REST APIs"],
      highlights: ["3500+ Downloads", "Payment Integration", "Event Management"],
      featured: true,
      icon: Smartphone,
    },
    {
      title: "Student Welfare Division - SWD Store",
      description:
        "An All-In-One Platform where Clubs and Departments from BITS Goa can sell their merchandise, and a clean user interface for students to browse and purchase items.",
      technologies: ["Python", "Django", "MongoDB", "HTML/CSS"],
      highlights: ["User-Friendly", "Secure Database"],
      github: "https://github.com/arjav1528/swd_django",
      featured: true,
      icon: ShoppingCart,
    },
    {
      title: "Campus Solar Generation Research",
      description:
        "A comprehensive research project analyzing solar energy generation patterns on campus. Created interactive data visualizations and predictive models using Python and various data science libraries.",
      technologies: [
        "Python",
        "Data Visualization",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
      highlights: ["Research Publication", "Data Analysis", "Predictive Models"],
      github: "https://github.com/arjav1528/DigitalTwin",
      featured: true,
      icon: ChartNetwork,
    },
    {
      title: "ClassSync",
      description:
        "A platform that enables BITS Goa students to upload their timetable screenshot and seamlessly sync their classes with Google Calendar.",
      technologies: [
        "Next.js",
        "Gemini API",
        "NextAuth",
        "Google Calendar API",
      ],
      highlights: [
        "Google Calendar Integration",
        "AI Powered Timetable Parsing",
        "Real-time Sync",
      ],
      github: "https://github.com/arjav1528/ClassSync",
      featured: true,
      icon: Calendar,
    },
    {
      title: "GiftGenie - AI Gift Recommender",
      description:
        "3rd Runner Up in the hackathon! An AI-powered gift recommendation system that analyzes user preferences and suggests personalized gifts. Built with React frontend and Flask backend, integrated with Gemini AI.",
      technologies: [
        "React",
        "Flask",
        "Gemini AI",
        "Python",
        "Machine Learning",
      ],
      highlights: ["Hackathon 3rd Runner Up", "AI-Powered", "85% Accuracy"],
      github: "https://github.com/sohamdasx/GiftGenie",
      featured: true,
      icon: Bot,
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Featured <span className="text-primary">Projects</span>
            </>
          }
          subtitle="A showcase of my most impactful projects, demonstrating technical expertise and innovative problem-solving across various domains."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <AnimatedGradientBorder
                className="h-full"
                innerClassName="p-0 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs border border-white/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="outline"
                            className="text-xs border-white/20"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.github && (
                      <div className="pt-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-violet-500/20"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-2 border-white/20 hover:border-primary/50 hover:bg-white/5 px-8 py-6"
            asChild
          >
            <a
              href="https://github.com/arjav1528"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

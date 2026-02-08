"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, BarChart3 } from "lucide-react";
import Typewriter from "typewriter-effect";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

export function ResearchSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const researchProjects = [
    {
      title: "Campus Solar Generation Analysis",
      description:
        "Comprehensive analysis of solar energy generation patterns on BITS Pilani Goa campus. The research involved data collection, statistical analysis, and predictive modeling to optimize energy utilization.",
      domain: "Renewable Energy & Data Science",
      methodology: [
        "Data Collection",
        "Statistical Analysis",
        "Machine Learning",
        "Visualization",
      ],
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      outcomes: [
        "15% Efficiency Improvement",
        "Predictive Model",
        "Policy Recommendations",
      ],
      status: "Published",
      icon: BarChart3,
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="research" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Research & <span className="text-primary">Publications</span>
            </>
          }
          subtitle={
            inView ? (
              <span className="inline-block min-h-[1.5em]">
                <Typewriter
                  options={{
                    strings: [
                      "Exploring the intersection of technology and sustainability through academic research.",
                      "Contributing to the academic community with innovative solutions and data-driven insights.",
                      "Bridging the gap between theoretical knowledge and practical applications.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 25,
                  }}
                />
              </span>
            ) : (
              "Exploring the intersection of technology and sustainability through academic research."
            )
          }
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {researchProjects.map((project) => (
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
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <project.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {project.domain}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="default"
                      className="w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                        Methodology
                      </h4>
                      <ul className="space-y-2">
                        {project.methodology.map((method) => (
                          <li
                            key={method}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {method}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="outline"
                            className="text-xs border-white/20"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-6">
                    <Button
                      size="sm"
                      className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500"
                      asChild
                    >
                      <a
                        href="https://drive.google.com/file/d/1nPuPJCii1F_NQe8T9W8MvkunTShFVMNj/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Read Paper
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg border-white/20 hover:bg-white/5"
                      asChild
                    >
                      <a
                        href="https://github.com/arjav1528/DigitalTwin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

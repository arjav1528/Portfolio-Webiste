"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  GitPullRequest,
  GitMerge,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

type ContributionType = "pull_request" | "issue" | "maintainer" | "documentation";

const contributionConfig: Record<
  ContributionType,
  { label: string; icon: typeof GitPullRequest }
> = {
  pull_request: { label: "Pull Request", icon: GitPullRequest },
  issue: { label: "Issue", icon: GitMerge },
  maintainer: { label: "Maintainer", icon: Github },
  documentation: { label: "Documentation", icon: BookOpen },
};

export function OpenSourceSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contributions = [
    {
      repo: "apache/airflow",
      organization: "Apache Airflow",
      title: "Add transport parameter to CloudRunHook and CloudRunExecuteJobOperator",
      type: "pull_request" as ContributionType,
      description:
        "Added support for specifying the transport protocol (REST or gRPC) in CloudRunHook, CloudRunAsyncHook, CloudRunExecuteJobOperator, and CloudRunJobFinishedTrigger to resolve 404 errors when using gRPC with Google Cloud Run.",
      link: "https://github.com/apache/airflow/pull/60394",
      technologies: ["Python", "Google Cloud Run", "gRPC", "Apache Airflow"],
      year: "2025",
    },
    {
      repo: "apache/airflow",
      organization: "Apache Airflow",
      title: "Restore ability to mark task groups as success/failed in UI",
      type: "pull_request" as ContributionType,
      description:
        "Restored task group marking in the Airflow UI by adding MarkGroupTaskInstanceAsButton and MarkGroupTaskInstanceAsDialog components, plus bulk update APIs and dry-run support so users can mark task groups as success or failed from the interface.",
      link: "https://github.com/apache/airflow/pull/60161",
      technologies: ["React", "TypeScript", "FastAPI", "Apache Airflow"],
      year: "2025",
    },
    {
      repo: "apache/airflow",
      organization: "Apache Airflow",
      title: "Add checksum for JWT secret in API server and scheduler deployments",
      type: "pull_request" as ContributionType,
      description:
        "Added JWT secret checksum annotations to the API server and scheduler Helm deployment templates so pods restart when the secret changes, fixing token validation mismatches between components.",
      link: "https://github.com/apache/airflow/pull/60111",
      technologies: ["Kubernetes", "Helm", "Apache Airflow"],
      year: "2025",
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
    <section id="open-source" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Open Source <span className="text-primary">Contributions</span>
            </>
          }
          subtitle="Projects and communities I contribute to—from bug fixes and features to documentation and maintenance."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {contributions.map((contribution) => {
            const config = contributionConfig[contribution.type];
            const Icon = config.icon;
            return (
              <motion.div
                key={`${contribution.repo}-${contribution.title}`}
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Badge
                            variant="secondary"
                            className="text-xs border border-white/10"
                          >
                            {config.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {contribution.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {contribution.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          {contribution.organization} / {contribution.repo}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {contribution.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {contribution.technologies.map((tech) => (
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

                      {contribution.link && (
                        <div className="pt-2">
                          <Button
                            variant="default"
                            size="sm"
                            className="rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-teal-500/20"
                            asChild
                          >
                            <a
                              href={contribution.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View on GitHub
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedGradientBorder>
              </motion.div>
            );
          })}
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
              href="https://github.com/search?q=is%3Apr+author%3Aarjav1528+&type=pullrequests"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Contributions on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

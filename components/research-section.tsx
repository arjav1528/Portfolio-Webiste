"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink, BookOpen, BarChart3 } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export function ResearchSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const researchProjects = [
    {
      title: 'Campus Solar Generation Analysis',
      description: 'Comprehensive analysis of solar energy generation patterns on BITS Pilani Goa campus. The research involved data collection, statistical analysis, and predictive modeling to optimize energy utilization.',
      domain: 'Renewable Energy & Data Science',
      methodology: ['Data Collection', 'Statistical Analysis', 'Machine Learning', 'Visualization'],
      tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      outcomes: ['15% Efficiency Improvement', 'Predictive Model', 'Policy Recommendations'],
      status: 'Published',
      icon: BarChart3,
    },
    {
      title: 'Mobile App Performance Optimization',
      description: 'Research focused on optimizing mobile application performance through various techniques including code optimization, resource management, and user experience improvements.',
      domain: 'Mobile Computing & HCI',
      methodology: ['Performance Profiling', 'A/B Testing', 'User Studies', 'Benchmarking'],
      tools: ['Flutter', 'Dart', 'Firebase', 'Analytics Tools'],
      outcomes: ['50% Load Time Reduction', 'User Experience Guidelines', 'Best Practices Framework'],
      status: 'In Review',
      icon: BookOpen,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research & <span className="text-primary">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {inView && (
              <Typewriter
                options={{
                  strings: [
                    "Exploring the intersection of technology and sustainability through academic research.",
                    "Contributing to the academic community with innovative solutions and data-driven insights.",
                    "Bridging the gap between theoretical knowledge and practical applications."
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 30,
                  deleteSpeed: 20,
                }}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <p className="text-primary font-medium">{project.domain}</p>
                      </div>
                    </div>
                    <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Methodology */}
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                        Methodology
                      </h4>
                      <div className="space-y-2">
                        {project.methodology.map((method) => (
                          <div key={method} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                        Key Outcomes
                      </h4>
                      <div className="space-y-2">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="group"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                        Read Paper
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                        View Data
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Research Papers', value: '3+', icon: FileText },
            { label: 'Citations', value: '15+', icon: BookOpen },
            { label: 'Research Areas', value: '2', icon: BarChart3 },
            { label: 'Collaborations', value: '5+', icon: ExternalLink },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
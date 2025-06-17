"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Award, Zap, Database } from 'lucide-react';

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'BITS Goa Fest Management App',
      description: 'Developed a scalable Flutter-based fest app for Waves, Quark, and Spree, streamlining event, pass, and schedule management for 3.5K+ users while securely handling ₹6M+ in payments through an integrated payment interface.',
      image: '/fest-app.jpg',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'REST APIs'],
      highlights: ['3500+ Downloads', 'Payment Integration', 'Event Management'],
      featured: true,
      icon: Zap,
    },
    {
      title: 'GiftGenie - AI Gift Recommender',
      description: '3rd Runner Up in the hackathon! An AI-powered gift recommendation system that analyzes user preferences and suggests personalized gifts. Built with React frontend and Flask backend, integrated with Gemini AI.',
      image: '/gift-genie.png',
      technologies: ['React', 'Flask', 'Gemini AI', 'Python', 'Machine Learning'],
      highlights: ['Hackathon 3rd Runner Up' ,'AI-Powered', '85% Accuracy'],
      github: 'https://github.com/sohamdasx/GiftGenie',
      featured: true,
      icon: Award,
    },
    {
      title: 'Campus Solar Generation Research',
      description: 'A comprehensive research project analyzing solar energy generation patterns on campus. Created interactive data visualizations and predictive models using Python and various data science libraries.',
      image: '/digital-twin.png',
      technologies: ['Python', 'Data Visualization', 'Pandas', 'NumPy', 'Matplotlib'],
      highlights: ['Research Publication', 'Data Analysis', 'Predictive Models'],
      github: 'https://github.com/arjav1528/DigitalTwin',
      featured: false,
      icon: Database,
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my most impactful projects, demonstrating technical expertise and innovative problem-solving across various domains.
          </p>
        </motion.div>

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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/20">
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0`}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-video lg:aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 relative"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <project.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className={project.featured ? 'lg:col-span-1' : 'lg:col-span-2'}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                          Key Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="px-3 py-1">
                              {highlight}
                            </Badge>
                          ))}
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
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                            View Code
                          </a>
                        </Button>
                        
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-3"
            asChild
          >
            <a href="https://github.com/arjav1528" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Users, BookOpen } from 'lucide-react';

export function AboutSection() {
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
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const highlights = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Expertise in Flutter, React, and modern web technologies'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Specialized in creating responsive, user-friendly mobile applications'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experience leading teams of 50+ developers in collaborative projects'
    },
    {
      icon: BookOpen,
      title: 'Teaching & Mentorship',
      description: 'Passionate about sharing knowledge and mentoring junior developers'
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={slideInLeft} className="space-y-6">
            <div>
              <motion.h2
                variants={slideInLeft}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                About <span className="text-primary">Me</span>
              </motion.h2>
              <motion.div
                variants={slideInLeft}
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
              />
            </div>

            <motion.p
              variants={slideInLeft}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate Senior Application Developer with a strong foundation in 
              Electronics and Instrumentation Engineering from BITS Pilani Goa. My journey 
              led me to specialize in mobile app development, where I've found my true calling 
              in creating innovative, user-centered applications.
            </motion.p>

            <motion.p
              variants={slideInLeft}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With expertise in Flutter, React, and modern development practices, I focus on 
              building responsive, scalable applications that deliver exceptional user experiences. 
              My leadership experience includes managing teams of 50+ developers and mentoring 
              the next generation of tech professionals.
            </motion.p>

            <motion.div variants={slideInLeft} className="flex flex-wrap gap-2">
              {['Flutter', 'React', 'Dart', 'JavaScript', 'Firebase', 'Node.js', 'Leadership', 'Mentoring'].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div variants={slideInRight} className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={slideInRight}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/40 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <highlight.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
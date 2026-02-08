"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/ui/section-heading';
import { DotPattern } from '@/components/ui/dot-pattern';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'SDE Intern',
      company: 'TechStaX',
      period: 'January 2026 - Present',
      location: 'Remote',
      type: 'Internship',
      description: 'Refurbished existing App\'s UI, and merged cross-platform functionalities.',
      technologies: ['Flutter','Supabase','Edge Functions', 'RLS Policies'],
      current: true,  
    },
    {
      title: 'SDE Intern',
      company: 'Nudron IoT Solutions',
      period: 'August 2025 - December 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Refurbished existing App\'s UI, and merged cross-platform functionalities.',
      technologies: ['Flutter','Bloc','Postman'],
      current: true,  
    },
    
    {
      title: 'App Development Head',
      company: 'Developers\' Society BITS Goa',
      period: 'May 2025 - Present',
      location: 'BITS Pilani, Goa',
      type: 'Leadership Role',
      description: 'Leading the development of the society\'s mobile applications, managing a team of developers and overseeing the technical development of society applications. Responsible for architecture decisions and code quality standards.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Project Management'],
      current: true,  
    },
    {
      title: 'Senior Flutter Intern',
      company: 'Pragati One',
      period: 'Dec 2024 – Jan 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Specialized in Flutter development, working on mobile applications with focus on performance optimization and user experience improvements.',
      technologies: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX'],
      current: false,
    },
    {
      title: 'Lead Instructor',
      company: 'Center for Technical Education',
      period: 'Aug 2024 – Nov 2024',
      location: 'BITS Pilani, Goa',
      type: 'Teaching',
      description: 'Designed and delivered comprehensive technical courses to students, focusing on mobile development and modern programming practices. Mentored students in real-world project development.',
      technologies: ['Teaching', 'Flutter', 'Mobile Development', 'Mentoring'],
      current: false,
    },
    {
      title: 'Senior Application Developer',
      company: 'Developers\' Society BITS Goa',
      period: 'June 2024 – April 2025',
      location: 'BITS Pilani, Goa',
      type: 'Project Management',
      description: 'Leading application development initiatives, managing multiple projects, and overseeing the technical development of society applications. Responsible for architecture decisions and code quality standards.',
      technologies: ['Flutter', 'React', 'Firebase', 'Node.js', 'Project Management'],
      current: false,
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

  const itemVariants = {
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

  const alternateItemVariants = {
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

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Professional <span className="text-primary">Experience</span>
            </>
          }
          subtitle="My journey through various roles in software development, from internships to leadership positions."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-fuchsia-500 hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? itemVariants : alternateItemVariants}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background shadow-lg z-10 bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500" />

                {/* Content Card */}
                <div className={`flex-1 max-w-xl ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <Badge variant="secondary" className="text-xs border border-white/10 hover:border-primary/30">
                              {experience.type}
                            </Badge>
                            {experience.current && (
                              <Badge variant="default" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary mb-2">
                            {experience.company}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs border border-white/10 hover:border-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
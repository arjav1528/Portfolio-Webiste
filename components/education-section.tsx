"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export function EducationSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const education = {
    degree: 'B.E. (Hons) Electronics and Instrumentation Engineering',
    institution: 'BITS Pilani, Goa Campus',
    duration: 'Aug 2023 – May 2027',
    location: 'Goa, India',
    status: 'Pursuing',
    description: 'Comprehensive engineering program focusing on electronics, instrumentation, and control systems with strong emphasis on mathematical foundations and practical applications. While pursuing my core electronics curriculum, I have also undertaken several Computer Science major courses to complement my technical skills and broaden my expertise.',
    coursework: [
      'Object-Oriented Programming',
      'Digital Design',
      'Computer Programming',
      'Control Systems',
      'Microprocessors and Interfacing',
      'Engineering Mathematics',
      'Circuit Analysis',
    ],
    achievements: [
      'App Development Head - Developers\' Society BITS Goa',
      'Lead Instructor - Center for Technical Education',
      'Multiple Hackathon Participations',
      'Research Publications in Renewable Energy',
    ],
    skills: [
      'Problem Solving',
      'Analytical Thinking',
      'Mathematical Modeling',
      'Circuit Design',
      'Programming',
      'Team Leadership',
    ],
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

  return (
    <section id="education" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-press-start">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey at one of India's premier technical institutions, building a strong foundation in engineering and technology.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Institution Info */}
          <motion.div variants={slideInLeft}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/20 overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
                <CardHeader className="relative pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-green-500 hover:bg-green-600">
                        {education.status}
                      </Badge>
                      <CardTitle className="text-2xl">{education.degree}</CardTitle>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-lg font-semibold text-primary">
                      <BookOpen className="h-5 w-5 mr-2" />
                      {education.institution}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {education.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {education.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed mb-20">
                    {education.description}
                  </p>
                  
                  {/* Institution Logo/Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg flex items-center justify-center mb-20">
                    <div className="text-center">
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <img
                          src="/bits.jpg"
                          alt="BITS Pilani Goa Campus"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Academic Details */}
          <motion.div variants={slideInRight} className="space-y-6">
            {/* Relevant Coursework */}
            <Card className="hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Relevant Coursework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Academic Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Skills Developed */}
            <Card className="hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Key Skills Developed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {education.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
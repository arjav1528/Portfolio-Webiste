"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Server, Database, Wrench, Users } from 'lucide-react';

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'React Native', level: 70 },
        { name: 'Dart', level: 90 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'NextJS', level: 65 },
        { name: 'React', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Firebase', level: 88 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Supabase', level: 60 },
        { name: 'Firebase', level: 85 },
        { name: 'Git', level: 90 },
      ],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Android Studio', level: 85 },
        { name: 'Postman', level: 85 },
        { name: 'GitHub', level: 90 },
      ],
    },
    {
      title: 'Leadership & Soft Skills',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Team Leadership', level: 75 },
        { name: 'Mentoring', level: 90 },
        { name: 'Project Management', level: 80 },
        { name: 'Communication', level: 40 },
      ],
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-press-start">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains.
          </p>
        </motion.div>

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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="w-full bg-secondary rounded-full h-2 overflow-hidden"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.2,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
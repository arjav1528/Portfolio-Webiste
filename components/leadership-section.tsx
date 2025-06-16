"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Target, Zap } from 'lucide-react';

export function LeadershipSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Users,
      title: 'App Development Head',
      organization: 'Developers\' Society BITS Goa',
      description: 'Leading the application development wing of the society, overseeing multiple projects and ensuring high-quality deliverables.',
      stats: ['50+ Junior Developers', '7+ Senior Developers', '10+ Active Projects'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      title: 'Team Leadership',
      organization: 'Multiple Projects',
      description: 'Successfully managed cross-functional teams in various development projects, ensuring timely delivery and maintaining code quality standards.',
      stats: ['95% On-time Delivery', '100% Code Review', '20+ Features Shipped'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Application Maintenance',
      organization: 'Production Systems',
      description: 'Responsible for maintaining and enhancing existing applications, implementing new features, and ensuring optimal performance.',
      stats: ['99.9% Uptime', '50% Performance Boost', '30+ Bug Fixes'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Innovation Leader',
      organization: 'Technical Excellence',
      description: 'Driving innovation in development practices, introducing new technologies, and establishing best practices for the team.',
      stats: ['5+ New Technologies', '80% Code Coverage', '15+ Workshops'],
      color: 'from-orange-500 to-red-500',
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
    hidden: { opacity: 0, rotateY: -15, scale: 0.9 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <section id="leadership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Leadership & <span className="text-primary">Responsibilities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My experience in leading teams, managing projects, and driving technical excellence across various initiatives.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="perspective-1000"
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/20 bg-gradient-to-br from-background/50 to-background backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <achievement.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{achievement.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{achievement.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {achievement.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 + statIndex * 0.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="px-3 py-1 text-xs font-medium hover:bg-primary/10 transition-colors"
                          >
                            {stat}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Leadership Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={inView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Users className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
            <p className="text-muted-foreground">Developers Managed</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={inView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Target className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
            <p className="text-muted-foreground">Project Success Rate</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={inView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Trophy className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">20+</h3>
            <p className="text-muted-foreground">Features Delivered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
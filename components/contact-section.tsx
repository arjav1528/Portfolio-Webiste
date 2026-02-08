"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { DotPattern } from "@/components/ui/dot-pattern";

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arjav1528@gmail.com",
      href: "mailto:arjav1528@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9427676356",
      href: "tel:+919427676356",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Goa, India",
      href: "https://maps.google.com",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/arjav1528",
      className: "hover:bg-white/10 hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/arjav1528",
      className: "hover:bg-blue-600/20 hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/arjavpatel",
      className: "hover:bg-sky-500/20 hover:text-sky-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <DotPattern className="opacity-40" color="rgb(255 255 255 / 0.03)" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Get In <span className="text-primary">Touch</span>
            </>
          }
          subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="content-backdrop p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4 font-press-start">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re looking for a dedicated developer for your
                next project, want to collaborate on something exciting, or just
                want to say hello, I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {contact.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.className}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Available for Work
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to new opportunities and exciting projects.
                  Let&apos;s build something amazing together!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnimatedGradientBorder innerClassName="p-0 overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="rounded-lg border-white/20 bg-white/5 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="rounded-lg border-white/20 bg-white/5 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      className="rounded-lg border-white/20 bg-white/5 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      className="rounded-lg border-white/20 bg-white/5 focus:border-primary/50 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-violet-500/25 font-semibold py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 inline-block" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedGradientBorder>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

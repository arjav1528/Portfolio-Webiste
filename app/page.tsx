import dynamic from 'next/dynamic';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { SmoothScrollWrapper } from '@/components/smooth-scroll-wrapper';
import FloatingLinesClient from '@/components/FloatingLinesClient';

// Below-the-fold sections – still pre-rendered at build (ssr: true) but code-split for faster initial load
const AboutSection = dynamic(() => import('@/components/about-section').then((m) => m.AboutSection), { ssr: true });
const SkillsSection = dynamic(() => import('@/components/skills-section').then((m) => m.SkillsSection), { ssr: true });
const ExperienceSection = dynamic(() => import('@/components/experience-section').then((m) => m.ExperienceSection), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/projects-section').then((m) => m.ProjectsSection), { ssr: true });
const OpenSourceSection = dynamic(() => import('@/components/open-source-section').then((m) => m.OpenSourceSection), { ssr: true });
const ResearchSection = dynamic(() => import('@/components/research-section').then((m) => m.ResearchSection), { ssr: true });
const EducationSection = dynamic(() => import('@/components/education-section').then((m) => m.EducationSection), { ssr: true });
const ContactSection = dynamic(() => import('@/components/contact-section').then((m) => m.ContactSection), { ssr: true });
const Footer = dynamic(() => import('@/components/footer').then((m) => m.Footer), { ssr: true });

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <div className="relative min-h-screen">
        <div
          className="fixed inset-0 -z-10"
          style={{ width: '100%', height: '100vh', position: 'fixed' }}
        >
          <FloatingLinesClient />
        </div>
        <div className="relative min-h-screen">
          <Navigation />
          <main className="pt-16">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <OpenSourceSection />
            <ResearchSection />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScrollWrapper>
  );
}

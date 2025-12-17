import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { ResearchSection } from '@/components/research-section';
import { EducationSection } from '@/components/education-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import ClickSpark from '@/components/reactbits/cursor';
import { SmoothScrollWrapper } from '@/components/smooth-scroll-wrapper';

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <ClickSpark>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ResearchSection />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ClickSpark>
    </SmoothScrollWrapper>
  );
}
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
import { SmoothScrollWrapper } from '@/components/smooth-scroll-wrapper';
import FloatingLines from '@/components/FloatingLines';

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <div className="relative min-h-screen">
          {/* FloatingLines background - full viewport, behind content */}
          <div
            className="fixed inset-0 -z-10"
            style={{ width: '100%', height: '100vh', position: 'fixed' }}
          >
            <FloatingLines
              enabledWaves={['top', 'middle', 'bottom']}
              lineCount={5}
              lineDistance={5}
              bendRadius={5}
              bendStrength={-0.5}
              interactive={true}
              parallax={true}
              linesGradient={['#2f4ba2', '#6366f1', '#8b5cf6', '#a855f7', '#e947f5']}
            />
          </div>
          <div className="relative min-h-screen">
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
        </div>
    </SmoothScrollWrapper>
  );
}
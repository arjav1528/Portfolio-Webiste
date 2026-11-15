import Image from "next/image";
import { Navigation, MotionControl } from "@/components/navigation";
import { ProjectWall } from "@/components/project-wall";
import { Arrow, Star } from "@/components/icons";
import {
  TiltedCard,
  Magnet,
  DecryptedText,
} from "@/components/effects/react-bits";
import { SlideTextLink } from "@/components/effects/slide-text-link";
import { CopyEmail } from "@/components/effects/copy-email";
import {
  HeroParallax,
  ViewportMotion,
} from "@/components/effects/viewport-motion";
import content from "@/lib/content.json";
function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`marquee ${reverse ? "reverse" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1, 2, 3].map((i) => (
          <span key={i}>
            {reverse
              ? "STAY CURIOUS ✳ BUILD TOGETHER ✳ KEEP SHIPPING ✳ "
              : "MOBILE ✳ WEB ✳ OPEN SOURCE ✳ BIG IDEAS ✳ "}
          </span>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Navigation />
      <ViewportMotion />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Arjav Patel / Software engineer
            </p>
            <h1 id="hero-title">
              IDEAS.
              <br />
              <span className="code-type">
                <DecryptedText text="CODE." />
              </span>
              <br />
              <span className="outline-type">IMPACT.</span>
            </h1>
            <p className="hero-description">
              I turn “what if” into things people actually use.
              <br />
              Mobile apps, thoughtful web experiences, and a little open-source
              chaos.
            </p>
            <div className="hero-actions">
              <Magnet>
                <SlideTextLink className="button lime" href="#work">
                  Explore my work
                </SlideTextLink>
              </Magnet>
              <a
                className="text-link"
                href="/Arjav-Patel-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Get my resume <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span>Based in India</span>
              <span>Built with curiosity</span>
              <span>Always in progress ↴</span>
            </div>
          </div>
          <HeroParallax>
            <div className="collage-cross" aria-hidden="true">
              +
            </div>
            <a
              className="round-sticker"
              href="#open-source"
              aria-label="Explore my open-source contributions"
            >
              <span>OPEN SOURCE</span>
              <Star />
              <span>OPEN POSSIBILITIES</span>
            </a>
            <TiltedCard>
              <div className="portrait-card">
                <div className="window-bar">
                  <span>● ● ●</span>
                  <span>hello_world.tsx</span>
                  <span>↗</span>
                </div>
                <div className="portrait-image">
                  <Image
                    src="/arjav-patel.jpg"
                    alt="Arjav Patel"
                    width={1440}
                    height={1440}
                    priority
                    sizes="(max-width: 760px) 85vw, 38vw"
                  />
                  <div className="portrait-grid" />
                </div>
                <div className="portrait-caption">
                  <span>Arjav Patel</span>
                  <span>
                    Developer. Builder.
                    <br />
                    Perpetually curious.
                  </span>
                </div>
              </div>
            </TiltedCard>
            <div className="name-sticker">
              Less talk.
              <br />
              <b>More build.</b>
              <Arrow diagonal />
            </div>
            <div className="code-note">
              <span className="code-comment">// the approach</span>
              <code>
                curiosity + code
                <br />
                <b>= real-world impact;</b>
              </code>
            </div>
            <div className="collage-coordinate">
              PERSONAL PORTFOLIO / VOL. 2026
            </div>
          </HeroParallax>
        </section>
        <Marquee />
        <section
          id="work"
          className="work-section shell section-pad"
          aria-labelledby="work-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">The selected collection</p>
              <h2 id="work-title">
                Proof, not
                <br />
                <span className="scribble">promises.</span>
              </h2>
            </div>
            <p>
              From campus essentials to hackathon experiments.
              <br />
              Real problems. My kind of playground.
            </p>
            <Star className="heading-star" />
          </div>
          <ProjectWall />
        </section>
        <section
          id="journey"
          className="journey-section shell section-pad"
          aria-labelledby="journey-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">People, products, progress</p>
              <h2 id="journey-title">
                The journey
                <br />
                so far<span className="magenta-text">.</span>
              </h2>
            </div>
            <p>
              Different teams. New challenges.
              <br />
              One constant: making things better.
            </p>
          </div>
          <div className="experience-list">
            {content.experience.map((item, index) => (
              <details
                className="experience-row"
                data-reveal
                key={item.company + item.role}
                open={index < 2}
              >
                <summary>
                  <span className="experience-period">{item.period}</span>
                  <span className="experience-title">
                    <strong>{item.company}</strong>
                    {item.role && <span>{item.role}</span>}
                  </span>
                  <span className="expand-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="experience-detail">
                  <p>{item.description}</p>
                  <ul className="tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>
        <Marquee reverse />
        <section
          id="open-source"
          className="opensource-section shell section-pad"
          aria-labelledby="opensource-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Built in the open</p>
              <h2 id="opensource-title">
                Good code
                <br />
                travels<span className="lime-text">.</span>
              </h2>
            </div>
            <p>
              Giving back to the tools and communities
              <br />
              that make building possible.
            </p>
          </div>
          <div className="opensource-grid">
            <article className="apache-card cream" data-reveal>
              <div className="card-topline">
                <span>Apache Software Foundation</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="apache-heading">
                <strong>20+</strong>
                <span>
                  merged pull requests.
                  <br />
                  Shared improvements.
                </span>
              </div>
              <p>
                Contributions across Apache Airflow, Apache NuttX, and NuttX
                Apps—from embedded systems to workflow reliability.
              </p>
              <div className="apache-details">
                <div>
                  <h3>Closer to the metal.</h3>
                  <p>
                    C23 <code>stdbit.h</code> support, a generic implementation,
                    Kconfig integration, and CMake/checkpatch compatibility.
                  </p>
                </div>
                <div>
                  <h3>Stronger workflows.</h3>
                  <p>
                    Keycloak HTTPS redirects, Cloud Run transport configuration,
                    JWT secret checksums, and persistent logging with custom
                    volume claim templates.
                  </p>
                </div>
              </div>
              <div className="apache-links">
                {["airflow", "nuttx", "nuttx-apps"].map((repo) => (
                  <a
                    key={repo}
                    href={`https://github.com/apache/${repo}/pulls?q=is%3Apr+is%3Amerged+author%3Aarjav1528`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo}
                    <Arrow diagonal />
                    <span className="sr-only">
                      {" "}
                      merged pull requests (opens in a new tab)
                    </span>
                  </a>
                ))}
              </div>
            </article>
            <article className="toolkit-card magenta" data-reveal>
              <span className="mini-label">On pub.dev</span>
              <Star />
              <h3>
                A little chaos.
                <br />
                Less boilerplate.
              </h3>
              <h4>Flutter Chaos Toolkit</h4>
              <p>
                A reusable Flutter package with frame-by-frame FPS tracking to
                make rendering jank visible. Documented APIs, examples, and
                practical Dart patterns included.
              </p>
              <a
                className="project-link"
                href="https://pub.dev/packages/flutter_chaos_toolkit"
                target="_blank"
                rel="noreferrer"
              >
                Explore the package <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          </div>
        </section>
        <section className="impact-section" aria-labelledby="impact-title">
          <div className="shell">
            <div className="impact-header" data-reveal>
              <p className="eyebrow">A few things I’m proud of</p>
              <h2 id="impact-title">The ripple effect.</h2>
              <p>Better apps. More builders. A little more possibility.</p>
            </div>
            <div className="impact-wall">
              <article className="receipt" data-reveal>
                <div className="receipt-heading">CAMPUS / IMPACT RECEIPT</div>
                <strong>₹10M+</strong>
                <p>
                  payments handled by the
                  <br />
                  BITS Goa fest app
                </p>
                <div className="receipt-rule" />
                <div>
                  <span>Campus users</span>
                  <b>3,500+</b>
                </div>
                <div>
                  <span>Festivals</span>
                  <b>03</b>
                </div>
                <div>
                  <span>Built for</span>
                  <b>Real life</b>
                </div>
                <div className="barcode" />
              </article>
              <article className="mentoring-note" data-reveal>
                <span className="tape" aria-hidden="true" />
                <span className="mini-label">Pass it forward ✳</span>
                <strong>
                  Build things.
                  <br />
                  Build people.
                </strong>
                <p>
                  Led 50+ junior and 10 senior developers. Helped 30+ students
                  get started with Flutter.
                </p>
                <span className="note-signoff">DevSoc × CTE / BITS Goa</span>
                <Star />
              </article>
              <article className="performance-note" data-reveal>
                <div className="window-bar">
                  <span>● ● ●</span>
                  <span>less_is_more.log</span>
                </div>
                <div className="performance-content">
                  <span>At TechStaX</span>
                  <strong>
                    <s>123.1</s>
                    <br />
                    65<span> MB</span>
                  </strong>
                  <p>
                    A smaller app. Fewer memory leaks. Room for what matters.
                  </p>
                  <span className="performance-label">APP SIZE ↓ ~47%</span>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about-section shell section-pad"
          aria-labelledby="about-title"
        >
          <div className="about-intro">
            <div data-reveal>
              <p className="eyebrow">The person behind the commits</p>
              <h2 id="about-title">
                Engineer by
                <br />
                training.
                <br />
                <span className="lime-text">
                  Builder by
                  <br />
                  instinct.
                </span>
              </h2>
            </div>
            <div className="about-copy" data-reveal>
              <p className="large-copy">
                Hey, I’m Arjav. I like the space where a technical challenge
                becomes something useful.
              </p>
              <p>
                I’m studying Electronics and Instrumentation Engineering at BITS
                Pilani, Goa. Along the way, I’ve built mobile apps, explored the
                web, contributed to open source, and helped other developers
                find their footing.
              </p>
              <p>
                My work moves between interfaces, systems, and teams. The goal
                stays the same: thoughtful software that earns its place in
                someone’s day.
              </p>
              <div className="about-signature">
                Curiosity is the common thread.{" "}
                <span aria-hidden="true">✳</span>
              </div>
            </div>
          </div>
          <div className="education-research">
            <article className="education-card cream" data-reveal>
              <Image
                src="/bits-goa.jpg"
                alt="BITS Pilani Goa campus"
                width={800}
                height={450}
                sizes="(max-width: 760px) 90vw, 40vw"
              />
              <div>
                <span className="mini-label">Aug 2023 — May 2027</span>
                <h3>
                  BITS Pilani,
                  <br />
                  Goa Campus.
                </h3>
                <p>B.E. (Hons) Electronics and Instrumentation Engineering</p>
                <details>
                  <summary>
                    Inside the classroom <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    Object-Oriented Programming, Digital Design, Computer
                    Programming, Control Systems, Microprocessors and
                    Interfacing, Engineering Mathematics, and Circuit Analysis.
                  </p>
                </details>
              </div>
            </article>
            <article className="research-card cobalt" data-reveal>
              <div className="card-topline">
                <span>Research / Energy × data</span>
                <Star />
              </div>
              <h3>
                A brighter
                <br />
                kind of data.
              </h3>
              <h4>Campus Solar Generation Analysis</h4>
              <p>
                Studying solar-generation patterns at BITS Goa through data
                collection, statistical analysis, predictive modeling, and
                interactive visualization.
              </p>
              <p>
                Exploring better energy utilization, predictive models, and
                campus energy recommendations.
              </p>
              <ul className="tags">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Scikit-learn",
                ].map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href="https://github.com/arjav1528/DigitalTwin"
                target="_blank"
                rel="noreferrer"
              >
                Explore DigitalTwin <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          </div>
          <div className="skills-section">
            <div className="skills-heading" data-reveal>
              <h3>My working toolkit.</h3>
              <span>Always adding to it ↘</span>
            </div>
            <div className="skills-grid">
              {content.skills.map((group) => (
                <div key={group.name} data-reveal>
                  <h4>{group.name}</h4>
                  <ul className="skill-tags">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="footer-top shell" data-reveal>
          <div>
            <p className="eyebrow">Got something in mind?</p>
            <h2>
              Let’s make
              <br />
              <span>it happen.</span>
            </h2>
            <Magnet>
              <SlideTextLink
                className="button cream"
                href="mailto:arjav1528@gmail.com"
              >
                Say hello
              </SlideTextLink>
            </Magnet>
          </div>
          <a
            className="footer-star"
            href="mailto:arjav1528@gmail.com"
            aria-label="Email Arjav Patel"
          >
            <Star />
            <Arrow diagonal />
          </a>
        </div>
        <div className="footer-contact shell" data-reveal>
          <CopyEmail />
          <div>
            <a
              href="https://github.com/arjav1528"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://linkedin.com/in/arjav1528"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="/Arjav-Patel-Resume.pdf" target="_blank" rel="noreferrer">
              Resume ↗<span className="sr-only"> (PDF opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          ARJAV PATEL<span>✳</span>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} Arjav Patel</span>
          <span>Made with intent. And a little chaos.</span>
          <MotionControl />
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

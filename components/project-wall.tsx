"use client";
import { useState } from "react";
import content from "@/lib/content.json";
import { Arrow, Star } from "./icons";
import { SpotlightCard } from "./effects/react-bits";
import { RippleButton } from "./effects/magic-ui";
const categories = ["All work", "Mobile", "Web", "AI & data"];
function ProjectArt({ kind }: { kind: string }) {
  if (kind === "festival")
    return (
      <div className="project-art festival-art" aria-hidden="true">
        <div className="festival-poster">
          <span>BITS GOA / ALL ACCESS</span>
          <b>
            GOOD
            <br />
            TIMES.
            <Star />
          </b>
          <div className="festival-names">WAVES ★ QUARK ★ SPREE</div>
          <div className="barcode" />
        </div>
        <div className="festival-ticket">
          <span>ONE APP.</span>
          <strong>3</strong>
          <span>
            UNFORGETTABLE
            <br />
            FESTIVALS
          </span>
        </div>
      </div>
    );
  if (kind === "commits")
    return (
      <div className="project-art commit-art" aria-hidden="true">
        <div className="mini-window">
          <div className="window-bar">
            <span>● ● ●</span>
            <span>commitcut</span>
          </div>
          <strong>
            Code together.
            <br />
            Split fairly.
          </strong>
          <div className="commit-bars">
            <i />
            <i />
            <i />
          </div>
          <div className="commit-caption">CONTRIBUTION → RECOGNITION</div>
        </div>
        <span className="art-sticker">git good.</span>
      </div>
    );
  if (kind === "registration")
    return (
      <div className="project-art registration-art" aria-hidden="true">
        <div className="registration-grid">
          <span>
            CS F111 <b>✓</b>
          </span>
          <span>
            MATH F111 <b>✓</b>
          </span>
          <span>
            EEE F111 <b>✓</b>
          </span>
        </div>
        <span className="stamp">
          YOU’RE
          <br />
          IN!
        </span>
      </div>
    );
  if (kind === "radar")
    return (
      <div className="project-art radar-art" aria-hidden="true">
        <div className="radar">
          <i />
          <i />
          <i />
        </div>
        <span>
          NIGHT
          <br />
          <b>VIGIL.</b>
        </span>
        <div className="radar-label">48 HOURS. ONE CHALLENGE.</div>
      </div>
    );
  if (kind === "calendar")
    return (
      <div className="project-art small-art" aria-hidden="true">
        <span className="calendar-icon">
          <small>CLASS SYNC</small>
          <b>MON</b>
          <i>✓ On your calendar</i>
        </span>
      </div>
    );
  if (kind === "store")
    return (
      <div className="project-art small-art" aria-hidden="true">
        <div className="shopping-bag">
          <span>SWD</span>
          <Star />
        </div>
      </div>
    );
  return (
    <div className="project-art small-art gift-art" aria-hidden="true">
      <div className="gift-box">
        <span>✦</span>
      </div>
      <span className="gift-spark">✧</span>
    </div>
  );
}
export function ProjectWall() {
  const [category, setCategory] = useState("All work");
  const visible = content.projects.filter(
    (project) => category === "All work" || project.category === category,
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((item) => (
            <RippleButton
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
              {item === "All work" && <span className="filter-count">07</span>}
            </RippleButton>
          ))}
        </div>
        <p className="project-count" aria-live="polite">
          {visible.length} projects / always building
        </p>
      </div>
      <div
        className={`project-grid ${category !== "All work" ? "filtered" : ""}`}
      >
        {visible.map((project) => (
          <SpotlightCard
            key={project.id}
            className={`project-card ${project.tone} project-${project.id}`}
          >
            <ProjectArt kind={project.visual} />
            <div className="project-body">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.badge}</span>
              </div>
              <h3>{project.name}</h3>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Technologies">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
                <span className="sr-only">
                  : {project.title} (opens in a new tab)
                </span>
                <Arrow diagonal />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </>
  );
}

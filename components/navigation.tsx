"use client";
import { useState } from "react";
import { Arrow } from "./icons";
import { ScrollProgress } from "./effects/magic-ui";
import { useMotionPreferences } from "./effects/motion-preferences";
const links = [
  ["Work", "#work"],
  ["Journey", "#journey"],
  ["About", "#about"],
  ["Contact", "#contact"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navigation-wrap">
      <ScrollProgress />
      <div className="navigation">
        <a className="logo" href="#top" aria-label="Arjav Patel, back to top">
          ap<span>✳</span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "nav-links open" : "nav-links"}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:arjav1528@gmail.com">
          Let’s talk <Arrow diagonal />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </div>
    </header>
  );
}
export function MotionControl() {
  const { paused, toggle } = useMotionPreferences();
  return (
    <button className="motion-toggle" aria-pressed={paused} onClick={toggle}>
      {paused ? "▶ Play motion" : "Ⅱ Pause motion"}
    </button>
  );
}

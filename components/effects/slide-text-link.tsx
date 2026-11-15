// Adapted from Kokonut UI Slide Text Button (MIT); see docs/component-sources.md.
import type { AnchorHTMLAttributes } from "react";
import { Arrow } from "@/components/icons";
export function SlideTextLink({
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={`slide-text-link ${className}`}>
      <span className="slide-label-window">
        <span className="slide-label-track">
          <span>{children}</span>
          <span aria-hidden="true">{children}</span>
        </span>
      </span>
      <Arrow diagonal />
    </a>
  );
}

"use client";
// Layered press treatment adapted from cssbuttons-io on Uiverse (MIT).
import { useEffect, useState } from "react";
const email = "arjav1528@gmail.com";
export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  useEffect(() => {
    if (status !== "copied") return;
    const timer = setTimeout(() => setStatus("idle"), 2200);
    return () => clearTimeout(timer);
  }, [status]);
  return (
    <div className="email-actions">
      <a href={`mailto:${email}`}>{email}</a>
      <button
        className="push-button"
        type="button"
        aria-label="Copy email address"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setStatus("copied");
          } catch {
            setStatus("error");
          }
        }}
      >
        <span className="push-shadow" />
        <span className="push-edge" />
        <span className="push-front">
          <span aria-hidden="true">{status === "copied" ? "✓" : "⧉"}</span>{" "}
          {status === "copied" ? "Copied!" : "Copy email"}
        </span>
      </button>
      <span className="copy-status" role="status">
        {status === "copied"
          ? "Email address copied."
          : status === "error"
            ? "Couldn’t copy. Select the email address, or click it to open your mail app."
            : ""}
      </span>
    </div>
  );
}

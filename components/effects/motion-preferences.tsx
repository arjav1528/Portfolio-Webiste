"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const MotionContext = createContext({
  enabled: false,
  paused: false,
  toggle: () => {},
});
export function MotionPreferences({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "running";
  }, [paused]);
  return (
    <MotionContext
      value={{
        enabled: !paused && !reduced,
        paused,
        toggle: () => setPaused((value) => !value),
      }}
    >
      {children}
    </MotionContext>
  );
}
export const useMotionPreferences = () => useContext(MotionContext);

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const setProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      gsap.to(el, { scaleX: progress, duration: 0.1, ease: "none" });
    };

    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });
    window.addEventListener("resize", setProgress);

    return () => {
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("resize", setProgress);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />;
}

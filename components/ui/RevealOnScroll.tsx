"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  as?: "div" | "section";
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 48,
  stagger,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const targets = stagger ? Array.from(el.children) : el;

    gsap.set(targets, { y, opacity: 0 });

    const anim = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      delay,
      stagger: stagger ?? 0,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });

    return () => {
      anim.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}

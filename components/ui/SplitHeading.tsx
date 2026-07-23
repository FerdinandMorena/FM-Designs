"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SplitHeadingProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: string;
  type?: "chars" | "words";
  trigger?: "load" | "scroll";
  delay?: number;
};

export function SplitHeading({
  as: Tag = "h2",
  className,
  children,
  type = "words",
  trigger = "scroll",
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(el, {
      type,
      wordsClass: "inline-block",
      charsClass: "inline-block",
    });

    const targets = type === "chars" ? split.chars : split.words;

    gsap.set(targets, { yPercent: 110, opacity: 0 });

    const anim = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      stagger: type === "chars" ? 0.02 : 0.06,
      delay,
      scrollTrigger:
        trigger === "scroll"
          ? { trigger: el, start: "top 85%", once: true }
          : undefined,
    });

    return () => {
      anim.kill();
      split.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className} style={{ overflow: "hidden" }}>
      {children}
    </Tag>
  );
}

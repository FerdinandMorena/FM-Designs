"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HorizontalScrollStage } from "@/components/ui/HorizontalScrollStage";
import { testimonials } from "@/lib/data";

export function TestimonialsHorizontal() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="theme-dark-alt relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Eyebrow>Client feedback</Eyebrow>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Businesses that grew with a better website.
        </h2>
      </div>

      <div className="mt-14">
        <HorizontalScrollStage
          onSetup={(mainTween) => {
            const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
            const triggers = cards.map((card) =>
              gsap.fromTo(
                card,
                { scale: 0.9, opacity: 0.4 },
                {
                  scale: 1,
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: mainTween,
                    start: "left 80%",
                    end: "left 35%",
                    scrub: true,
                  },
                }
              )
            );
            return () => triggers.forEach((t) => t.scrollTrigger?.kill());
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="glass w-[88vw] shrink-0 snap-center rounded-3xl p-9 sm:w-[480px] sm:p-11 md:w-[44vw] lg:w-[34vw]"
            >
              <div className="flex gap-1 text-[var(--color-accent)]">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScrollStage>
      </div>
    </section>
  );
}

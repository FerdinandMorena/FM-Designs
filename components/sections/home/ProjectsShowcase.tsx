"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HorizontalScrollStage } from "@/components/ui/HorizontalScrollStage";
import { projects } from "@/lib/data";

export function ProjectsShowcase() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Recent projects we&apos;re proud of.
        </h2>
      </div>

      <div className="mt-14">
        <HorizontalScrollStage
          pinOffset={70}
          onSetup={(mainTween) => {
            const panels = panelRefs.current.filter(
              Boolean,
            ) as HTMLDivElement[];
            const triggers = panels.map((panel) =>
              gsap.fromTo(
                panel,
                { scale: 0.88, opacity: 0.45 },
                {
                  scale: 1,
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: mainTween,
                    start: "left 78%",
                    end: "left 30%",
                    scrub: true,
                  },
                },
              ),
            );
            return () => triggers.forEach((t) => t.scrollTrigger?.kill());
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="w-[88vw] shrink-0 snap-center sm:w-[480px] md:w-[46vw] lg:w-[36vw]"
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 36vw, (min-width: 768px) 46vw, 88vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="mt-5">
                <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-[11px] font-medium text-[var(--foreground-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </HorizontalScrollStage>
      </div>
    </section>
  );
}

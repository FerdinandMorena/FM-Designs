"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HorizontalScrollStage } from "@/components/ui/HorizontalScrollStage";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ variant = "dark" }: { variant?: "dark" | "paper" }) {
  return (
    <section className={cn("relative py-24 sm:py-32", variant === "paper" ? "section-paper" : "bg-[var(--background)]")}>
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Eight stages, one continuous thread.
          </h2>
        </div>
      </div>

      <div className="mt-14 sm:mt-16">
        <HorizontalScrollStage pinOffset={60}>
          {processSteps.map((step, i) => (
            <div key={step.title} className="w-[80vw] shrink-0 snap-center sm:w-[420px] md:w-[38vw] lg:w-[30vw]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface)]">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 38vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-start gap-4">
                <span className="font-[family-name:var(--font-heading)] text-xs font-medium tabular-nums text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--foreground-muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScrollStage>
      </div>
    </section>
  );
}

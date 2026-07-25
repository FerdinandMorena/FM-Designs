import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { featuredProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <section className="relative bg-[var(--background)] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Real products, shipped for real clients.
            </h2>
          </div>
          <MagneticButton href="/work" variant="outline" className="shrink-0">
            View all work <ArrowUpRight size={15} />
          </MagneticButton>
        </div>

        <div className="mt-16 divide-y divide-[var(--border-soft)] border-t border-[var(--border-soft)] sm:mt-20">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.id} y={40}>
              <Link
                href={`/work/${project.slug}`}
                data-cursor="grow"
                className={cn(
                  "group grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16",
                )}
              >
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface)] sm:aspect-[16/10]",
                    i % 2 === 1 && "lg:order-2",
                  )}
                >
                  <Image
                    src={project.cover ?? project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className={cn(i % 2 === 1 && "lg:order-1")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    {project.client}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--foreground-muted)]">
                    {project.summary}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                    {project.outcomes.map((o) => (
                      <div key={o.label}>
                        <p className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--foreground)]">
                          {o.value}
                        </p>
                        <p className="text-[11px] text-[var(--foreground-muted)]">{o.label}</p>
                      </div>
                    ))}
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--color-accent)]">
                    View case study
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CtaSection } from "@/components/sections/CtaSection";
import { projects } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48">
        <div className="container-px mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={13} /> All work
          </Link>

          <div className="mt-6">
            <Eyebrow>{project.client}</Eyebrow>
            <SplitHeading
              as="h1"
              trigger="load"
              className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-6xl"
            >
              {project.title}
            </SplitHeading>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--foreground-muted)]">
              {project.summary}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <MagneticButton href={project.liveUrl} variant="accent" target="_blank" rel="noopener noreferrer">
                Visit live site <ExternalLink size={14} />
              </MagneticButton>
            )}
            {project.githubUrl && (
              <MagneticButton href={project.githubUrl} variant="outline" target="_blank" rel="noopener noreferrer">
                <GithubIcon width={14} height={14} /> View code
              </MagneticButton>
            )}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-px mx-auto max-w-7xl">
          <RevealOnScroll className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
            <Image
              src={project.cover ?? project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {project.outcomes.map((o) => (
              <div key={o.label} className="border-t border-[var(--border-soft)] pt-4">
                <p className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--foreground)]">
                  {o.value}
                </p>
                <p className="mt-1 text-xs text-[var(--foreground-muted)]">{o.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Overview
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--foreground)]">{project.overview}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Process
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--foreground-muted)]">{project.processNote}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[var(--border-soft)] px-3 py-1.5 text-xs font-medium text-[var(--foreground-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper relative py-20 sm:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Product in the wild
          </p>
          <RevealOnScroll className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[#e7e2d8] p-3 sm:p-5">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#d98b7a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e0c27a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8aa88a]" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
              <Image
                src={project.image}
                alt={`${project.title} live product screenshot`}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container-px mx-auto max-w-7xl border-t border-[var(--border-soft)] pt-10">
          <Link
            href={`/work/${next.slug}`}
            data-cursor="grow"
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--foreground-muted)]">
                Next project
              </p>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--foreground)] sm:text-3xl">
                {next.title}
              </p>
            </div>
            <ArrowUpRight
              size={28}
              className="shrink-0 text-[var(--foreground-muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-accent)]"
            />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

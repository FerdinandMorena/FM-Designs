import { Eyebrow } from "@/components/ui/Eyebrow";
import { techStack } from "@/lib/data";

export function TechStack() {
  const loop = [...techStack, ...techStack];

  return (
    <section className="section-paper relative py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-xl">
          <Eyebrow>Our toolkit</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
            Modern technology, chosen deliberately.
          </h2>
        </div>
      </div>

      <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track gap-3" style={{ animationDirection: "reverse" }}>
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 rounded-full border border-[var(--border-soft)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)]/75"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

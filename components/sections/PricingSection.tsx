import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="theme-dark-alt relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Honest pricing, scaled to what you need.
          </h2>
          <p className="mt-4 text-sm text-[var(--foreground)]/65">
            Every project is scoped individually — here&apos;s roughly where each tier starts.
          </p>
        </div>

        <RevealOnScroll
          stagger={0.08}
          className="mt-14 grid gap-6 lg:grid-cols-4"
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-3xl border p-7",
                tier.highlighted
                  ? "border-transparent bg-[var(--color-accent)] text-white shadow-2xl shadow-black/20 lg:-translate-y-3"
                  : "border-[var(--border-soft)] bg-[var(--surface)]"
              )}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  Most requested
                </span>
              )}
              <h3 className={cn("text-base font-bold", tier.highlighted ? "text-white" : "text-[var(--foreground)]")}>
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold",
                  tier.highlighted ? "text-white" : "text-[var(--foreground)]"
                )}
              >
                {tier.price}
              </p>
              <p
                className={cn(
                  "mt-3 text-xs leading-relaxed",
                  tier.highlighted ? "text-white/70" : "text-[var(--foreground)]/60"
                )}
              >
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs">
                    <Check
                      size={13}
                      className={cn(
                        "mt-0.5 shrink-0",
                        tier.highlighted ? "text-[var(--color-accent)]" : "text-[var(--color-secondary)]"
                      )}
                    />
                    <span className={tier.highlighted ? "text-white/80" : "text-[var(--foreground)]/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="/contact"
                variant={tier.highlighted ? "solid" : "outline"}
                className={cn(
                  "mt-8 w-full",
                  tier.highlighted && "!bg-white !text-[var(--color-primary)] hover:!bg-white/90"
                )}
              >
                {tier.cta}
              </MagneticButton>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}

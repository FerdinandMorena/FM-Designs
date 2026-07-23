"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { footerLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

function MagneticLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.25, y: y * 0.4, duration: 0.4, ease: "power3.out" });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor="grow"
      className={cn("inline-block text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--color-accent)]", className)}
    >
      {children}
    </Link>
  );
}

function FloatingSocial({ Icon, delay }: { Icon: typeof GithubIcon; delay: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const anim = gsap.to(el, {
      y: -6,
      duration: 2.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay,
    });
    return () => {
      anim.kill();
    };
  }, [delay]);

  return (
    <a
      ref={ref}
      href="#"
      aria-label="Social media link"
      data-cursor="grow"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      <Icon width={15} height={15} />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-[var(--border-soft)] bg-[var(--surface)]">
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--border-soft) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-px relative mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight">
              <Image src="/logo-icon.png" alt="" width={46} height={46} className="h-[46px] w-[46px]" />
              FM<span className="text-[var(--color-accent)]">Designs</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--foreground-muted)]">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <FloatingSocial Icon={GithubIcon} delay={0} />
              <FloatingSocial Icon={InstagramIcon} delay={0.3} />
              <FloatingSocial Icon={LinkedinIcon} delay={0.6} />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.quick.map((l) => (
                <li key={l.href}>
                  <MagneticLink href={l.href}>{l.label}</MagneticLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--foreground-muted)]">
              <li className="flex items-center gap-2">
                <Mail size={14} /> {siteConfig.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-soft)] pt-8 text-xs text-[var(--foreground-muted)] md:flex-row">
          <p>&copy; {new Date().getFullYear()} FM Designs. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((l) => (
              <MagneticLink key={l.href} href={l.href} className="text-xs">
                {l.label}
              </MagneticLink>
            ))}
          </div>
        </div>

        <RevealOnScroll y={32} className="mt-16 overflow-hidden">
          <p
            className="select-none whitespace-nowrap font-[family-name:var(--font-heading)] font-bold leading-none tracking-tight text-white/[0.06]"
            style={{ fontSize: "clamp(3rem, 12vw, 9rem)" }}
          >
            FMDesigns.
          </p>
        </RevealOnScroll>
      </div>
    </footer>
  );
}

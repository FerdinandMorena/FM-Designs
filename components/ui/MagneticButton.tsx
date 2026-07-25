"use client";

import { useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "accent";
};

type ButtonAsLink = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

const base =
  "btn-tactile group relative inline-flex h-auto items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold shadow-none";

const variantStyles = {
  solid: "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90",
  outline:
    "border border-[var(--border-soft)] bg-transparent text-[var(--foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  accent: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90",
};

export function MagneticButton(props: ButtonAsLink | ButtonAsButton) {
  const { children, className, variant = "solid", ...rest } = props;
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: "power3.out" });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ComponentPropsWithoutRef<typeof Link>;
    return (
      <Button asChild className={cn(base, variantStyles[variant], className)}>
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          data-cursor="grow"
          {...linkRest}
        >
          {children}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor="grow"
      className={cn(base, variantStyles[variant], className)}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </Button>
  );
}

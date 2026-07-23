"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes — derived during
  // render (rather than in an effect) since it's adjusting state in
  // response to a prop-like change, not synchronizing with an external system.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <nav
          style={{
            backdropFilter: scrolled ? "blur(32px)" : "blur(20px)",
            WebkitBackdropFilter: scrolled ? "blur(32px)" : "blur(20px)",
          }}
          className={cn(
            "glass flex w-full items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300",
            scrolled && "shadow-lg shadow-black/[0.03]",
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11"
            />
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight">
              FM<span className="text-[var(--color-accent)]">Designs</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-md font-medium transition-colors",
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--foreground)]/75 hover:text-[var(--color-accent)]",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex">
            <MagneticButton href="/contact" className="!px-5 !py-2.5 text-xs">
              Get a Free Quote
            </MagneticButton>
          </div>

          <div className="flex items-center md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)]"
                >
                  <Menu size={16} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-[var(--border-soft)] bg-[var(--surface)] p-6"
              >
                <SheetTitle className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight">
                  <Image
                    src="/logo-icon.png"
                    alt=""
                    width={38}
                    height={38}
                    className="h-[38px] w-[38px]"
                  />
                  FM<span className="text-[var(--color-accent)]">Designs</span>
                </SheetTitle>
                <div className="mt-8 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <MagneticButton href="/contact" className="mt-4 w-full">
                      Get a Free Quote
                    </MagneticButton>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

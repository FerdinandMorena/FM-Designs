"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HorizontalScrollStageProps = {
  children: ReactNode;
  trackClassName?: string;
  /** Pixels to nudge the pinned position down from dead-center, so tall content clears a fixed navbar. */
  pinOffset?: number;
  /** Called once the pin/translate tween is created — return a cleanup fn for any extra scroll-linked animation set up against it (e.g. per-item reveals via `containerAnimation`). */
  onSetup?: (mainTween: gsap.core.Tween, track: HTMLDivElement) => (() => void) | void;
};

export function HorizontalScrollStage({ children, trackClassName, pinOffset = 0, onSetup }: HorizontalScrollStageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const first = cards[0];
      const last = cards[cards.length - 1];

      // Centered start/end: the first card sits centered in the viewport
      // before the scrub begins, and the track travels just far enough that
      // the last card ends up centered too — not flush against an edge.
      const offsets = () => {
        const center = section.clientWidth / 2;
        return {
          start: center - (first.offsetLeft + first.offsetWidth / 2),
          end: center - (last.offsetLeft + last.offsetWidth / 2),
        };
      };

      gsap.set(track, { x: offsets().start });

      const mainTween = gsap.to(track, {
        x: () => offsets().end,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: `center center+=${pinOffset}`,
          end: () => `+=${Math.abs(offsets().end - offsets().start)}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      const extraCleanup = onSetup?.(mainTween, track);

      return () => {
        extraCleanup?.();
        mainTween.scrollTrigger?.kill();
        mainTween.kill();
      };
    });

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Below the pin breakpoint the track falls back to plain overflow-x-auto,
  // which only responds to touch swipes. Add mouse-drag and wheel support so
  // it's actually usable on trackpads/mice at tablet and mobile widths too —
  // both are no-ops once the >=900px mode makes the track overflow-visible
  // (it stops being a scroll container, so scrollWidth === clientWidth).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const canDragScroll = () => track.scrollWidth > track.clientWidth;

    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !canDragScroll()) return;
      dragging = true;
      startX = e.clientX;
      startScrollLeft = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      track.scrollLeft = startScrollLeft - (e.clientX - startX);
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      track.releasePointerCapture(e.pointerId);
    };
    const onWheel = (e: WheelEvent) => {
      if (!canDragScroll()) return;
      track.scrollLeft += e.deltaX !== 0 ? e.deltaX : e.deltaY;
      e.preventDefault();
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      track.removeEventListener("wheel", onWheel);
    };
  }, []);

  // Tracks scroll position for the mobile/tablet carousel arrows below, so
  // they disable at either end instead of scrolling past the last card.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      setCanPrev(track.scrollLeft > 4);
      setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.85;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <div
        ref={trackRef}
        className={cn(
          "flex cursor-grab gap-6 overflow-x-auto px-6 pb-4 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory min-[900px]:motion-safe:overflow-visible min-[900px]:motion-safe:px-[6vw] min-[900px]:motion-safe:cursor-auto [&::-webkit-scrollbar]:hidden",
          trackClassName
        )}
      >
        {children}
      </div>

      <button
        type="button"
        aria-label="Scroll to previous"
        onClick={() => scrollByCard(-1)}
        disabled={!canPrev}
        className="glass absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-[var(--foreground)] transition-opacity disabled:opacity-30 min-[900px]:hidden"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="Scroll to next"
        onClick={() => scrollByCard(1)}
        disabled={!canNext}
        className="glass absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-[var(--foreground)] transition-opacity disabled:opacity-30 min-[900px]:hidden"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

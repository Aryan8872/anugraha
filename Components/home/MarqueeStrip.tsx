"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// ─── Row data ─────────────────────────────────────────────────────────────────
const ROW_ONE = [
  "Free Shipping",
  "·",
  "Handcrafted Quality",
  "·",
  "Limited Drops",
  "·",
  "100% Cotton",
  "·",
  "Premium Fabric",
  "·",
];

const ROW_TWO = [
  "Anugraha",
  "·",
  "AW24",
  "·",
  "Made With Care",
  "·",
  "Est. 2024",
  "·",
  "Wear The Craft",
  "·",
];

// Duplicate for seamless loop
const TRACK_ONE = [...ROW_ONE, ...ROW_ONE];
const TRACK_TWO = [...ROW_TWO, ...ROW_TWO];

// ─── Sub-component ─────────────────────────────────────────────────────────────
interface MarqueeRowProps {
  items: string[];
  rowRef: React.RefObject<HTMLDivElement | null>;
}

function MarqueeRow({ items, rowRef }: MarqueeRowProps) {
  return (
    <div className="overflow-hidden">
      <div ref={rowRef} className="flex gap-6 w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap text-[11px] md:text-sm font-bold uppercase tracking-[0.25em] ${
              item === "·"
                ? "text-green-400 opacity-60"
                : "text-white opacity-90"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function MarqueeStrip() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);
  const tl1Ref = useRef<gsap.core.Tween | null>(null);
  const tl2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1: scrolls left (→ direction)
      tl1Ref.current = gsap.to(rowOneRef.current, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: 22,
      });

      // Row 2: scrolls right (← direction) — starts offset by 50%
      gsap.set(rowTwoRef.current, { xPercent: -50 });
      tl2Ref.current = gsap.to(rowTwoRef.current, {
        xPercent: 0,
        ease: "none",
        repeat: -1,
        duration: 18,
      });
    }, wrapperRef);

    // ── Hover: slow to 30% speed ───────────────────────────────────────────
    const wrapper = wrapperRef.current;

    const slowDown = () => {
      gsap.to([tl1Ref.current, tl2Ref.current], {
        timeScale: 0.3,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    const speedUp = () => {
      gsap.to([tl1Ref.current, tl2Ref.current], {
        timeScale: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    };

    wrapper?.addEventListener("mouseenter", slowDown);
    wrapper?.addEventListener("mouseleave", speedUp);

    return () => {
      ctx.revert();
      wrapper?.removeEventListener("mouseenter", slowDown);
      wrapper?.removeEventListener("mouseleave", speedUp);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full bg-zinc-950 py-6 md:py-8 flex flex-col gap-4 overflow-hidden cursor-default select-none"
      aria-hidden="true"
    >
      {/* Row 1: left → */}
      <MarqueeRow items={TRACK_ONE} rowRef={rowOneRef} />

      {/* Row 2: right ← */}
      <MarqueeRow items={TRACK_TWO} rowRef={rowTwoRef} />
    </section>
  );
}

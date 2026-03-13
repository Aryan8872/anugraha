"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
const LEFT_ITEMS = [
  {
    label: "Essentials",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6cae4?q=80&w=700&auto=format&fit=crop",
  },
  {
    label: "Limited",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=700&auto=format&fit=crop",
  },
  {
    label: "Drops",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=700&auto=format&fit=crop",
  },
  {
    label: "Anugraha",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=700&auto=format&fit=crop",
  },
];

const RIGHT_ITEMS = ["Crafted", "Minimal", "Bold", "Clean"];

// Repeat once so the wave animation has enough height to scroll through
const LEFT_DATA = [...LEFT_ITEMS, ...LEFT_ITEMS];
const RIGHT_DATA = [...RIGHT_ITEMS, ...RIGHT_ITEMS];

const WAVE = { waveNumber: 10, waveSpeed: 1 };

// ─── Component ───────────────────────────────────────────────────────────────
export default function DualWaveSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const imgARef = useRef<HTMLImageElement>(null);
  const imgBRef = useRef<HTMLImageElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const thumb = thumbRef.current;
    const imgA = imgARef.current;
    const imgB = imgBRef.current;
    const label = labelRef.current;
    if (!section || !wrapper || !leftCol || !rightCol || !imgA || !imgB) return;

    // ── Seed images ──────────────────────────────────────────────────
    imgA.src = LEFT_ITEMS[0].image;
    imgB.src = LEFT_ITEMS[0].image;
    gsap.set(imgA, { opacity: 1, zIndex: 2 });
    gsap.set(imgB, { opacity: 0, zIndex: 1 });
    if (label) label.textContent = LEFT_ITEMS[0].label;

    let frontIsA = true;
    let lastIdx = 0;

    const crossfadeTo = (newIdx: number) => {
      if (newIdx === lastIdx) return;
      lastIdx = newIdx;
      const front = frontIsA ? imgA : imgB;
      const back = frontIsA ? imgB : imgA;
      back.src = LEFT_ITEMS[newIdx].image;
      gsap.set(back, { zIndex: 2, opacity: 0 });
      gsap.set(front, { zIndex: 1 });
      gsap.to(back, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          frontIsA = !frontIsA;
        },
      });
      if (label) label.textContent = LEFT_ITEMS[newIdx].label;
    };

    // ── Collect text items ────────────────────────────────────────────
    const leftTexts = gsap.utils.toArray<HTMLElement>(
      leftCol.querySelectorAll(".wave-item"),
    );
    const rightTexts = gsap.utils.toArray<HTMLElement>(
      rightCol.querySelectorAll(".wave-item"),
    );
    if (!leftTexts.length || !rightTexts.length) return;

    // ── Wave helpers ──────────────────────────────────────────────────
    let amplitude = 0;
    const calcAmplitude = () => {
      // Very conservative — never pushes text outside its column
      amplitude = Math.min(wrapper.offsetWidth * 0.045, 45);
    };

    const getWaveX = (index: number, p: number, dir: 1 | -1) => {
      const phase =
        WAVE.waveNumber * index +
        WAVE.waveSpeed * p * Math.PI * 2 -
        Math.PI / 2;
      return ((Math.sin(phase) + 1) / 2) * amplitude * dir;
    };

    const setInitial = () => {
      leftTexts.forEach((_, i) =>
        gsap.set(leftTexts[i], { x: getWaveX(i, 0, 1) }),
      );
      rightTexts.forEach((_, i) =>
        gsap.set(rightTexts[i], { x: getWaveX(i, 0, -1) }),
      );
    };

    // ── Scroll update (called by scrubbed ScrollTrigger) ──────────────
    const n = LEFT_DATA.length; // hoisted so ScrollTrigger.create can use it
    const onUpdate = (self: ScrollTrigger) => {
      const p = self.progress;
      // Map progress evenly across all rows
      const focused = Math.min(Math.floor(p * n), n - 1);

      leftTexts.forEach((el, i) => {
        gsap.set(el, { x: getWaveX(i, p, 1) });
        el.dataset.focused = i === focused ? "true" : "false";
      });
      rightTexts.forEach((el, i) => {
        gsap.set(el, { x: getWaveX(i, p, -1) });
        el.dataset.focused = i === focused ? "true" : "false";
      });

      // ── Thumb Y: align centre of thumb to centre of focused row ──
      if (thumb) {
        const wRect = wrapper.getBoundingClientRect();
        const fRect = leftTexts[focused].getBoundingClientRect();
        const thumbH = thumb.offsetHeight;
        const wrapH = wrapper.offsetHeight;
        const targetY = fRect.top - wRect.top + fRect.height / 2 - thumbH / 2;
        const clampY = Math.max(0, Math.min(wrapH - thumbH, targetY));
        gsap.set(thumb, { y: clampY });
      }

      crossfadeTo(focused % LEFT_ITEMS.length);
    };

    calcAmplitude();
    setInitial();

    const resizeObs = new ResizeObserver(() => {
      calcAmplitude();
      setInitial();
      ScrollTrigger.refresh();
    });
    resizeObs.observe(section);

    // ── Pin the section so each item gets ~110px of scroll distance ──
    // This prevents the animation from flying by too fast at normal speed.
    const SCROLL_PER_ITEM = 110;
    const st = ScrollTrigger.create({
      trigger: section,
      pin: true,
      pinSpacing: true,
      start: "top top",
      end: `+=${n * SCROLL_PER_ITEM}`,
      scrub: 0.6, // 0.6s lag — feels weighty without being sluggish
      onUpdate,
    });

    return () => {
      st.kill();
      resizeObs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white"
    >
      {/* Label — same heading size as New Arrivals / Best Sellers */}
      <div className="max-w-screen-2xl mx-auto mb-6 md:mb-8 border-b border-zinc-100 pb-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-green-primary">
          The Collection
        </h2>
      </div>

      {/*
        ── Always 3-column grid (left | thumb | right) at every screen size.
        Never switches to 1-col or 2-col, so columns never stack top/bottom.
        On very small screens the font clamp and column sizing keep it tidy.
        The thumb is always visible — removed the hidden md:block breakpoint.
      */}
      <div
        ref={wrapperRef}
        className="max-w-screen-2xl mx-auto w-full"
        style={{
          display: "grid",
          // Centre column: tight on mobile, proportional on desktop
          gridTemplateColumns: "1fr clamp(80px, 12vw, 210px) 1fr",
          overflow: "hidden",
          position: "relative",
        }}
        aria-hidden="true"
      >
        {/* ── Left column ──────────────────────────────────────────── */}
        <div
          ref={leftColRef}
          className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 z-10"
          style={{ overflow: "hidden", minWidth: 0 }}
        >
          {LEFT_DATA.map((item, i) => (
            <div
              key={`l-${i}`}
              className="wave-item w-max font-clash-display
                         font-bold uppercase leading-[0.95] tracking-tight
                         text-zinc-200 transition-colors duration-200
                         data-[focused=true]:text-zinc-900"
              style={{ fontSize: "clamp(0.7rem, 2.6vw, 3.4rem)" }}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/*
          ── Centre column: relative container, thumb is absolutely positioned.
          GSAP sets `y` on thumbRef to track the focused row.
          The column is always visible on every screen size.
        */}
        <div className="relative" style={{ overflow: "visible" }}>
          <div
            ref={thumbRef}
            className="shadow-2xl overflow-hidden"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              margin: "0 auto",
              aspectRatio: "3/4",
              width: "clamp(78px, 11vw, 200px)",
            }}
          >
            <img
              ref={imgARef}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              alt="Collection preview"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ zIndex: 2 }}
            />
            <img
              ref={imgBRef}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              aria-hidden="true"
              style={{ zIndex: 1, opacity: 0 }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/65 backdrop-blur-sm px-2 py-1.5 z-10">
              <span
                ref={labelRef}
                className="text-white font-bold uppercase tracking-[0.2em]"
                style={{ fontSize: "clamp(7px, 0.9vw, 10px)" }}
              />
            </div>
          </div>
        </div>

        {/* ── Right column ─────────────────────────────────────────── */}
        <div
          ref={rightColRef}
          className="flex flex-col items-end gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 z-10"
          style={{ overflow: "hidden", minWidth: 0 }}
        >
          {RIGHT_DATA.map((item, i) => (
            <div
              key={`r-${i}`}
              className="wave-item w-max font-clash-display
                         font-bold uppercase leading-[0.95] tracking-tight
                         text-zinc-200 transition-colors duration-200
                         data-[focused=true]:text-zinc-900"
              style={{ fontSize: "clamp(0.7rem, 2.6vw, 3.4rem)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

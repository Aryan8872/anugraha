"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "T-Shirts",
    subtitle: "Everyday Essentials",
    count: "24 styles",
    href: "/tshirt",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    accent: "#1a2e1a", // dark green
  },
  {
    title: "Hoodies",
    subtitle: "Street & Comfort",
    count: "18 styles",
    href: "/hoodies",
    src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
    accent: "#0f1f0f",
  },
  {
    title: "Handbags",
    subtitle: "Carry The Craft",
    count: "12 styles",
    href: "/handbags",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    accent: "#2a1a0a",
  },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const overlaysRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Heading: words slide up from clip ─────────────────── */
      const words = headingRef.current?.querySelectorAll(".word");
      if (words && words.length > 0) {
        gsap.from(words, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          y: "105%",
          opacity: 0,
          stagger: 0.1,
          ease: "power4.out",
          duration: 0.9,
        });
      }

      /* ── Cards: clip-path reveal from bottom ──────────────── */
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Initial state — fully clipped (hidden from bottom)
        gsap.set(card, {
          clipPath: "inset(100% 0% 0% 0%)",
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power4.inOut",
          duration: 1.1,
          delay: i * 0.15,
        });
      });

      /* ── Overlay shimmer: label slides up on hover via GSAP ─ */
      overlaysRef.current.forEach((overlay) => {
        if (!overlay) return;
        const card = overlay.closest(".cat-card") as HTMLElement;
        const label = overlay.querySelector(".cat-label") as HTMLElement;
        const arrow = overlay.querySelector(".cat-arrow") as HTMLElement;

        if (!card || !label || !arrow) return;

        const enterTl = gsap.timeline({ paused: true });
        enterTl
          .to(label, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" })
          .to(
            arrow,
            { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.4)" },
            "-=0.2",
          );

        card.addEventListener("mouseenter", () => enterTl.play());
        card.addEventListener("mouseleave", () => enterTl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" bg-white">
      <div className="max-w-screen-2xl mx-auto">
        {/* ── Section Header ──────────────────────────────── */}
        <div
          ref={headingRef}
          className="mb-16 border-b border-zinc-100 pb-4 overflow-hidden"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-green-primary">
            <span className="word inline-block mr-3">Shop By</span>
            <span className="word inline-block">Category</span>
          </h2>
        </div>

        {/* ── Mobile swiper (< md) ─────────────────────────────────── */}
        <div className="md:hidden -mx-4 sm:-mx-8">
          <Swiper
            modules={[FreeMode, Pagination]}
            slidesPerView={1.2}
            spaceBetween={12}
            freeMode
            pagination={{ clickable: true }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            className="pb-10!"
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={cat.title}>
                <Link
                  href={cat.href}
                  className="cat-card group relative overflow-hidden cursor-pointer block"
                >
                  <div className="relative w-full aspect-3/4 overflow-hidden">
                    <Image
                      src={cat.src}
                      alt={cat.title}
                      fill
                      className="cat-img object-cover object-center scale-[1.06] group-hover:scale-[1.12] transition-all duration-[1.4s]"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="font-clash-display text-white text-4xl font-bold uppercase tracking-wider leading-none mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-white/70 text-[10px] font-semibold uppercase tracking-[0.25em]">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── Desktop grid (≥ md) ──────────────────────────────────── */}
        <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.title}
              href={cat.href}
              ref={(el) => {
                if (el) cardsRef.current[i] = el as unknown as HTMLDivElement;
              }}
              className="cat-card group relative overflow-hidden cursor-pointer block"
              style={{ willChange: "clip-path" }}
            >
              {/* Aspect ratio wrapper */}
              <div
                className={`relative w-full overflow-hidden ${
                  i === 1 ? "aspect-3/4" : "aspect-3/5"
                }`}
              >
                <Image
                  src={cat.src}
                  alt={cat.title}
                  fill
                  className="cat-img object-cover object-center grayscale-30 group-hover:grayscale-0 scale-[1.06] group-hover:scale-[1.12] transition-all duration-[1.4s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">
                    0{i + 1}
                  </span>
                </div>
                <div
                  ref={(el) => {
                    if (el) overlaysRef.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-end p-7"
                >
                  <h3 className="font-clash-display text-white text-4xl lg:text-5xl font-bold uppercase tracking-wider leading-none mb-2 drop-shadow-xl">
                    {cat.title}
                  </h3>
                  <div className="cat-label translate-y-6 opacity-0 flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-[10px] font-semibold uppercase tracking-[0.25em]">
                        {cat.subtitle}
                      </p>
                      <p className="text-white/50 text-[9px] uppercase tracking-[0.2em] mt-0.5">
                        {cat.count}
                      </p>
                    </div>
                    <div className="cat-arrow scale-75 opacity-0 w-11 h-11 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <MdArrowOutward className="text-lg" />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: "var(--green-primary, #2d6a2d)" }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* ── Browse All CTA ──────────────────────────────── */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/browse"
            className="inline-flex items-center gap-3 border border-zinc-900 text-zinc-900 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-900 hover:text-white transition-all duration-300"
          >
            Browse All Categories
            <MdArrowOutward className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}

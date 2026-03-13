"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { recentData } from "@/data/RecentTshirtData";
import ProductCard from "../common/ProductCard";
import { useRevealText } from "@/hooks/useRevealText";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function NewArrivals() {
  const displayArrivals = recentData.slice(0, 4);
  const headingRef = useRef<HTMLDivElement>(null);
  useRevealText(headingRef as React.RefObject<HTMLElement>, {
    start: "top 88%",
  });

  return (
    <section className="w-full">
      {/* Header */}
      <div
        ref={headingRef}
        className="flex justify-between items-center mb-8 md:mb-12 border-b border-zinc-100 pb-4"
      >
        <div className="overflow-hidden">
          <h2 className="reveal-line text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-green-primary">
            NEW ARRIVALS
          </h2>
        </div>
        <Link
          href="/collections"
          className="reveal-line border border-text-black text-text-black px-4 py-2.5 md:px-6 md:py-3 text-[9px] md:text-xs font-medium uppercase tracking-[0.1em] hover:bg-text-black hover:text-green-primary transition-all duration-300 cursor-pointer"
        >
          VIEW ALL
        </Link>
      </div>

      {/* ── Mobile swiper (< md) ────────────────────────────────────────── */}
      <div className="md:hidden -mx-4">
        <Swiper
          modules={[FreeMode, Pagination]}
          slidesPerView={1.3}
          spaceBetween={12}
          freeMode
          pagination={{ clickable: true }}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          className="!pb-10"
        >
          {displayArrivals.map((item, i) => (
            <SwiperSlide key={i}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Desktop grid (≥ md) ─────────────────────────────────────────── */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {displayArrivals.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

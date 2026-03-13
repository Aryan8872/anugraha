"use client";

import React, { useRef } from "react";
import ProductCard from "../common/ProductCard";
import { useRevealText } from "@/hooks/useRevealText";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const bestSellers = [
  {
    name: "Essentials Tee",
    price: "$55.00",
    image:
      "https://images.unsplash.com/photo-1624378441864-6da7ac195b05?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Modular Vest",
    price: "$140.00",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6cae4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Wide Trousers",
    price: "$95.00",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Classic Hoodie",
    price: "$110.00",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BestSellers() {
  const headingRef = useRef<HTMLDivElement>(null);
  useRevealText(headingRef as React.RefObject<HTMLElement>, {
    start: "top 88%",
  });

  return (
    <section className="w-full">
      {/* Header */}
      <div
        ref={headingRef}
        className="flex justify-between items-center mb-8 md:mb-12 border-b border-zinc-100 pb-4 overflow-hidden"
      >
        <div className="overflow-hidden">
          <h2 className="reveal-line text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-green-primary">
            BESTSELLERS
          </h2>
        </div>
        <button className="reveal-line border border-text-black text-text-black px-4 py-2.5 md:px-6 md:py-3 text-[9px] md:text-xs font-medium uppercase tracking-[0.1em] hover:bg-text-black hover:text-green-primary transition-all duration-300 cursor-pointer">
          VIEW ALL
        </button>
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
          {bestSellers.map((item, i) => (
            <SwiperSlide key={i}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Desktop grid (≥ md) ─────────────────────────────────────────── */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {bestSellers.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

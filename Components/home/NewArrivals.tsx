import React from "react";
import Image from "next/image";
import Link from "next/link";
import { recentData } from "@/data/RecentTshirtData";

export default function NewArrivals() {
  // Using only the first 4 items for the homepage grid
  const displayArrivals = recentData.slice(0, 4);

  return (
    <section className="w-full">
      {/* Header Styled based on Reference Image */}
      <div className="flex justify-between items-center mb-8 md:mb-12 border-b border-zinc-100 pb-4">
        <h2 className="font-clash-display text-4xl md:text-5xl lg:text-6xl uppercase font-light tracking-tighter text-text-black">
          NEW ARRIVALS
        </h2>
        <Link
          href="/collections"
          className="border border-text-black text-text-black px-6 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] hover:bg-text-black hover:text-white transition-all duration-300 cursor-pointer"
        >
          VIEW ALL COLLECTION
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {displayArrivals.map((item, i) => (
          <Link
            key={i}
            href={`/product/${item.slug || "graphity-print"}`}
            className="group cursor-pointer flex flex-col w-full relative"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden bg-[#f5f5f5] mb-4 shadow-sm transition-all duration-700">
              {/* Product Info Labels - Mirroring the reference image top alignment */}
              <div className="absolute top-0 left-0 right-0 p-4 z-10 flex justify-between items-start">
                <h3 className="text-[10px] font-medium uppercase tracking-tight text-text-black max-w-[70%]">
                  {item.name}
                </h3>
                <p className="text-[10px] font-medium text-text-black">
                  {item.price}
                </p>
              </div>

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-8 md:p-12 mix-blend-multiply transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

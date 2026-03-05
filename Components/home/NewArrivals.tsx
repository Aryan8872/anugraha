import React from "react";
import Image from "next/image";
import Link from "next/link";
import { recentData } from "@/data/RecentTshirtData";
import ProductCard from "../common/ProductCard";

export default function NewArrivals() {
  const displayArrivals = recentData.slice(0, 4);

  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-8 md:mb-12 border-b border-zinc-100 pb-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium  text-green-primary">
          NEW ARRIVALS
        </h2>
        <Link
          href="/collections"
          className="border border-text-black text-text-black px-6 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] hover:bg-text-black hover:text-green-primary transition-all duration-300 cursor-pointer"
        >
          VIEW ALL COLLECTION
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {displayArrivals.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

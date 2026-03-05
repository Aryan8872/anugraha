"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductCard from "../common/ProductCard";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { recentData } from "@/data/RecentTshirtData";

const SORT_OPTIONS = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

export default function ProductSection() {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

  const totalCount = recentData.length;

  return (
    <div className="flex flex-col gap-5">
      {/* Search */}
      <SearchBar />

      {/* Filter bar + Sort row */}
      <div className="flex items-center justify-between">
        <FilterBar />
        {/* Sort dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortOpen((prev) => !prev)}
            className="flex items-center gap-2 border border-text-black text-text-black px-3 sm:px-6 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] cursor-pointer transition-colors duration-200 hover:bg-text-black hover:text-green-primary"
          >
            {sortBy.label}
            <MdKeyboardArrowDown
              className={`text-lg transition-transform duration-300 ${sortOpen ? "rotate-180" : ""}`}
            />
          </button>
          {sortOpen && (
            <div className="absolute top-full right-0 min-w-full bg-white border border-text-black text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] z-20">
              {SORT_OPTIONS.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    setSortBy(opt);
                    setSortOpen(false);
                  }}
                  className={`px-4 py-2.5 cursor-pointer whitespace-nowrap transition-all duration-200 ${
                    sortBy.value === opt.value
                      ? "bg-text-black text-green-primary"
                      : "hover:bg-text-black hover:text-green-primary"
                  }`}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Result count */}
      <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-black/40">
        Showing {totalCount} products
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {recentData.map((item: any, i: number) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

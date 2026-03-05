"use client";

import { useState } from "react";

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { name: "All", count: 42 },
    { name: "T-Shirts", count: 12 },
    { name: "Hoodies", count: 8 },
    { name: "Jackets", count: 6 },
    { name: "Sweatshirts", count: 10 },
    { name: "Accessories", count: 6 },
  ];

  return (
    <div className="sticky left-0 top-20 h-screen flex flex-col gap-1 pt-1">
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-text-black/40 mb-3">
        Categories
      </p>
      {categories.map((item, i) => {
        const isActive = activeCategory === item.name;
        return (
          <button
            key={i}
            onClick={() => setActiveCategory(isActive ? null : item.name)}
            className={`group flex items-center justify-between w-full py-1.5 text-left transition-all duration-300 ${
              isActive ? "text-green-primary" : "text-text-black"
            }`}
          >
            <span className="relative text-[10px] font-medium uppercase tracking-[0.1em]">
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-px bg-green-primary transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </span>
            <span
              className={`text-[9px] font-medium border px-1.5 py-0.5 transition-all duration-300 ${
                isActive
                  ? "bg-text-black text-green-primary border-text-black"
                  : "border-text-black/20 text-text-black/40 group-hover:border-text-black/60 group-hover:text-text-black"
              }`}
            >
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

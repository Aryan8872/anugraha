"use client";

import { useState } from "react";

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function SizeSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
          Select Size
        </span>
        <span className="text-[10px] uppercase tracking-wider underline cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
          Size Guide
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`h-10 w-14 text-xs font-medium border transition-all duration-200 ${
              selected === size
                ? "bg-text-black text-white border-text-black"
                : "border-black/10 hover:border-black text-text-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

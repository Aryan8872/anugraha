"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
        Quantity
      </span>
      <div className="flex items-center border border-black/10 w-fit">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-10 h-10 flex items-center justify-center hover:bg-black/5 transition-colors"
        >
          <FaMinus size={8} />
        </button>
        <span className="w-10 text-center text-sm font-medium">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="w-10 h-10 flex items-center justify-center hover:bg-black/5 transition-colors"
        >
          <FaPlus size={8} />
        </button>
      </div>
    </div>
  );
}

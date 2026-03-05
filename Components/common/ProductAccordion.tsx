"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ACCORDIONS = [
  {
    label: "Product Details",
    content:
      "Premium 240 GSM heavy cotton tee. Featuring a minimalist 'God's Plan' typography on the chest. Designed for a slightly oversized, modern fit.",
  },
  {
    label: "Material & Care",
    content:
      "100% Organic Cotton. Cold machine wash inside out. Do not tumble dry. Iron on low heat avoiding the print area.",
  },
  {
    label: "Shipping & Returns",
    content:
      "Dispatched within 24–48 hours. Free standard shipping nationwide. Easy 7-day returns if the fit isn't right.",
  },
];

export default function ProductAccordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col border-t border-black/5">
      {ACCORDIONS.map((item, i) => (
        <div key={i} className="border-b border-black/5">
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full flex justify-between items-center py-4 group"
          >
            <span className="text-[11px] uppercase tracking-[0.15em] font-medium group-hover:pl-1 transition-all">
              {item.label}
            </span>
            <span className="opacity-40">
              {active === i ? <FaMinus size={8} /> : <FaPlus size={8} />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${active === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="text-[12px] leading-relaxed text-black/60 max-w-[90%]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProductDetail() {
  const [active, setActive] = useState<number | null>(null);

  const handelDropdownClick = (id: number) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="flex flex-col gap-6 min-h-screen text-text-black pb-20 max-w-[1400px] mx-auto px-4">
      {/* Breadcrumbs - Elegant & Minimal */}
      <div className="flex gap-2 text-[10px] uppercase tracking-[0.2em] opacity-40 mt-4">
        <span>Home</span> / <span>T-Shirts</span> / <span>God&apos;s Plan</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {/* Left: Product Image - More space & cleaner BG */}
        <div className="relative h-[55vh] lg:h-[75vh] w-full bg-[#f9f9f9] border border-black/[0.03] flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full p-12 transition-transform duration-700 hover:scale-105">
            <Image
              src={"/tshirts/godsplan/godsplan1.jpg"}
              alt="God's Plan T-Shirt"
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </div>

        {/* Right: Product Details - Sliped & Classy */}
        <div className="flex flex-col gap-8 lg:pt-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-clash-display text-4xl lg:text-5xl font-medium uppercase leading-[1.1] tracking-tight">
              God&apos;s Plan <br />{" "}
              <span className="opacity-50">Classic Tee</span>
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="font-clash-display text-2xl font-light">
                Rs 987
              </span>
              <span className="text-[10px] uppercase tracking-widest bg-black text-white px-2 py-0.5 ml-2">
                New Arrival
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="font-clash-display text-[10px] uppercase tracking-[0.15em] opacity-60">
                Select Size
              </span>
              <span className="text-[10px] uppercase tracking-wider underline cursor-pointer opacity-40 hover:opacity-100">
                Size Guide
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className="flex font-clash-display items-center justify-center border border-black/10 hover:border-black transition-all duration-300 cursor-pointer h-10 w-14 text-sm"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex gap-3 w-full">
              <button className="flex-1 bg-text-black text-white py-3.5 px-6 uppercase font-clash-display text-xs font-medium tracking-[0.2em] hover:bg-black/90 transition-all active:scale-[0.98]">
                Add to Cart
              </button>
              <div className="border border-black/10 flex items-center justify-center w-14 cursor-pointer hover:border-black transition-colors">
                <FaPlus size={10} className="opacity-60" />
              </div>
            </div>
            <button className="w-full border border-black/10 py-3.5 px-6 uppercase font-clash-display text-xs font-medium tracking-[0.2em] hover:border-black transition-all active:scale-[0.98]">
              Instant Checkout
            </button>
          </div>

          <div className="flex flex-col mt-10 border-t border-black/[0.05]">
            {[
              {
                id: 0,
                label: "Product Details",
                content:
                  "Premium 240 GSM heavy cotton tee. Featuring a minimalist 'God's Plan' typography on the chest. Designed for a slightly oversized, modern fit.",
              },
              {
                id: 1,
                label: "Material & Care",
                content:
                  "100% Organic Cotton. Cold machine wash inside out. Do not tumble dry. Iron on low heat avoiding the print area.",
              },
              {
                id: 2,
                label: "Shipping & Returns",
                content:
                  "Dispatched within 24-48 hours. Free standard shipping nationwide. Easy 7-day returns if the fit isn't right.",
              },
            ].map((item) => (
              <div key={item.id} className="border-b border-black/[0.05]">
                <div
                  onClick={() => handelDropdownClick(item.id)}
                  className="flex flex-row justify-between items-center py-4 cursor-pointer group"
                >
                  <span className="text-[11px] uppercase tracking-[0.15em] font-medium group-hover:pl-1 transition-all">
                    {item.label}
                  </span>
                  <span className="transition-transform duration-500 opacity-40">
                    {active === item.id ? (
                      <FaMinus size={8} />
                    ) : (
                      <FaPlus size={8} />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${active === item.id ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="font-clash-display text-[12px] leading-relaxed text-black/60 max-w-[90%]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

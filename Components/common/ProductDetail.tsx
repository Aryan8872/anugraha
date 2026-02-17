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
    <div className="flex flex-col gap-10 min-h-screen text-text-black pb-20">
      {/* Breadcrumbs - can be made dynamic later */}
      <div className="flex gap-2 text-sm uppercase tracking-wider opacity-60">
        <span>Home</span> / <span>T-Shirts</span> / <span>God&apos;s Plan</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
        {/* Left: Product Image (Sticky on Desktop) */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-[85vh] w-full bg-[#f4f4f4] flex items-center justify-center">
          <div className="relative w-full h-full p-10">
            <Image
              src={"/tshirts/godsplan/godsplan1.jpg"}
              alt="God's Plan T-Shirt"
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-10 lg:pt-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-clash-display text-5xl  font-medium uppercase leading-[0.9] tracking-tight">
              God&apos;s Plan <br /> T-Shirt
            </h1>
            <span className="font-clash-display text-3xl font-medium mt-2">
              Rs 987
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-clash-display text-sm uppercase tracking-wider opacity-80">
              Select Size
            </span>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className="flex font-clash-display items-center justify-center border border-black/80 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer h-12 w-20 text-lg"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4 w-full">
              <button className="flex-1 bg-green-primary text-text-black py-4 px-6 uppercase font-clash-display font-semibold tracking-wider hover:bg-[#a3d681] transition-colors">
                Add to Cart
              </button>
              <div className="border border-black/20 flex items-center justify-center w-16 cursor-pointer hover:bg-gray-50">
                <span className="text-xl">
                  <FaPlus size={14} />
                </span>
              </div>
            </div>
            <button className="w-full border border-black py-4 px-6 uppercase font-clash-display font-semibold tracking-wider hover:bg-black hover:text-white transition-colors">
              Buy Now
            </button>
          </div>

          <div className="flex flex-col gap-0 mt-8 border-t border-black/10">
            {[
              {
                id: 0,
                label: "Details",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum incidunt, tempora ipsam ex similique obcaecati!",
              },
              {
                id: 1,
                label: "Description",
                content:
                  "Crafted from premium cotton, this t-shirt features a bold graphic print that stands out. Perfect for casual wear.",
              },
              {
                id: 2,
                label: "Delivery & Returns",
                content:
                  "Free shipping on orders over Rs 2000. Returns accepted within 14 days of purchase.",
              },
            ].map((item) => (
              <div key={item.id} className="border-b border-black/10">
                <div
                  onClick={() => handelDropdownClick(item.id)}
                  className="flex flex-row justify-between items-center py-5 cursor-pointer group"
                >
                  <span className="uppercase font-clash-display font-medium tracking-wide group-hover:opacity-70 transition-opacity">
                    {item.label}
                  </span>
                  <span className="transition-transform duration-300">
                    {active === item.id ? (
                      <FaMinus size={12} />
                    ) : (
                      <FaPlus size={12} />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${active === item.id ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="font-clash-display text-sm leading-relaxed text-black/80">
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

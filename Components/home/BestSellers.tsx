import React from "react";
import Image from "next/image";
import ProductCard from "../common/ProductCard";

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
  return (
    <section className="w-full">
      {/* Header Styled based on Reference Image */}
      <div className="flex justify-between items-center mb-8 md:mb-12 border-b border-zinc-100 pb-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-green-primary">
          BESTSELLERS
        </h2>
        <button className="border border-text-black text-text-black px-6 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] hover:bg-text-black hover:text-green-primary transition-all duration-300 cursor-pointer">
          VIEW ALL COLLECTION
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {bestSellers.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

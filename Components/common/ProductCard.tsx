"use client"
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }: { item: any }) {
  return (
    <Link
      href={`/product/${item.slug || "graphity-print"}`}
      className="group cursor-pointer flex flex-col w-full relative"
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-[#f5f5f5] mb-4 shadow-sm">
        {/* Name & Price overlay at top */}
        <div className="absolute top-0 left-0 right-0 p-4 z-10 flex justify-between items-start">
          <h3 className="text-[10px] font-medium uppercase tracking-tight text-text-black max-w-[70%]">
            {item.name}
          </h3>
          <p className="text-[10px] font-medium text-text-black">
            {item.price}
          </p>
        </div>

        {/* Product Image */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-8 md:p-12 mix-blend-multiply transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

        {/* Quick Add button — slides up from bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              // TODO: hook up to cart logic
            }}
            className="w-full bg-text-black text-green-primary text-[10px] font-semibold uppercase tracking-[0.15em] py-3 hover:bg-green-primary hover:text-text-black transition-colors duration-200"
          >
            + Quick Add
          </button>
        </div>
      </div>
    </Link>
  );
}

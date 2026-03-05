"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ProductImageGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-3 h-[55vh] lg:h-[75vh]">
      {/* Thumbnails */}
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:w-24 shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative shrink-0 w-16 h-16 lg:w-full lg:h-20 bg-[#f5f5f5] border-2 transition-all duration-200 overflow-hidden ${
              activeIndex === i
                ? "border-text-black"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-contain p-1.5 mix-blend-multiply"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 bg-[#f9f9f9] overflow-hidden group">
        <Image
          src={images[activeIndex]}
          alt="Product"
          fill
          priority
          className="object-contain p-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

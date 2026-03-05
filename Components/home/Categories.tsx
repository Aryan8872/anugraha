import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const CategoriesData = [
  {
    title: "Outerwear",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJZByEhKyz3Q8Eug8F4x89XTekCBGPFE42TBlQ6zjRXjdKyr6SL4m8i370HaSDkIgdVt_C8CpymVO-8Gk5qp22Zr3rafzNZoEKgW5PVfwwzRBbzAorfTQB_27v7defSKgdphzm49l7umGWGSeyvX-k7HX0H-EvUKFv8E7mGlxkVnERATh7nBFptQfJH4sdr77WEGAmYXG6LbhAo-XRRT0YpWvvxqDmtxvtRzlJht5VX9iFxslU1-a5VpgR96dbuQUxt81EBgq8rdU",
    classes: "",
  },
  {
    title: "Bottoms",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-YN3a0EqT_N3rgqpTS_pxCDYbGdJ2sGT8pRT_-UkzMkxanDAYlt_XVRjec0w8HyPe37VmiV92WRvdNJF-YwZ4VZ_K34Qi2Xufgocxx8F-r5hblEiBk_GzQj4gfuuaVowBuGF8lf8aUdI6DmdL9bl1LOIg41Z7UIu-2fLQTTUt7lOo7eMY7dYC-cGnPcMI-wACd7MPQWPOAB7l7fvHu5CqA2uNdncfHWcUVf3xpeexwS63x8d7T6pINAfmcW66N7YC6vB1VL9HwvM",
    classes: "lg:mt-24", // Staggered masonry look
  },
  {
    title: "Accessories",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlCCHNS5cKZQy-jjeTqmiKIg4X8_yW0PXJKuIPQvFne3B9sRjzuDaEw87TBDSOMq5fFlZMi4YBIV5yLIenMlfkat9cxgz9H18YEX8JjNpuB6zWABfbCd5sh-zbNv1DLGRUNsrsF3lBIyRdc7KV6BpPjGwrAMK-8xPA-jfZR2K-XlGps4L00XIYCjRQ6U7XyribVEXwMOF-Y3j1xH99EYYm4BMka46rYHq-awiusSL9kggD7uFFzRXMF7y9tFFHUtLW3FsH9UJaTic",
    classes: "",
  },
];

export default function Categories() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-zinc-400"></span>
              Collections
            </span>
            <h2 className="font-clash-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-wider leading-none">
              Shop By
              <br />
              Category
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-[120vh] md:h-[60vh] lg:h-[75vh]">
          {CategoriesData.map((cat, idx) => (
            <div
              key={idx}
              className={`relative group h-full overflow-hidden cursor-pointer rounded-2xl ${cat.classes}`}
            >
              <Image
                alt={cat.title}
                fill
                className="object-cover grayscale brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.8] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                src={cat.src}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="font-clash-display text-white text-5xl lg:text-6xl font-medium uppercase tracking-widest leading-tight mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500 drop-shadow-xl z-20">
                  {cat.title}
                </h3>
              </div>

              <div className="absolute inset-x-8 bottom-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1">
                  Explore
                </span>
                <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <MdArrowOutward className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

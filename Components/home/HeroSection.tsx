import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-[100dvh] min-h-[600px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-zinc-900 group -mt-[80px] lg:-mt-[120px]">
      <Image
        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2560&auto=format&fit=crop"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-[center_35%] opacity-80 saturate-50 transform group-hover:scale-105 transition-transform duration-[5s] ease-out"
      />

      {/* Subtle overlay gradient to make text pop beautifully */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:px-12 md:p-12 pt-32 lg:pt-48 z-10 w-full h-full">
        {/* Top minimal header */}
        <div className="flex justify-between items-start text-white/80 text-[10px] md:text-sm uppercase tracking-[0.2em] font-semibold w-full mt-4">
          <p>AW24 Collection</p>
          <p>Est. 2024</p>
        </div>

        {/* Center massive typographic piece */}
        <div className="flex flex-col items-center justify-center flex-1 text-white w-full">
          <h1 className="font-clash-display text-center text-[clamp(4.5rem,18vw,14rem)] leading-[0.8] font-medium uppercase tracking-widest drop-shadow-2xl">
            Anugraha
          </h1>
          <p className="mt-6 md:mt-10 font-bold text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/90 max-w-lg text-center drop-shadow-md">
            Defining contemporary silence
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-auto pb-12 w-full">
          <button className="bg-white text-black px-10 py-5 rounded-full text-xs uppercase font-bold tracking-[0.2em] hover:bg-black hover:text-white hover:border-white border border-transparent transition-all duration-300 shadow-xl cursor-pointer">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}

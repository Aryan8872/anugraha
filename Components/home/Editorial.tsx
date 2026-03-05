import React from "react";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

export default function Editorial() {
  return (
    <section className="w-full">
      <div className="w-full bg-primary-bg rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 overflow-hidden relative shadow-sm">
        {/* Background text to create a very premium editorial feel */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none w-full text-center overflow-hidden hidden md:block">
          <h2 className="font-clash-display text-[16vw] leading-none uppercase whitespace-nowrap text-black font-medium tracking-tight">
            Anugraha
          </h2>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 text-zinc-500 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-zinc-400"></span> Editorial
          </span>
          <h2 className="font-clash-display text-5xl md:text-7xl lg:text-8xl uppercase font-medium tracking-widest mb-10 leading-[0.9] text-text-black">
            The
            <br />
            Process
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-zinc-600 mb-12 max-w-md font-light">
            Minimalist aesthetic meets high-end street culture. We strip away
            the unnecessary, leaving only the pure essence of form and function.
            Discover the brutalist textures that define the AW24 collection.
          </p>
          <button className="bg-text-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] group cursor-pointer flex items-center gap-2">
            Read Journal{" "}
            <MdArrowRightAlt className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative aspect-square md:aspect-4/5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden z-10 shadow-2xl group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200&auto=format&fit=crop"
            alt="Editorial"
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] saturate-50 group-hover:saturate-100"
          />
        </div>
      </div>
    </section>
  );
}

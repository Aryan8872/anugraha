import React from "react";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

export default function Journal() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 mb-4 uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-zinc-400"></span>
              Insights
            </span>
            <h2 className="font-clash-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-wider leading-none">
              From The
              <br />
              Journal
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex text-xs uppercase font-bold tracking-[0.2em] border-b border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors items-center gap-2"
          >
            View All Stories <MdArrowForward className="text-sm" />
          </a>
        </div>

        <div className="relative w-full aspect-square sm:aspect-video lg:aspect-[21/9] overflow-hidden group cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700">
          <Image
            alt="Journal Entry"
            fill
            className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-[0.5] transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsy4ojQhURuQSC7t1OSJ8KhUHzUiYjZd-pzau2j1lpRsppABtasG6zYeyaWidebUHy88DXlPcAFTJBaXMlgT5wrKJd9W9FiVeYtuxOaWZzGNtX_n1DkAkOH2CCJAE98gRU911gn1QaFKRlOlKQlhlsWmyEqHofkXk1hYcJq7gmVL4gTQJeAeI2EGYW0G5VPWIo2Qn5iEqrAYxAHvtCbyhATIMhVXWpoaEpJri5MHkIEGAUnpv1Lma-QV8J120p2bAwc87js2aPGGU"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>

          <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-16 max-w-3xl text-white flex flex-col justify-end h-full">
            <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] mb-6 w-fit border border-white/20">
              Process
            </span>
            <h3 className="font-clash-display text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-wider mb-6 leading-[0.9] drop-shadow-lg">
              The Art of
              <br />
              Subtraction
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-light text-gray-200 mb-8 max-w-lg leading-relaxed drop-shadow-md">
              How removing the non-essential allows the true form to emerge. A
              deep dive into our design philosophy for the Summer 24 collection.
            </p>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1 w-fit group-hover:border-zinc-300 group-hover:text-zinc-300 transition-colors">
              Read Article{" "}
              <MdArrowForward className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </div>
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <a
            href="#"
            className="text-xs uppercase font-bold tracking-[0.2em] border-b border-black pb-1 flex items-center gap-2"
          >
            View All Stories <MdArrowForward className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}

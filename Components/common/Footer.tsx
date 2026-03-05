import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-20 lg:py-32 px-6 sm:px-12 mt-auto overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16 lg:gap-24">
        {/* Massive Logomark Background */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full border-b border-white/10 pb-16 lg:pb-24">
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <h2 className="font-clash-display text-4xl sm:text-5xl uppercase font-medium tracking-widest text-white">
              Anugraha
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light text-zinc-400">
                Laxmipur, Kankai-01, Jhapa
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light text-zinc-400 hover:text-white transition-colors cursor-pointer">
                joelghale@gmail.com
              </span>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 mb-2">
                Menu
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Home
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                About
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Gallery
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Contact
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 mb-2">
                Support
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Cart
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Wishlist
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Account
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit">
                Privacy Policy
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 mb-2">
                Social
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit flex items-center gap-2">
                Instagram
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit flex items-center gap-2">
                Facebook
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit flex items-center gap-2">
                X
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-zinc-400 transition-colors cursor-pointer w-fit flex items-center gap-2">
                Whatsapp
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 w-full">
          <span className="flex gap-2 text-zinc-500 font-light text-[10px] sm:text-xs uppercase tracking-[0.2em] items-center">
            Anugraha <BiCopyright className="text-sm" />{" "}
            {new Date().getFullYear()} All Rights Reserved.
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-white/50">
            Silence In Motion
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

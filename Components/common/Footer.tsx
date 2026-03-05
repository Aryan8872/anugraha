import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-text-black text-white py-20 lg:py-32 px-6 sm:px-12 mt-auto overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16 lg:gap-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full border-b border-white/10 pb-16 lg:pb-24">
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <h2 className="font-clash-display text-4xl sm:text-5xl uppercase font-medium tracking-widest text-green-primary">
              Anugraha
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light text-zinc-400">
                Laxmipur, Kankai-01, Jhapa
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light text-zinc-400 hover:text-green-primary transition-colors cursor-pointer">
                joelghale@gmail.com
              </span>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-green-primary mb-2">
                Menu
              </span>
              {["Home", "About", "Gallery", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-green-primary transition-colors cursor-pointer w-fit"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-green-primary mb-2">
                Support
              </span>
              {["Cart", "Wishlist", "Account", "Privacy Policy"].map((item) => (
                <span
                  key={item}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-green-primary transition-colors cursor-pointer w-fit"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-green-primary mb-2">
                Social
              </span>
              {["Instagram", "Facebook", "X", "Whatsapp"].map((item) => (
                <span
                  key={item}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light hover:text-green-primary transition-colors cursor-pointer w-fit"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 w-full">
          <span className="flex gap-2 text-zinc-500 font-light text-[10px] sm:text-xs uppercase tracking-[0.2em] items-center">
            Anugraha © {new Date().getFullYear()} All Rights Reserved.
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-green-primary">
            Silence In Motion
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

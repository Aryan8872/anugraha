"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const [card1, card2, card3] = cardsRef.current;
      const intro = introRef.current;

      // --- INITIAL POSITIONS (VISIBLE STRIPS) ---
      gsap.set(intro, { left: "0%", width: "50%", xPercent: 0, zIndex: 0 });
      gsap.set(card1, { left: "50%", width: "50%", xPercent: 0, zIndex: 10 });

      // Card 2: Starts at 84%, overlapping Card 1
      gsap.set(card2, { left: "84%", width: "50%", xPercent: 0, zIndex: 20 });

      // Card 3: Starts at 92%, overlapping Card 2 (Both visible initially)
      gsap.set(card3, { left: "92%", width: "50%", xPercent: 0, zIndex: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=4500", // Adjusted scroll length
          scrub: 1,
          pin: true,
        },
      });

      /* ============================
         PHASE 1: PIKKO & INTRO EXIT, UBAC ENTERS
      ============================ */
      // Intro moves -50vw (xPercent -100)
      tl.to(intro, { xPercent: -100, ease: "none", duration: 1 }, "phase1");

      // Card 1 moves -50vw (xPercent -100) -> Lands at 0
      tl.to(card1, { xPercent: -100, ease: "none", duration: 1 }, "phase1");

      // Card 2 moves -34vw (xPercent -68) -> Lands at 50%
      tl.to(card2, { xPercent: -68, ease: "none", duration: 1 }, "phase1");

      // Card 3 moves -8vw (xPercent -16) -> Lands at 84% (New Strip Position)
      tl.to(card3, { xPercent: -16, ease: "none", duration: 1 }, "phase1");

      // Reveal Ubac Content
      tl.to(
        card2.querySelector(".content-wrapper"),
        { opacity: 1, duration: 0.3 },
        "phase1+=0.5",
      );

      /* ============================
         PHASE 2: UBAC EXITS, SANCTUARY ENTERS
      ============================ */
      // Card 1 moves another -50vw (Total -200%) -> Lands at -50%
      tl.to(card1, { xPercent: -200, ease: "none", duration: 1 }, "phase2");

      // Card 2 moves another -50vw (Total -168%) -> Lands at 0
      tl.to(card2, { xPercent: -168, ease: "none", duration: 1 }, "phase2");

      // Card 3 moves -42vw (Total -84%) -> Lands at 50%
      tl.to(card3, { xPercent: -84, ease: "none", duration: 1 }, "phase2");

      // Reveal Sanctuary Content
      tl.to(
        card3.querySelector(".content-wrapper"),
        { opacity: 1, duration: 0.3 },
        "phase2+=0.5",
      );

      /* ============================
         PHASE 3: DEPTH SCALE
      ============================ */
      tl.to(
        [intro, card1, card2, card3],
        {
          scale: 0.95,
          transformOrigin: "center center",
          ease: "power1.inOut",
          duration: 0.3,
        },
        "phase3",
      );

      /* ============================
         PARALLAX
      ============================ */
      const images = cardsRef.current.map((c) =>
        c?.querySelector(".inner-img"),
      );
      tl.to(images, { xPercent: 15, ease: "none", duration: 2.3 }, 0);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {/* INTRO PANEL */}
      <div
        ref={introRef}
        className="absolute top-0 h-full bg-[#f2f2f2] text-black z-30 flex flex-col justify-between p-12 overflow-hidden border-r border-black/10"
      >
        <div className="flex gap-6 uppercase text-sm tracking-widest font-bold">
          <span>.Browse</span>
          <span>.Gallery</span>
          <span>.Contact</span>
          <span>.About</span>
        </div>
        <div>
          <h1 className="text-8xl font-black mb-6 tracking-tighter">
            ANUGRAHA
          </h1>
          <p className="max-w-md text-lg opacity-70 leading-relaxed font-medium">
            Precision-driven web experiences inspired by motion, clarity, and
            brutal simplicity.
          </p>
        </div>
        <div className="uppercase text-xs font-bold tracking-widest opacity-40">
          Est. 2024
        </div>
      </div>

      {/* CARD 1 (Project 1) */}
      <div
        ref={(el) => {
          if (el) cardsRef.current[0] = el;
        }}
        className="absolute top-0 h-full overflow-hidden bg-[#fbbf24] z-20 will-change-[left,width]"
      >
        <div
          className="inner-img absolute inset-0 w-[120%] h-full bg-cover bg-center -ml-[10%]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2560&auto=format&fit=crop)",
          }}
        ></div>
        <div className="absolute bottom-12 left-12 content-wrapper">
          <h2 className="text-6xl font-bold text-white mix-blend-difference">
            PIKKO
          </h2>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* CARD 2 (Project 2 - Strip) */}
      <div
        ref={(el) => {
          if (el) cardsRef.current[1] = el;
        }}
        className="absolute top-0 h-full overflow-hidden bg-[#d97706] z-10 will-change-[left,width] border-l border-white/20"
      >
        <div
          className="inner-img absolute inset-0 w-[120%] h-full bg-cover bg-center -ml-[10%]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2560&auto=format&fit=crop)",
          }}
        ></div>
        <div className="absolute bottom-12 left-12 content-wrapper opacity-0">
          <h2 className="text-6xl font-bold text-white mix-blend-difference">
            UBAC
          </h2>
        </div>
      </div>

      {/* CARD 3 (Project 3 - Offscreen) */}
      <div
        ref={(el) => {
          if (el) cardsRef.current[2] = el;
        }}
        className="absolute top-0 h-full overflow-hidden bg-[#92400e] z-0 will-change-[left,width] border-l border-white/20"
      >
        <div
          className="inner-img absolute inset-0 w-[120%] h-full bg-cover bg-center -ml-[10%]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560&auto=format&fit=crop)",
          }}
        ></div>
        <div className="absolute bottom-12 left-12 content-wrapper opacity-0">
          <h2 className="text-6xl font-bold text-white mix-blend-difference">
            SANCTUARY
          </h2>
        </div>
      </div>
    </section>
  );
}

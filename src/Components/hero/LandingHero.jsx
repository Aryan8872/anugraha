import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import tshirt from "/categories/t-shirt.png";
import hoodies from "/categories/hoodie.png";
import handbag from "/categories/handbag.png";
import actionfig from "/categories/action-figures.jpg";

const LandingHero = () => {
  const containerRef = useRef(null);
  const logoContainerRef = useRef(null);
  const categoryContainerRef = useRef(null);
  const categorySlide1 = useRef(null);
  const categorySlide2 = useRef(null);
  const categorySlide3 = useRef(null);
  const categorySlide4 = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.set(
      [text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current],
      {
        opacity: 0,
        scale: 0.9,
        rotationY: 90,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }
    );

    const E = {
      inOut: "power2.inOut",
      out: "power3.out",
      pop: "back.out(1.6)",
      in: "power2.in",
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000", // slower animation (increased distance)
        scrub: 2.5, // smoother + slower reaction
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    // --- PHASE 1 ---
    tl.addLabel("phase1")
      .to(
        logoContainerRef.current,
        { xPercent: -105, duration: 1.2, ease: E.out },
        "phase1"
      )
      .to(
        categoryContainerRef.current,
        { width: "100%", marginLeft: "0px", duration: 0.4, ease: E.out },
        "<"
      )
      .to(
        categorySlide1.current,
        { flex: 0.7, duration: 0.3, ease: E.inOut },
        "<"
      )
      .to(
        text1Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "<"
      )

      .to(
        categorySlide1.current,
        { flex: 0, duration: 1, ease: E.inOut },
        "phase1+=0.5"
      )
      .to(
        text2Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "<"
      )
      .to(
        categorySlide2.current,
        { flex: 0.7, duration: 0.5, ease: E.inOut },
        "<"
      )
      .to(
        categorySlide3.current,
        { flex: 0.3, duration: 0.5, ease: E.inOut },
        "<"
      )
      .to(
        categorySlide4.current,
        { flex: 0.3, duration: 0.5, ease: E.inOut },
        "<"
      )

      .to(
        categorySlide3.current,
        { flex: 0.6, duration: 1.5, ease: E.inOut },
        ">"
      )

      .to(
        categorySlide2.current,
        { flex: 0, duration: 1, ease: E.inOut },
        "<+=0.2"
      )
      .to(
        categorySlide4.current,
        { flex: 0.4, duration: 0.3, ease: E.inOut },
        "<"
      )

      .to(
        text3Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "<"
      )
      .to(
        text4Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  const socialmediaData = [
    { socialmedia: "Facebook", link: "", icon: "/icons/facebook.webp" },
    { socialmedia: "Instagram", link: "", icon: "/icons/instagram.webp" },
    { socialmedia: "X", link: "", icon: "/icons/x.webp" },
    { socialmedia: "Whatsapp", link: "", icon: "/icons/whatsapp.webp" },
  ];

  return (
    <div className="hero-wrapper">
      <div ref={containerRef} className="container-hero-wrapper">
        <div className="container-hero flex w-full h-full relative overflow-hidden">
          <div
            ref={logoContainerRef}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center bg-[#F1EFEB] px-3 z-10"
          >
            <span className="absolute top-16  text-black text-4xl sm:text-5xl font-dew-expanded-bold w-[60%] md:w-[32%] xl:w-[28%]">
              WEAR THE BLESSING.
            </span>

            <div className="self-center w-[80%] md:w-[50%] h-[30%] md:h-[40%] ">
              <img
                className="w-full h-full object-cover"
                src="/tshirts/hero-animation-zoom-tshirt.avif"
              />
            </div>

            <span className="absolute bottom-14 right-0 text-black text-4xl sm:text-5xl font-dew-expanded-bold  w-[60%] md:w-[36%] xl:w-[28%]">
              SHARE THE LIGHT.
            </span>
          </div>

          <div
            ref={categoryContainerRef}
            className="w-1/2 ml-auto flex flex-col md:flex-row h-full"
          >
            <div
              ref={categorySlide1}
              className="flex-[0.8] h-full relative cursor-pointer bg-[#798E7B] flex items-center justify-center overflow-hidden"
            >
              <img src={hoodies} className="w-full h-full object-cover" />
              <div
                ref={text1Ref}
                className="absolute text-white text-2xl font-bold"
              >
                HOODIES
              </div>
            </div>

            <div
              ref={categorySlide2}
              className="bg-[#B692A1] flex-[0.2] cursor-pointer h-full relative flex items-center justify-center overflow-hidden"
            >
              <img src={handbag} className="w-full h-full object-cover" />
              <div
                ref={text2Ref}
                className="text-white text-xl absolute font-bold transform rotate-90 whitespace-nowrap"
              >
                HANDBAGS
              </div>
            </div>

            <div
              ref={categorySlide3}
              className="bg-[#BFCCD8] flex-[0.1] cursor-pointer relative h-full flex items-center justify-center overflow-hidden"
            >
              <img src={tshirt} className="w-full h-full object-cover" />

              <div
                ref={text3Ref}
                className="text-white text-lg font-bold absolute transform rotate-90 whitespace-nowrap"
              >
                T-SHIRTS
              </div>
            </div>

            <div
              ref={categorySlide4}
              className="bg-[#E8B4B8] flex-[0] cursor-pointer h-full relative flex items-center justify-center overflow-hidden"
            >
              <img src={actionfig} className="w-full h-full object-cover" />

              <div
                ref={text4Ref}
                className="text-white text-lg font-bold  absolute transform rotate-90 whitespace-nowrap"
              >
                ACTION FIGURES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;

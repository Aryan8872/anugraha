import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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


    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current], {
      opacity: 0,
      scale: 0.9,
      rotationY: 90,
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    });

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
        scrub: 0.7, // smoother + slower reaction
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
        { width: "100%", marginLeft: "0px", duration: 1.2, ease: E.out },
        "phase1"
      )
      .to(
        categorySlide1.current,
        { flex: 0.5, duration: 1.2, ease: E.inOut },
        "phase1"
      )
      .to(
        categorySlide2.current,
        { flex: 0.5, duration: 1.2, ease: E.inOut },
        "phase1"
      )
      .to(
        [categorySlide3.current, categorySlide4.current],
        { flex: 0, duration: 1.2, ease: E.inOut },
        "phase1"
      )
      .to(
        text1Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "phase1+=0.5"
      )
      .to(
        text2Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "phase1+=0.8"
      );

    // --- PHASE 2 ---
    tl.addLabel("phase2", "+=0.3")
      .to(
        categorySlide1.current,
        { flex: 0, duration: 1, ease: E.inOut },
        "phase2"
      )
      .to(
        text1Ref.current,
        { opacity: 0, scale: 0.9, rotationY: -90, duration: 0.6, ease: E.in },
        "phase2"
      )
      .to(
        categorySlide2.current,
        { flex: 0.7, duration: 1, ease: E.inOut },
        "phase2"
      )
      .to(
        categorySlide3.current,
        { flex: 0.3, duration: 1, ease: E.inOut },
        "phase2"
      )
      .to(
        text3Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "phase2+=0.6"
      );

    // --- PHASE 3 ---
    tl.addLabel("phase3", "+=0.3")
      .to(
        categorySlide2.current,
        { flex: 0, duration: 1, ease: E.inOut },
        "phase3"
      )
      .to(
        text2Ref.current,
        { opacity: 0, scale: 0.9, rotationY: -90, duration: 0.6, ease: E.in },
        "phase3"
      )
      .to(
        categorySlide3.current,
        { flex: 0.5, duration: 1, ease: E.inOut },
        "phase3"
      )
      .to(
        categorySlide4.current,
        { flex: 0.5, duration: 1, ease: E.inOut },
        "phase3"
      )
      .to(
        text4Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8, ease: E.pop },
        "phase3+=0.6"
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
            className="absolute left-0 top-0 xl:w-1/2 h-full flex flex-col justify-center bg-[#F1EFEB] px-3 z-10"
          >
            <span className="absolute top-16 text-6xl text-green-primary lg:text-4xl font-dew-regular w-[32%] xl:w-[36%]">WEAR THE  BLESSING</span>
          
            <div className="self-center w-[70%] md:w-[50%] h-[70%] md:h-[50%] mt-20">
                <div>
                    <img className="w-full h-full object-cover" src="/tshirts/hero-animation-zoom-tshirt.avif"/>
                </div>
            </div>
          </div>

          <div
            ref={categoryContainerRef}
            className="w-1/2 ml-auto flex flex-col md:flex-row h-full"
          >
            <div
              ref={categorySlide1}
              className="flex-[0.7] h-full bg-[#798E7B] flex items-center justify-center overflow-hidden"
            >
              <div ref={text1Ref} className="text-white text-2xl font-bold">
                HOODIES
              </div>
            </div>

            <div
              ref={categorySlide2}
              className="bg-[#B692A1] flex-[0.3] h-full flex items-center justify-center overflow-hidden"
            >
              <div
                ref={text2Ref}
                className="text-white text-xl font-bold transform rotate-90 whitespace-nowrap"
              >
                HANDBAGS
              </div>
            </div>

            <div
              ref={categorySlide3}
              className="bg-[#BFCCD8] flex-[0.1] h-full flex items-center justify-center overflow-hidden"
            >
              <div
                ref={text3Ref}
                className="text-white text-lg font-bold transform rotate-90 whitespace-nowrap"
              >
                T-SHIRTS
              </div>
            </div>

            <div
              ref={categorySlide4}
              className="bg-[#E8B4B8] flex-[0] h-full flex items-center justify-center overflow-hidden"
            >
              <div
                ref={text4Ref}
                className="text-white text-lg font-bold transform rotate-90 whitespace-nowrap"
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

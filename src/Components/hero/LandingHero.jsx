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
  const mainImageRef = useRef(null);
  const logoContainerRef = useRef(null);
  const categoryContainerRef = useRef(null);
  const categorySlide1 = useRef(null);
  const categorySlide2 = useRef(null);
  const categorySlide3 = useRef(null);
  const categorySlide4 = useRef(null);
  const maintext1Ref = useRef(null);
  const maintext2Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    
    // Set initial states with force3D for better performance
    gsap.set([maintext1Ref.current, maintext2Ref.current], {
      opacity: 0,
      force3D: true
    });
    
    gsap.set(
      [text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current],
      {
        opacity: 0,
        scale: 0.9,
        rotationY: 90,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        force3D: true
      }
    );

    // Optimize for mobile - add will-change hint
    gsap.set(
      [
        categorySlide1.current,
        categorySlide2.current,
        categorySlide3.current,
        categorySlide4.current
      ],
      {
        force3D: true,
        willChange: "flex"
      }
    );

    const E = {
      inOut: "power2.inOut",
      out: "power3.out",
      pop: "back.out(1.6)",
      in: "power2.in",
      smooth: "power1.inOut" // Added smoother easing
    };

    const tl0 = gsap.timeline();

    tl0
      .addLabel("initialphase")
      .to(maintext1Ref.current, {
        opacity: 1,
        duration: 1,
        ease: E.in,
        color: "black",
        stagger: 0.2,
        force3D: true
      })
      .to(
        maintext2Ref.current,
        {
          opacity: 1,
          duration: 1,
          color: "black",
          ease: E.in,
          stagger: 0.2,
          force3D: true
        },
        "<"
      )
      .to(mainImageRef.current, {
        width: "100%",
        top: 0,
        left: 0,
        height: "100%",
        duration: 0.5,
        ease: E.in,
        force3D: true
      })
      .to(
        maintext1Ref.current,
        { color: "white", duration: 0.6, ease: E.inOut, force3D: true },
        "<"
      )
      .to(
        maintext2Ref.current,
        { color: "white", duration: 0.6, ease: E.inOut, force3D: true },
        "<"
      );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200", // Increased for more control
        scrub: 3, // Smoother scrubbing
        pin: true,
        pinSpacing: true,
        anticipatePin: 1, // Helps with mobile performance
        fastScrollEnd: true // Better mobile handling
      }
    });

    // --- PHASE 1 - FIXED TIMING ---
    tl.addLabel("phase1")
      .to(
        logoContainerRef.current,
        { xPercent: -105, duration: 1.5, ease: E.out, force3D: true },
        "phase1"
      )
      .to(
        categoryContainerRef.current,
        { width: "100%", marginLeft: "0px", duration: 0.6, ease: E.out, force3D: true },
        "<"
      )
      // FIRST SLIDE - Made much smoother and longer
      .to(
        categorySlide1.current,
        { flex: 0.7, duration: 1, ease: E.smooth, force3D: true },
        "<"
      )
      .to(
        text1Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: E.pop, force3D: true },
        "<+0.2"
      )
      // Hold the first slide longer before transitioning
      .to(
        categorySlide1.current,
        { flex: 0, duration: 1.5, ease: E.smooth, force3D: true },
        "phase1+=1.8"
      )
      .to(
        text2Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: E.pop, force3D: true },
        "<+0.2"
      )
      .to(
        categorySlide2.current,
        { flex: 0.7, duration: 0.8, ease: E.smooth, force3D: true },
        "<"
      )
      .to(
        categorySlide3.current,
        { flex: 0.3, duration: 0.8, ease: E.smooth, force3D: true },
        "<"
      )
      .to(
        categorySlide4.current,
        { flex: 0.3, duration: 0.8, ease: E.smooth, force3D: true },
        "<"
      )
      // Third slide transition
      .to(
        categorySlide3.current,
        { flex: 0.6, duration: 1.5, ease: E.smooth, force3D: true },
        ">"
      )
      .to(
        categorySlide2.current,
        { flex: 0, duration: 1.2, ease: E.smooth, force3D: true },
        "<+0.3"
      )
      .to(
        categorySlide4.current,
        { flex: 0.4, duration: 0.8, ease: E.smooth, force3D: true },
        "<"
      )
      .to(
        text3Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: E.pop, force3D: true },
        "<+0.2"
      )
      .to(
        text4Ref.current,
        { opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: E.pop, force3D: true },
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
    { socialmedia: "Whatsapp", link: "", icon: "/icons/whatsapp.webp" }
  ];

  return (
    <div className="hero-wrapper">
      <div ref={containerRef} className="container-hero-wrapper">
        <div className="container-hero flex w-full h-full relative overflow-hidden">
          <div
            ref={logoContainerRef}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center bg-[#F1EFEB] px-3 z-10"
          >
            <span
              ref={maintext1Ref}
              className="absolute z-20 top-16 text-black text-4xl sm:text-5xl font-dew-expanded-bold w-[60%] md:w-[32%] xl:w-[28%]"
            >
              WEAR THE BLESSING.
            </span>

            <div className="fixed inset-0 w-full h-full">
              <img
                ref={mainImageRef}
                className="w-[45%] h-[40%] absolute top-[30%] left-[24%] object-cover"
                src="/categories/heroimage.png"
              />
            </div>

            <span
              ref={maintext2Ref}
              className="absolute bottom-14 right-0 text-black text-4xl sm:text-5xl font-dew-expanded-bold w-[60%] md:w-[36%] xl:w-[28%]"
            >
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
              <img
                src={hoodies}
                width={900}
                height={1200}
                className="w-full h-full object-cover"
              />
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
                className="text-white text-lg font-bold absolute transform rotate-90 whitespace-nowrap"
              >
                ACESSORIES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
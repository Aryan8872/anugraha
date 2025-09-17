// SmoothScrollProvider.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useLenis({
    duration: 1.3,
    smoothWheel: true,
    smoothTouch: false,
  });

  useEffect(() => {
    if (!lenisRef.current) return;
    const lenis = lenisRef.current;

    // Update ScrollTrigger on every Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis with GSAP's internal ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP uses seconds, Lenis expects ms
    });

    gsap.ticker.lagSmoothing(0); // prevents "jumps" if tab was inactive

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [lenisRef]);

  return <>{children}</>;
};

export default SmoothScrollProvider;

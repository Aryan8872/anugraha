// hooks/useLenis.js
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenis(options = {}) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      smoothTouch: false,
      ...options,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}

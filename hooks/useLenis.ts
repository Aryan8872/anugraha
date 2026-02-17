// hooks/useLenis.ts
import { useEffect, useRef } from "react";
import Lenis, { LenisOptions } from "lenis";

export function useLenis(
  options: Partial<LenisOptions> = {}
) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      ...options,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}

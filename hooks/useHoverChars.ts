/**
 * useHoverChars
 *
 * Reusable GSAP character-level flicker animation on mouseenter.
 * Ported from codrops-tutorial-text-animation / SplitText.jsx → HoverTextChars.
 *
 * Usage:
 *   1. Render each character of the text as a <span> with ref collected in an array.
 *   2. Pass the array ref + the container element ref to this hook.
 *
 * @param containerRef - Ref to the element that receives mouseenter/mouseleave
 * @param charsRef     - Ref to the array of character <span> elements
 */

import { useEffect } from "react";
import gsap from "gsap";

interface UseHoverCharsOptions {
    /** Duration of fade-out phase per char. Default: 0.08 */
    outDuration?: number;
    /** Duration of fade-in phase per char. Default: 0.08 */
    inDuration?: number;
    /** Total stagger amount across all chars for each phase. Default: 0.18 */
    staggerAmount?: number;
    /** Delay between fade-out end and fade-in start. Default: 0.25 */
    pauseBetween?: number;
}

export function useHoverChars(
    containerRef: React.RefObject<HTMLElement | null>,
    charsRef: React.MutableRefObject<(HTMLElement | null)[]>,
    options: UseHoverCharsOptions = {},
) {
    const {
        outDuration = 0.08,
        inDuration = 0.08,
        staggerAmount = 0.18,
        pauseBetween = 0.25,
    } = options;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseEnter = () => {
            const chars = charsRef.current.filter(Boolean) as HTMLElement[];
            if (!chars.length || gsap.isTweening(chars)) return;

            const tl = gsap.timeline();
            tl.to(chars, {
                autoAlpha: 0,
                duration: outDuration,
                stagger: { amount: staggerAmount },
            });
            tl.to(
                chars,
                {
                    autoAlpha: 1,
                    duration: inDuration,
                    stagger: { amount: staggerAmount },
                },
                pauseBetween,
            );
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        return () => container.removeEventListener("mouseenter", handleMouseEnter);
    }, [containerRef, charsRef, outDuration, inDuration, staggerAmount, pauseBetween]);
}

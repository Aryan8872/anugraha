/**
 * useRevealText
 *
 * Reusable GSAP scroll-triggered line reveal hook.
 * Ported from codrops-tutorial-text-animation / SplitText.jsx → RevealTextLines.
 *
 * Usage:
 *   1. Wrap each line of text in:
 *        <div className="overflow-hidden">
 *          <div className="reveal-line">{line}</div>
 *        </div>
 *   2. Pass a ref to the container element and call this hook.
 *
 * @param containerRef - React ref pointing to the parent container element
 * @param options      - Optional overrides for animation parameters
 */

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseRevealTextOptions {
    /** CSS selector for line elements inside the container. Default: ".reveal-line" */
    lineSelector?: string;
    /** Scroll position to start. Default: "top 88%" */
    start?: string;
    /** Duration per line. Default: 0.85 */
    duration?: number;
    /** Stagger between lines. Default: 0.1 */
    stagger?: number;
    /** GSAP ease. Default: "power4.out" */
    ease?: string;
    /** Whether to fire only once. Default: true */
    once?: boolean;
}

export function useRevealText(
    containerRef: React.RefObject<HTMLElement | null>,
    options: UseRevealTextOptions = {},
) {
    const {
        lineSelector = ".reveal-line",
        start = "top 88%",
        duration = 0.85,
        stagger = 0.1,
        ease = "power4.out",
        once = true,
    } = options;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const lines = gsap.utils.toArray<HTMLElement>(
            container.querySelectorAll(lineSelector),
        );
        if (!lines.length) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                lines,
                { yPercent: 105 },
                {
                    yPercent: 0,
                    duration,
                    stagger,
                    ease,
                    scrollTrigger: {
                        trigger: container,
                        start,
                        once,
                    },
                },
            );
        }, container);

        return () => ctx.revert();
    }, [containerRef, lineSelector, start, duration, stagger, ease, once]);
}

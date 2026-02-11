"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null> | null;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
};

const ScrollReveal = ({
  children,
  scrollContainerRef = null,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  const scroller =
    scrollContainerRef && scrollContainerRef.current
      ? scrollContainerRef.current
      : window;

  const ctx = gsap.context(() => {
    gsap.fromTo(
  el,
  { transformOrigin: "0% 50%", rotate: baseRotation, force3D: true },
  {
    ease: "none",
    rotate: 0,
    scrollTrigger: {
  trigger: el,
  scroller,
  start: "top 85%",
  end: "top 40%",
  scrub: true,
},

  }
);


    const wordElements = el.querySelectorAll(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 85%",
          end: "top 40%",

          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.02,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            end: "top 40%",

            scrub: true,
          },
        }
      );
    }
  }, containerRef);

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, [
  scrollContainerRef,
  enableBlur,
  baseRotation,
  baseOpacity,
  rotationEnd,
  wordAnimationEnd,
  blurStrength,
]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-base md:text-lg leading-relaxed text-gray ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;

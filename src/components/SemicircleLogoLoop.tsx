"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoLoop from "./LogoLoop";

interface Logo {
  src: string;
  alt?: string;
}

interface Props {
  logos: Logo[];
}

export default function SemicircleLogoLoop({ logos }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      rotate: 360,
      duration: 30,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none">
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{
          clipPath: "inset(0 0 50% 0)",
        }}
      >
        <div className="absolute inset-0 rounded-full">
          <LogoLoop
            logos={logos}
            speed={60}
            gap={40}
            logoHeight={36}
          />
        </div>
      </div>
    </div>
  );
}

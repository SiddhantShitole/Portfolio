"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Logo {
  src: string;
  alt?: string;
}

export default function SemicircleLogoLoop({
  logos,
}: {
  logos: Logo[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const angleRef = useRef({ value: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logoEls =
      container.querySelectorAll<HTMLImageElement>(".logo-item");

    // BIGGER ARC SETTINGS
    const radius = 320;     // size of arc (increase for bigger arc)
    const centerX = 520;    // move circle center off-screen right
    const centerY = 260;    // vertical center

    const updatePositions = () => {
      logoEls.forEach((el, i) => {
        const offset = (i / logos.length) * Math.PI;
        const a = angleRef.current.value + offset;

        const x = centerX + radius * Math.cos(a);
        const y = centerY + radius * Math.sin(a);

        gsap.set(el, {
          x,
          y,
          xPercent: -50,
          yPercent: -50,
          position: "absolute",
        });
      });
    };

    // ANTICLOCKWISE continuous rotation
    gsap.to(angleRef.current, {
      value: "+=" + Math.PI * 2,
      duration: 20,          // slower = smoother
      ease: "none",
      repeat: -1,
      onUpdate: updatePositions,
    });

    updatePositions();
  }, [logos]);

  return (
    <div
      ref={containerRef}
      className="
        absolute right-0 top-1/2 -translate-y-1/2
        w-[520px] h-[520px]
        overflow-hidden
        pointer-events-none
        z-10
      "
    >
      {logos.map((logo, i) => (
        <img
  key={i}
  src={logo.src}
  alt={logo.alt || ""}
  className="logo-item w-10 h-10 object-contain brightness-0 invert drop-shadow-[0_0_6px_rgba(119,254,0,0.5)]"
/>

      ))}
    </div>
  );
}

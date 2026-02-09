"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Logo {
  src: string;
  alt?: string;
}

export default function SemicircleLogoLoop({ logos }: { logos: Logo[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const logoEls =
      containerRef.current.querySelectorAll<HTMLImageElement>(".logo-item");

// Push ellipse center far outside the screen
const centerX = 820;   // outside right edge
const centerY = 400;

// Much larger ellipse
const radiusX = 700;   // horizontal stretch
const radiusY = 250;   // vertical stretch


    logoEls.forEach((el, i) => {
      const startAngle = Math.PI / 2 - (i / logos.length) * Math.PI;
      const obj = { angle: startAngle };

      gsap.to(obj, {
        angle: startAngle + Math.PI, // anticlockwise
        duration: 14,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          const a = obj.angle;

          const x = centerX + radiusX * Math.cos(a);
          const y = centerY + radiusY * Math.sin(a);

          gsap.set(el, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            position: "absolute",
          });
        },
        modifiers: {
          angle: gsap.utils.wrap(Math.PI / 2, (3 * Math.PI) / 2),
        },
      });
    });
  }, [logos]);

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-1/2 -translate-y-1/2
                  w-[800px] h-[700px]
                 overflow-hidden z-10 pointer-events-none"
    >
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt || ""}
          className="logo-item w-14 h-14 object-contain absolute z-0 brightness-0 invert drop-shadow-[0_0_6px_rgba(119,254,0,0.5)]"
        />
      ))}
    </div>
  );
}

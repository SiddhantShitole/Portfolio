"use client";

import { useEffect, useRef } from "react";

interface Logo {
  src: string;
  alt?: string;
}

interface Props {
  logos: Logo[];
  speed?: number;
  gap?: number;
  logoHeight?: number;
}

export default function LogoLoop({
  logos,
  speed = 60,
  gap = 40,
  logoHeight = 36,
}: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let offset = 0;

    const animate = () => {
      offset += speed * 0.01;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offset}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex items-center"
        style={{ gap: `${gap}px` }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt || ""}
            style={{ height: `${logoHeight}px` }}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}

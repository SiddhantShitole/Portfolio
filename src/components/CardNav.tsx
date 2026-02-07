"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#000",
  menuColor = "#fff",
  buttonBgColor = "#77FE00",
  buttonTextColor = "#000",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: 260,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease,
        stagger: 0.08,
      },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`fixed top-6 right-6 z-[99] w-[92%] max-w-[720px] ${className}`}
    >
      <nav
        ref={navRef}
        className="block h-[60px] rounded-xl shadow-lg relative overflow-hidden"
        style={{ backgroundColor: baseColor }}
      >
        {/* TOP BAR */}
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-10">
          {/* LOGO */}
          <img src={logo} alt={logoAlt} className="h-[28px]" />

          {/* HAMBURGER */}
          <div
            className="flex flex-col gap-[6px] cursor-pointer"
            onClick={toggleMenu}
            style={{ color: menuColor }}
          >
            <div
              className={`w-[28px] h-[2px] bg-current transition ${
                isHamburgerOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <div
              className={`w-[28px] h-[2px] bg-current transition ${
                isHamburgerOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </div>
        </div>

        {/* EXPANDED CONTENT */}
        <div
          className={`absolute left-0 right-0 top-[60px] p-2 flex flex-col gap-2 ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:gap-3`}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex flex-col gap-2 p-4 rounded-lg flex-1"
              ref={setCardRef(idx)}
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
            >
              <div className="text-lg font-semibold">{item.label}</div>

              <div className="flex flex-col gap-1 mt-auto">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition"
                  >
                    <GoArrowUpRight />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;

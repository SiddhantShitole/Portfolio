"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { letter: "P", id: "projects" },
  { letter: "E", id: "experiments" },
  { letter: "B", id: "blog" },
  { letter: "R", id: "resume" },
  { letter: "C", id: "contact" },
];

export default function ScrollNav() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("projects");

  useEffect(() => {
  const unsub = scrollYProgress.on("change", (v) => {
    setVisible(v > 0.16);
  });
  return () => unsub();
}, [scrollYProgress]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="fixed left-6 top-1/2 -translate-y-1/2 z-50"
  >
    <div className="relative flex flex-col gap-6">
      {/* ACTIVE INDICATOR LINE */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-[-10px] w-[2px] bg-white rounded"
        style={{
          height: "1.25rem",
          top: `${items.findIndex((i) => i.id === active) * 3.25}rem`
,
        }}
      />

      {/* NAV ITEMS */}
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`group flex items-center gap-3 transition ${
            active === item.id
              ? "text-white"
              : "text-white/40"
          }`}
        >
          <span className="text-lg font-semibold">
            {item.letter}
          </span>

          <span className="text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
          </span>
        </button>
      ))}
    </div>
  </motion.div>
);
}
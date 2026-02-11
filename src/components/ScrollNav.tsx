"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { letter: "P", id: "projects", label: "rojects" },
  { letter: "E", id: "experiments", label: "xperiments" },
  { letter: "B", id: "blog", label: "log" },
  { letter: "R", id: "resume", label: "esume" },
  { letter: "G", id: "Get in Touch", label: "et in Touch" },
];

export default function ScrollNav() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("projects");
  const [visible, setVisible] = useState(false);

  // detect active section
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

  // show nav after hero scroll
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.18);
    });
    return () => unsub();
  }, [scrollYProgress]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`
              relative group
              text-2xl font-semibold tracking-widest
              transition
              ${
                active === item.id
                  ? "text-green"
                  : "text-gray"
              }
            `}
          >
            {/* Letter */}
            <span>{item.letter}</span>

            {/* Hover suffix */}
            <span
              className="
                absolute left-8 top-1/2 -translate-y-1/2
                text-sm whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition
                text-white
              "
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

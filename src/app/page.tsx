"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollNav from "@/components/ScrollNav";
import Link from "next/link";

export default function HomePage() {
  // ONE scroll hook only
  const { scrollYProgress } = useScroll();

  // Horizontal PEBRC fades out early
  const pebrcOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const pebrcY = useTransform(scrollYProgress, [0, 0.15], [0, -20]);

  // Subtle background shifts per section
  const background = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.55, 0.75, 1],
    [
      "#0b0b0f", // Hero
      "#0f1015", // Projects
      "#0d1417", // Experiments
      "#12101a", // Blog
      "#0f1114", // Resume
      "#11130f", // Contact
    ]
  );

  return (
    <motion.div
      style={{ background }}
      className="min-h-screen transition-colors duration-500"
    >
      <ScrollNav />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green">

          Siddhant Shitole
        </h1>

        <p className="text-xl text-gray max-w-3xl">

          Software Engineer focused on backend systems and applied AI.
        </p>

        {/* HORIZONTAL PEBRC */}
        <motion.div
          style={{ opacity: pebrcOpacity, y: pebrcY }}
          className="flex gap-10 mt-12 text-2xl font-semibold tracking-widest"
        >
          {[
            { l: "P", w: "Problem" },
            { l: "E", w: "Experiment" },
            { l: "B", w: "Build" },
            { l: "R", w: "Refine" },
            { l: "C", w: "Connect" },
          ].map(({ l, w }) => (
            <span key={l} className="group relative cursor-default">
              <span className="text-gray group-hover:opacity-0 transition">

                {l}
              </span>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition text-green text-base tracking-normal">

                {w}
              </span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-6 max-w-6xl mx-auto py-24 border-t border-darkgray/50"
      >

        <h2 className="text-3xl font-bold mb-6 text-green">Projects</h2>
      </section>

      {/* EXPERIMENTS */}
      <section
        id="experiments"
        className="min-h-screen px-6 max-w-6xl mx-auto py-24"
      >
        <h2 className="text-3xl font-bold mb-6 text-green">Experiments</h2>
      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="min-h-screen px-6 max-w-6xl mx-auto py-24"
      >
        <h2 className="text-3xl font-bold mb-6 text-green">Blog</h2>
      </section>

      {/* RESUME */}
      <section
        id="resume"
        className="min-h-screen px-6 max-w-6xl mx-auto py-24"
      >
        <h2 className="text-3xl font-bold mb-6 text-green">Resume</h2>
        <Link href="/resume" className="underline">
          View Resume →
        </Link>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen px-6 max-w-6xl mx-auto py-24"
      >
        <h2 className="text-3xl font-bold mb-6 text-green">Contact</h2>
        <Link href="/contact" className="underline">
          Get in touch →
        </Link>
      </section>
    </motion.div>
  );
}

"use client";
import TextType from "@/components/TextType";   

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ScrollReveal from "@/components/ScrollReveal";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollNav from "@/components/ScrollNav";
import Link from "next/link";
import dynamic from "next/dynamic";
import SemicircleLogoLoop from "@/components/SemicircleLogoLoop";


const Antigravity = dynamic(
  () => import("@/components/Antigravity"),
  { ssr: false }
);


export default function HomePage() {
  // ONE scroll hook only
  const { scrollYProgress } = useScroll();
  const scrollContainerRef = useRef(null);


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
  const logos = [
  "css",
  "docker",
  "git",
  "github",
  "googlesummerofcode",
  "html5",
  "javascript",
  "jupyter",
  "leetcode",
  "python",
  "pytorch",
  "react",
  "tensorflow",
].map((name) => ({
  src: `/logos/${name}.svg`,
}));




  return (
    <motion.div
      style={{ background }}
      className="min-h-screen transition-colors duration-500"
    >
      <ScrollNav />

    {/* HERO */}
<section className="relative min-h-screen w-full overflow-hidden">

  {/* Antigravity background */}
  <div className="absolute inset-0 z-0 opacity-25">
    <Antigravity
      count={150}
      magnetRadius={6}
      ringRadius={7}
      waveSpeed={0.4}
      waveAmplitude={1}
      particleSize={1.5}
      lerpSpeed={0.05}
      color="#46ed3a"
      autoAnimate
      particleVariance={1}
      rotationSpeed={0}
      depthFactor={1}
      pulseSpeed={3}
      particleShape="capsule"
      fieldStrength={10}
    />
  </div>

  {/* LOGO ARC (true background layer) */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <SemicircleLogoLoop logos={logos} />
  </div>

  {/* Foreground content container */}
  <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
    <div className="max-w-3xl">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        Siddhant Shitole
      </h1>

      <TextType
        as="h1"
        text={[
          "A Backend Developer?",
          "A Frontend Developer?",
          "An AI/ML Practitioner?",
          "An Agent Developer? ",
          "Why Not All of the Above?",
          "Problem → Experiment → Build → Refine → Connect",
        ]}
        typingSpeed={70}
        deletingSpeed={40}
        pauseDuration={1500}
        variableSpeed={{ min: 40, max: 90 }}
        initialDelay={400}
        loop
        showCursor
        cursorCharacter="|"
        className="text-xl md:text-2xl text-green font-medium"
      />

      <ScrollReveal
        scrollContainerRef={scrollContainerRef}
        baseOpacity={0.15}
        blurStrength={6}
        baseRotation={2}
        containerClassName="mt-8"
        textClassName="text-gray max-w-3xl leading-relaxed"
      >
        Software engineer focused on backend systems and applied AI, with a
        strong interest in building reliable, scalable solutions to real-world
        problems. My work combines solid engineering fundamentals—data
        structures, system design, and clean architecture—with hands-on
        experimentation in machine learning, computer vision, and intelligent
        applications.
      </ScrollReveal>
    </div>
  </div>
</section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32 border-t border-darkgray/50"
      >

        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-green">Projects</h2>
      </section>

      {/* EXPERIMENTS */}
      <section
        id="experiments"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-green">Experiments</h2>
      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-green">Blog</h2>
      </section>

      {/* RESUME */}
      <section
        id="resume"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-green">Resume</h2>
        <Link href="/resume" className="text-white font-medium hover:text-gray transition">
          View Resume →
        </Link>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-green">Contact</h2>
        <Link href="/contact" className="text-white font-medium hover:text-gray transition">
          Get in touch →
        </Link>
      </section>
    </motion.div>
  );
}

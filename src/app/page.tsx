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

      <div className="inline-block mb-12">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-semibold text-green"
  >
    Projects
  </motion.h2>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="origin-left h-[2px] w-full bg-green mt-2"
  />
</div>

      </section>

      {/* EXPERIMENTS */}
      <section
        id="experiments"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32"
      >
       <div className="inline-block mb-12">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-semibold text-green"
  >
    Experiments
  </motion.h2>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="origin-left h-[2px] w-full bg-green mt-2"
  />
</div>

      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="min-h-screen px-6 max-w-6xl mx-auto py-32"
      >
      <div className="inline-block mb-12">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-semibold text-green"
  >
    Blogs
  </motion.h2>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="origin-left h-[2px] w-full bg-green mt-2"
  />
</div>

      </section>

      {/* RESUME */}
<section
  id="resume"
  className="relative min-h-screen px-6 max-w-6xl mx-auto py-24 overflow-hidden"
>


  {/* FOREGROUND CONTENT */}
  <div className="relative z-10">
    <div className="inline-block mb-12">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-semibold text-green"
  >
    Resume
  </motion.h2>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="origin-left h-[2px] w-full bg-green mt-2"
  />
</div>


    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left text */}
      <ScrollReveal
        baseOpacity={0.2}
        blurStrength={2}
        baseRotation={1}
        textClassName="text-gray leading-relaxed"
      >
        I'm a third-year Electronics and Telecommunication engineering
        student focused on AI, embedded systems, and system design.
         with a strong focus on AI, embedded systems, and modern
  system design. My academic work is complemented by hands-on projects
  that combine hardware and software, allowing me to build practical,
  real-world solutions. I am continuously strengthening my foundation
  in data structures, core electronics, and computer architecture while
  exploring advanced areas such as VLSI, machine learning, and
  intelligent systems.
      </ScrollReveal>

      {/* Right resume card */}
      <div className="border border-white/10 rounded-xl p-6 bg-black/40 backdrop-blur">
        <h3 className="text-lg font-semibold mb-4">
          Quick Highlights
        </h3>

        <ul className="space-y-3 text-gray">
          <li>• Built AI and embedded systems projects</li>
          <li>• Hardware + software integrated systems</li>
          <li>• Strong DSA and electronics foundation</li>
          <li>• VLSI, AI, and architecture focus</li>
        </ul>

        <Link
          href="/resume"
          className="inline-block mt-6 bg-green text-black px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition"
        >
          View Full Resume →
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
      {/* CONTACT */}
<section
  id="contact"
  className="min-h-screen px-6 max-w-6xl mx-auto py-32"
>
  {/* Heading */}
  <div className="inline-block mb-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-semibold text-green"
    >
      Get in Touch
    </motion.h2>

    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="origin-left h-[2px] w-full bg-green mt-2"
    />
  </div>

  {/* Description */}
  <p className="text-gray max-w-xl mb-8 leading-relaxed">
    I’m always open to discussing new opportunities, collaborations,
    or interesting engineering problems. If you’d like to work together
    or just want to connect, feel free to reach out.
  </p>

  {/* Actions */}
  <div className="flex gap-6 items-center">
    <Link
      href="/contact"
      className="bg-green text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
    >
      Open Contact Page
    </Link>

   <div className="flex gap-6">
  {/* Opens default mail app */}
  <a href="mailto:your@email.com">
    Email Client
  </a>

  {/* Opens Gmail in browser */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhantshitole0@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Open in Gmail
  </a>
</div>

  </div>
</section>

    </motion.div>
  );
}

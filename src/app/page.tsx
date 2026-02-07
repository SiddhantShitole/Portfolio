"use client";
import TextType from "@/components/TextType";


import { motion, useScroll, useTransform } from "framer-motion";
import ScrollNav from "@/components/ScrollNav";
import Link from "next/link";
import dynamic from "next/dynamic";

const Antigravity = dynamic(
  () => import("@/components/Antigravity"),
  { ssr: false }
);


export default function HomePage() {
  // ONE scroll hook only
  const { scrollYProgress } = useScroll();


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
      <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto overflow-hidden">

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
      color="#7C3AED"

      autoAnimate
      particleVariance={1}
      rotationSpeed={0}
      depthFactor={1}
      pulseSpeed={3}
      particleShape="capsule"
      fieldStrength={10}
    />
  </div>

  {/* Foreground content */}
  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
  Siddhant Shitole
</h1>
    <TextType
  as="h1"
  
  text={[
  "Siddhant Shitole",
  "Backend & Systems Engineer",
  "AI/ML Practitioner",
  "Builder of Scalable Solutions",
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



    <p className="text-lg md:text-xl text-gray max-w-2xl">
      Software Engineer focused on backend systems and applied AI.
    </p>

    
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

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroManifesto() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section 
      ref={containerRef}
      className="bg-black text-white px-4 sm:px-8 py-20 lg:py-32 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p 
          style={{ opacity, y }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-glancyr leading-relaxed sm:leading-[1.4] md:leading-[1.5] text-white/95"
        >
          <span className="font-asgard font-extrabold uppercase tracking-wide text-white">Ad Club Madras</span> isn’t just India’s pioneering advertising club in Chennai, it’s the heartbeat of the industry since <span className="text-primary font-bold">1956</span>. For nearly seven decades, we’ve been the epicenter of creative disruption, the nexus for advertising, media, and marketing professionals, students, and stakeholders. A command center for innovation that invites you to take center stage.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 md:mt-12 text-lg sm:text-xl md:text-2xl font-glancyr text-white/70 leading-relaxed max-w-4xl mx-auto"
        >
          Rooted in rich advertising heritage, we’re future‑ready and unrivaled. We serve as a catalyst to propel your bold ideas, a space where visionary leaders can converge, and careers accelerate.
        </motion.p>
      </div>
    </section>
  );
}

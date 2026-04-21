"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroManifesto() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-8 md:px-12 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div style={{ opacity, y }} className="max-w-5xl">
          <p className="text-phara">
            <span className="font-bold text-primary">Ad Club</span> Madras
            isn’t just India’s pioneering advertising club in Chennai, it’s the
            heartbeat of the industry since 1956. For nearly seven decades,
            we’ve been the{" "}
            <span className="font-bold text-primary">
              epicenter of creative disruption, the nexus for advertising,
              media, and marketing professionals, students, and stakeholders.
            </span>
          </p>

          <p className="text-phara mt-8">
            A command center for innovation that invites you to take center
            stage. Rooted in rich advertising heritage, we’re{" "}
            <span className="font-bold text-white">future-ready and unrivaled.</span> We
            serve as a catalyst to propel your{" "}
            <span className="font-bold text-primary">
              bold ideas, a space where visionary leaders can converge, and
              careers accelerate.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

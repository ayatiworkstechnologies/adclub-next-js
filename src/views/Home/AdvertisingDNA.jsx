"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AdvertisingDNA() {
  return (
    <section className="bg-black px-4 py-10 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid items-stretch gap-4 md:grid-cols-[1.05fr_1.35fr]"
        >
          {/* Left Image */}
          <div className="overflow-hidden rounded-[10px] bg-white/5">
            <img
              src="/assets/home-img-1.png"
              alt="Advertising DNA"
              className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Content Card */}
          <div className="rounded-[20px] border border-white/10 bg-white/5 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <h2 className="heading !text-[24px] sm:!text-[30px] md:!text-[36px] tracking-tight">
              Advertising <span className="text-primary">DNA</span>
            </h2>

            <div className="mt-6 space-y-6">
              <p className="text-phara">
                Our advertising and creative community in Chennai powers through
                a year-round calendar of marketing and advertising events in the
                city, setting the standard for what’s next globally.
              </p>

              <p className="text-phara">
                For over four decades, we’ve{" "}
                <span className="text-primary font-bold">
                  honored excellence through MADDYs Advertising Awards,
                </span>{" "}
                spotlighting the best in the business and inspiring the next
                generation of talent.
              </p>

              <p className="text-phara">
                In 2024, the{" "}
                <span className="text-primary font-bold">
                  MADDYs Awards broke records with unprecedented entries and
                  introduced India’s first Musical Logo (MOGO)
                </span>{" "}
                — proving our commitment to innovation, relevance, and active
                creative community participation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

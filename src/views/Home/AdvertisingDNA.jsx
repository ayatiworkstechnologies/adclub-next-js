"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "Year-round",
    label: "marketing and advertising events",
  },
  {
    value: "40+ years",
    label: "of MADDYs Advertising Awards",
  },
  {
    value: "2024",
    label: "record entries and India's first MOGO",
  },
];

export default function AdvertisingDNA({ layout = "default" }) {
  const isPanel = layout === "panel";

  const wrapperClassName = isPanel
    ? ""
    : "relative overflow-hidden bg-black px-4 py-16 text-white sm:px-8 md:px-16 lg:py-24";

  const containerClassName = isPanel ? "" : "mx-auto max-w-6xl";

  return (
    <section className={wrapperClassName}>
      <div className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[420px] overflow-hidden rounded-[18px] border border-white/10 bg-primary/80 text-black">
            <img
              src="/assets/maddys-2025.PNG"
              alt="MADDYs Advertising Awards"
              className="absolute inset-0 h-full w-full object-cover opacity-28 mix-blend-multiply"
            />
            <div className="absolute inset-x-0 top-0 flex justify-between p-5 font-asgard text-xs uppercase tracking-[0.24em] text-black/65">
              <span>Madras</span>
              <span>Since <span className="font-glancyr">1956</span></span>
            </div>
            <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-6 sm:p-8 lg:p-10">
              <p className="font-asgard text-sm uppercase tracking-[0.28em] text-black/65">
                Advertising DNA
              </p>
              <h2 className="mt-4 font-asgard text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
                Built for the work that moves culture
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[18px] border border-white/10 bg-white/[0.04] p-6 shadow-xl sm:p-8 lg:p-10">
            <p className="font-glancyr text-base leading-8 text-white/82 sm:text-lg">
              Our advertising and creative community in Chennai powers through a{" "}
              <span className="font-bold text-primary">
                year-round calendar of marketing and advertising events
              </span>{" "}
              in the city, setting the standard for what&apos;s next globally. For
              over four decades, we&apos;ve{" "}
              <span className="font-bold text-primary">
                honored excellence through MADDYs Advertising Awards
              </span>
              , spotlighting the best in the business and inspiring the next
              generation of talent. In 2024, the{" "}
              <span className="font-bold text-primary">
                MADDYs Awards broke records with unprecedented entries and
                introduced India&apos;s first Musical Logo (MOGO)
              </span>
              , proving our commitment to innovation, relevance, and active
              creative community participation.
            </p>

            <div className="mt-8 grid gap-0 overflow-hidden rounded-[14px] border border-primary/40 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.value}
                  className="border-b border-primary/35 bg-black p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="font-secondary text-2xl font-bold uppercase leading-tight text-primary">
                    {item.value}
                  </p>
                  <p className="mt-2 font-glancyr text-sm leading-5 text-white/72">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

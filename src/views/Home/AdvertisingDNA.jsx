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
    label: "record entries & India's first MOGO",
  },
];

export default function AdvertisingDNA({ layout = "default" }) {
  const isPanel = layout === "panel";

  const wrapperClassName = isPanel
    ? ""
    : "relative overflow-hidden bg-black px-4 py-20 text-white sm:px-8 md:px-16 lg:py-32";

  const containerClassName = isPanel ? "" : "mx-auto max-w-7xl";

  return (
    <section className={wrapperClassName}>
      <div className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 flex flex-col justify-between gap-10 md:mb-24 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary"></span>
              <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
                Advertising DNA
              </p>
            </div>
            <h2 className="font-asgard text-2xl font-extrabold uppercase leading-[1.1] sm:text-3xl lg:text-4xl">
              Built for the work that moves culture
            </h2>
          </div>
          <div className="max-w-lg lg:pb-3">
            <p className="font-glancyr text-lg leading-relaxed text-white/80">
              Our creative community in Chennai powers through a{" "}
              <span className="font-bold text-white">
                year-round calendar of events
              </span>
              , setting the standard globally.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative mb-16 h-[60vh] min-h-[400px] w-full overflow-hidden md:mb-24"
        >
          <img
            src="/assets/maddys-2025.PNG"
            alt="MADDYs Advertising Awards"
            className="h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
          <div className="absolute inset-x-0 top-0 flex justify-between p-6 font-asgard text-sm uppercase tracking-[0.24em] text-white/90 md:p-10">
            <span>Madras</span>
            <span>
              Since <span className="font-glancyr">1956</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-16 lg:grid-cols-2 lg:items-start"
        >
          <div className="lg:pr-10">
            <p className="font-glancyr text-xl leading-relaxed text-white/80 md:text-2xl">
              For over four decades, we&apos;ve{" "}
              <span className="font-bold text-white">
                honored excellence through MADDYs
              </span>
              , spotlighting the best and inspiring the next generation. In
              2024, the awards broke records and introduced{" "}
              <span className="text-primary">
                India&apos;s first Musical Logo (MOGO)
              </span>
              , proving our commitment to innovation.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {stats.map((item, index) => (
              <div key={item.value} className="flex flex-col gap-3">
                <span className="block font-secondary text-4xl font-bold text-primary md:text-5xl">
                  {item.value}
                </span>
                <span className="relative my-2 block h-[1px] w-full bg-white/20">
                  <span
                    className="absolute left-0 top-0 h-full bg-primary transition-all duration-1000"
                    style={{ width: "40%" }}
                  ></span>
                </span>
                <span className="font-glancyr text-sm uppercase tracking-wider text-white/60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

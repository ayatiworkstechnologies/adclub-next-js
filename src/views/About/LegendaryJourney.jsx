"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const timelineFlow = [
  {
    year: "1956 – Inception",
    content:
      "It all started in 1956, when a group of passionate visionaries came together to create a space for advertising professionals in Madras. What began as a small initiative quickly grew into a vibrant hub for creativity, ideas, and collaboration.",
  },
  {
    year: "1970s – Building Momentum",
    content:
      "Through the 1970s, Ad Club Madras became the go-to platform for seminars, conferences, and spirited discussions. We weren’t just following the industry, we were shaping it, setting benchmarks for how advertising could evolve in Chennai and beyond.",
  },
  {
    year: "1977 – The Birth of the MADDYs",
    content:
      "A defining moment came in 1977 with the launch of the MADDYs Awards. From that year onward, excellence in advertising had a stage in Chennai. Agencies, clients, and brand custodians found recognition here, and the MADDYs became the ultimate celebration of creativity.",
  },
  {
    year: "1980s–1990s – Expanding Horizons",
    content:
      "The following decades saw us grow into more than just an awards body. We hosted events that sparked fresh thinking, built bridges between professionals, and brought members together through sports, cricket matches, bowling nights, and badminton rallies.",
  },
  {
    year: "2000s – A Modern Pulse",
    content:
      "As advertising shifted into digital, Ad Club Madras kept pace. We embraced new formats, new voices, and new ideas, ensuring Chennai’s advertising story stayed relevant and future-ready.",
  },
  {
    year: "Today – Heritage Meets Innovation",
    content:
      "With over 65 years behind us, Ad Club Madras continues to be a living legendary story, blending heritage with innovation, tradition with disruption, and Chennai’s unique spirit with global ambition.",
  },
];

export default function LegendaryJourney() {
  const getYearOnly = (value) => {
    if (!value) return "";
    return value.split("â€“")[0].split("-")[0].trim();
  };

  return (
    <section className="mt-8 rounded-[20px] border border-primary/30 bg-white/[0.03] p-6 text-left sm:p-8">
      <p className="font-glancyr text-base leading-8 text-white/85 sm:text-lg">
        On 18th February 1956, twenty creative minds gathered over cups of tea,
        and in that moment, they brewed Ad Club Madras. As the second-oldest
        advertising club in India, we’ve poured the emotion of Madras into
        advertising and set in motion Chennai’s iconic advertising story.
      </p>

      <div className="relative mt-10 space-y-10 pb-2">
        <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-primary md:block" />

        {timelineFlow.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`relative grid items-start gap-6 md:grid-cols-2 ${
                isLeft ? "md:text-right" : ""
              }`}
            >
              <div
                className={`rounded-xl border border-white/15 bg-black/45 p-5 ${
                  isLeft ? "md:mr-14" : "md:order-2 md:ml-14"
                }`}
              >
                <span className="font-glancyr text-3xl font-extrabold text-primary">
                  {getYearOnly(item.year)}
                </span>
                <p className="mt-3 font-glancyr text-sm leading-7 text-white/85 sm:text-base">
                  {item.content}
                </p>
              </div>

              <div className="hidden md:block" />

              <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 items-center justify-center md:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-black">
                  {isLeft ? (
                    <ArrowLeft className="h-5 w-5 text-primary" />
                  ) : (
                    <ArrowRight className="h-5 w-5 text-primary" />
                  )}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

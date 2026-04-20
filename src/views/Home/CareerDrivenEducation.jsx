"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

export default function CareerDrivenEducation({ layout = "default" }) {
  const navigate = useRouter();
  const isPanel = layout === "panel";
  const sectionClassName = isPanel
    ? ""
    : "relative bg-black px-4 py-8 text-white sm:px-8";
  const contentClassName = isPanel ? "h-full" : "mx-auto max-w-7xl";

  return (
    <section className={sectionClassName}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={contentClassName}
      >
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1 space-y-8 lg:pr-8">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[1px] w-12 bg-primary"></span>
                <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
                  Career-Driven Education
                </p>
              </div>
              <h2 className="font-asgard text-2xl font-extrabold uppercase leading-[1.1] sm:text-3xl lg:text-4xl">
                For tomorrow&apos;s trailblazers
              </h2>
            </div>

            <p className="font-glancyr text-lg leading-relaxed text-white/80">
              <span className="font-bold text-white">
                We don&apos;t just host events, we build futures.
              </span>{" "}
              Through our flagship{" "}
              <span className="font-bold text-primary">
                Post Graduate Diploma in Advertising & Marketing (PGDAM)
              </span>
              , professionals can upskill, sharpen expertise, and stay ahead of
              industry trends. Deputed colleagues and students gain exclusive
              member discounts, making future-focused education more accessible.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={() => navigate.push("/course-new")}
              className="group mt-4 flex w-fit flex-row items-center gap-4"
            >
              <span className="relative overflow-hidden rounded-full bg-white px-8 py-4 font-asgard text-sm font-bold uppercase tracking-wider text-black transition-colors duration-300 group-hover:bg-primary">
                <span className="relative z-10">Discover PGDAM</span>
              </span>
              <span className="flex items-center justify-center rounded-full bg-white/10 p-4 text-white transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </motion.button>
          </div>

          <div className="w-full flex-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-square lg:aspect-[4/5]">
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                viewport={{ once: true }}
                style={{ zIndex: 10 }}
              />
              <img
                src="/assets/pgda-banner.jpg"
                alt="Post Graduate Diploma in Advertising and Marketing"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-10">
                <div className="inline-flex items-center gap-3">
                  <span className="shadow-xl flex h-14 w-14 items-center justify-center rounded-full bg-primary font-asgard text-sm font-bold text-black">
                    PG
                  </span>
                  <span className="font-asgard text-sm uppercase tracking-widest text-white">
                    Diploma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

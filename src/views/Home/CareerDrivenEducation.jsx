"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareerDrivenEducation({ layout = "default" }) {
  const navigate = useRouter();
  const isPanel = layout === "panel";
  const sectionClassName = isPanel
    ? ""
    : "bg-black px-4 py-16 text-white sm:px-8 md:px-16 lg:py-24";
  const contentClassName = isPanel
    ? "h-full overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] shadow-xl"
    : "mx-auto max-w-6xl overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] shadow-xl";

  return (
    <section className={sectionClassName}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        className={contentClassName}
      >
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[560px]">
            <img
              src="/assets/pgda-banner.jpg"
              alt="Post Graduate Diploma in Advertising and Marketing"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-6 left-6 rounded-full bg-primary px-5 py-3 font-asgard text-sm font-bold uppercase text-black sm:bottom-8 sm:left-8">
              PGDAM
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
              Career-Driven Advertising Education
            </p>
            <h2 className="mt-4 font-asgard text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
              For tomorrow's trailblazers
            </h2>
            <p className="mt-6 font-glancyr text-base leading-8 text-white/82 sm:text-lg">
              We don't just host events, we build futures. Through our flagship
              Post Graduate Diploma in Advertising & Marketing (PGDAM),
              professionals can upskill, sharpen expertise, and stay ahead of
              industry trends. Deputed colleagues and students gain exclusive
              member discounts, making advertising future-focused education in
              Chennai more accessible and impactful.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 font-glancyr text-sm text-white/72">
              <span className="rounded-full border border-primary/45 px-4 py-2">
                Upskill
              </span>
              <span className="rounded-full border border-primary/45 px-4 py-2">
                Member discounts
              </span>
              <span className="rounded-full border border-primary/45 px-4 py-2">
                Chennai focused
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={() => navigate.push("/course-new")}
              className="mt-8 flex w-fit items-center group"
            >
              <span className="rounded-full bg-white px-6 py-3 font-asgard text-base font-bold text-black transition duration-300 hover:bg-primary group-hover:bg-primary group-hover:text-black">
                LEARN MORE
              </span>
              <span className="flex items-center justify-center rounded-full bg-white px-4 py-3 text-black transition duration-300 hover:bg-primary group-hover:bg-primary group-hover:text-black">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

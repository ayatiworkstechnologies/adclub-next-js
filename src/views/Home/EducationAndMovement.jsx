"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EducationAndMovement() {
  const navigate = useRouter();

  return (
    <section className="bg-black px-4 py-16 text-white sm:px-8 md:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[18px] bg-primary p-6 text-black shadow-xl sm:p-8 lg:p-10">
            <p className="font-asgard text-sm uppercase tracking-[0.24em] text-black/70">
              Programmes
            </p>
            <h2 className="mt-4 font-asgard text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Career-Driven Advertising Education for Tomorrow's Trailblazers
            </h2>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6 shadow-xl sm:p-8">
            <p className="font-glancyr text-base leading-8 text-white/82 sm:text-lg">
              We don't just host events, we build futures. Through our flagship
              Post Graduate Diploma in Advertising & Marketing (PGDAM),
              professionals can upskill, sharpen expertise, and stay ahead of
              industry trends. Deputed colleagues and students gain exclusive
              member discounts, making advertising future-focused education in
              Chennai more accessible and impactful.
            </p>

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-[18px] border border-primary/40 bg-white/[0.04] p-6 shadow-xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
                Why Ad Club Madras?
              </p>
              <h2 className="mt-4 font-asgard text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
                Don't just attend events, join the movement.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-glancyr text-base leading-8 text-white/82 sm:text-lg">
                Be part of a community that defines advertising in India, right
                here in Chennai, where creativity thrives, careers accelerate,
                and bold ideas find their stage. For decades, Ad Club Madras has
                been the place where the industry's brightest minds come
                together to inspire, educate, and engage.
              </p>
              <p className="font-glancyr text-base leading-8 text-white/82 sm:text-lg">
                This is more than a calendar of events; it's a movement that
                keeps the pulse of advertising alive and future-ready.
              </p>
              <p className="font-asgard text-2xl font-extrabold uppercase text-primary sm:text-3xl">
                Inspire. Educate. Engage.
              </p>
              <p className="font-glancyr text-base leading-7 text-white/72">
                That's not just our tagline, it's our DNA.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

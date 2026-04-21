"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareerDrivenEducation() {
  const router = useRouter();

  return (
    <section className="bg-black px-4 py-10 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[10px] border border-white/10 bg-white/5 px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_1.8fr] md:items-start lg:gap-16">
            {/* Left */}
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="font-asgard text-[24px] font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-[28px] md:text-[32px]">
                  Career-Driven
                </p>

                <h2 className="heading mt-2 !normal-case !tracking-tight !text-[24px] sm:!text-[28px] md:!text-[32px]">
                  ADVERTISING EDUCATION
                  <br />
                  FOR TOMORROW’S
                  <br />
                  TRAILBLAZERS
                </h2>
              </div>

              <p className="mt-8 font-glancyr text-lg font-bold italic text-white md:mt-12 md:text-xl">
                We don’t just host events, we build futures.
              </p>
            </div>

            {/* Right */}
            <div className="flex h-full flex-col justify-between space-y-8 md:space-y-12">
              <p className="text-phara !leading-[1.8]">
                Through our flagship{" "}
                <span className="font-bold text-primary">
                  Post Graduate Diploma in Advertising & Marketing (PGDAM),
                  professionals can upskill, sharpen expertise, and stay ahead
                  of industry trends.
                </span>{" "}
                Deputed colleagues and students gain exclusive member discounts,
                making advertising future-focussed education in Chennai more
                accessible, and impactful.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => router.push("/course-new")}
                className="group flex items-center w-fit mt-8"
                type="button"
              >
                <span className="px-6 py-3 text-sm md:text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                  LEARN MORE
                </span>
                <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useRouter } from 'next/navigation';
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const bgPencilGray = "/assets/Pencil-right.svg";
const bgPencilYellow = "/assets/Pencil-right.svg";
import { useTheme } from "@/context/ThemeContext";


export default function JoinUsSection() {
  const navigate = useRouter();
  const { darkMode } = useTheme();
  const backgroundImage = darkMode ? bgPencilGray : bgPencilYellow;

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white sm:py-20 py-10">
      <div
        className="relative bg-white dark:bg-black text-black dark:text-white py-16 px-4 h-screen sm:px-6 md:px-10 lg:px-16 bg-no-repeat bg-right duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center ", // start from center, align to right
          backgroundSize: "80% 100%", // full height, auto width
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <p className="text-primary text-sm md:text-base font-asgard font-extrabold uppercase tracking-[0.22em] mb-4">
            Membership Section
          </p>

          <h2 className="text-primary text-3xl md:text-5xl font-asgard font-extrabold uppercase mb-6 tracking-wide leading-tight">
            Don&apos;t Just Disrupt, Do It With Distinction
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-glancyr leading-8 font-light mb-6 px-4 md:px-12 text-center">
            Because this is where Chennai&apos;s advertising story is written every
            day. At Ad Club Madras, you don&apos;t just watch the industry evolve,
            you&apos;re part of the movement that drives it. From the iconic MADDYs
            that celebrate creativity, to PGDAM that shapes tomorrow&apos;s leaders,
            we&apos;ve set the stage, and the spotlight is on you.
          </p>

          <p className="text-sm sm:text-base md:text-lg font-glancyr text-primary leading-8 mb-10">
            Join us to Inspire. Educate. Engage. And be at the heart of India&apos;s
            advertising community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate.push(`/membership`)}
              className="flex items-center group w-fit"
            >
              <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                BECOME A MEMBER NOW
              </span>
              <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="flex items-center group w-fit"
            >
              <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                CLICK HERE
              </span>
              <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.a>
          </div>

          <p className="mt-6 font-glancyr text-sm sm:text-base text-white/85">
            For more information call{" "}
            <a href="tel:8248717152" className="text-primary hover:underline">
              8248717152
            </a>{" "}
            or email{" "}
            <a
              href="mailto:admin@adclubmadras.com"
              className="text-primary hover:underline"
            >
              admin@adclubmadras.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

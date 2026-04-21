"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function JoinUsSection() {
  const router = useRouter();

  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-stretch gap-4 rounded-[12px] border border-white/10 bg-white/5 p-3 sm:p-4 md:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left Content */}
          <div className="rounded-[10px] bg-[#0a0a0a] p-5 sm:p-6 md:p-10">
            <div className="font-asgard inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-white/80">
              Membership
            </div>

            <h2 className="heading mt-6 !tracking-wider !text-[24px] sm:!text-[30px] md:!text-[36px]">
              DON’T JUST DISRUPT,
              <br />
              <span className="text-primary">DO IT WITH DISTINCTION</span>
            </h2>

            <div className="mt-8 space-y-4">
              <p className="text-phara !text-[13px] !leading-relaxed !text-white/70">
                Because this is where Chennai’s advertising story is written every day. At Ad Club Madras, you don’t just watch the industry evolve, you’re part of the movement that drives it. From the iconic MADDYs that celebrate creativity, to PGDAM that shapes tomorrow’s leaders, we’ve set the stage, and the spotlight is on you.
              </p>

              <p className="text-phara !text-[13px] !leading-relaxed !text-white/70">
                Join us to Inspire. Educate. Engage. And be the heartbeat of India’s advertising community.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                onClick={() => router.push("/membership")}
                className="group flex items-center w-fit"
              >
                <span className="px-6 py-3 text-sm md:text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                  BECOME A MEMBER NOW
                </span>
                <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                onClick={() => router.push("/contact")}
                className="group flex items-center w-fit"
              >
                <span className="px-6 py-3 text-sm md:text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                  BEGIN YOUR JOURNEY
                </span>
                <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </motion.button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex overflow-hidden rounded-[10px]">
            <img
              src="/assets/membership-banner.jpg"
              alt="Membership Ad Club Madras"
              className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 md:min-h-full"
            />
          </div>
        </motion.div>

        {/* Bottom Highlight Heading */}
        <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  className="relative mx-auto mt-20 flex max-w-5xl justify-center text-center"
>
  <div className="relative inline-block px-10 py-12">
    <svg
      className="absolute inset-x-0 top-1/2 h-[120%] w-full -translate-y-1/2 opacity-80"
      viewBox="0 0 700 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <ellipse
        cx="350"
        cy="100"
        rx="320"
        ry="75"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
        strokeDasharray="1000"
        style={{ filter: "drop-shadow(0 0 2px rgba(252, 192, 23, 0.5))" }}
      />
    </svg>

    <h3 className="font-asgard relative z-10 text-center text-[22px] font-bold uppercase tracking-[0.05em] text-white sm:text-[28px] md:text-[34px] leading-tight">
      STAY AHEAD OF THE CURVE BY
      <br />
      PARTICIPATING IN OUR UPCOMING EVENTS
    </h3>
  </div>
</motion.div>
      </div>
    </section>
  );
}

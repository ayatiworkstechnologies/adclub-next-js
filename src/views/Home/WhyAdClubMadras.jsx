"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

const bannerItems = [
  {
    title: "Inspire",
    text: "Meet the people, ideas, and creative work shaping what advertising can become.",
    image: "/assets/Events.png",
    cta: "Explore Events",
    path: "/events/inspire",
  },
  {
    title: "Educate",
    text: "Learn from programmes, talks, and industry sessions built for tomorrow's talent.",
    image: "/assets/pgda-banner.jpg",
    cta: "View Programmes",
    path: "/events/educate",
  },
  {
    title: "Engage",
    text: "Join a citywide community where bold campaigns, awards, and conversations find their stage.",
    image: "/events/eventbanner3.jpg",
    cta: "Join The Movement",
    path: "/events/engage",
  },
];

export default function WhyAdClubMadras({ layout = "default" }) {
  const navigate = useRouter();
  const isPanel = layout === "panel";
  const sectionClassName = isPanel
    ? ""
    : "bg-black px-4 py-20 text-white sm:px-8 md:px-16 lg:py-32";
  const containerClassName = isPanel ? "" : "mx-auto max-w-7xl";
  const slideItems = useMemo(() => [...bannerItems, bannerItems[0]], []);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasTransition, setHasTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev >= bannerItems.length) return prev;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSliderTransitionEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform"
    ) {
      return;
    }
    if (activeSlide < bannerItems.length) return;
    setHasTransition(false);
    setActiveSlide(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setHasTransition(true);
      });
    });
  };

  return (
    <section className={sectionClassName}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={containerClassName}
      >
        <div className="mb-16 flex flex-col justify-between gap-12 md:mb-24 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary"></span>
              <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
                Why Ad Club Madras?
              </p>
            </div>
            <h2 className="font-asgard text-2xl font-extrabold uppercase leading-[1.1] sm:text-3xl lg:text-4xl">
              Don&apos;t just attend events, join the movement
            </h2>
          </div>
          <div className="max-w-lg space-y-6 lg:pb-3">
            <p className="font-glancyr text-lg leading-relaxed text-white/80">
              Be part of a community that{" "}
              <span className="font-bold text-white">
                defines advertising in India
              </span>
              , right here in Chennai, where creativity thrives, careers
              accelerate, and bold ideas find their stage.
            </p>
            <p className="font-asgard text-2xl font-extrabold uppercase tracking-wide text-primary">
              Inspire. Educate. Engage.
            </p>
          </div>
        </div>

        <div className="group relative w-full overflow-hidden">
          <div
            className="flex"
            onTransitionEnd={handleSliderTransitionEnd}
            style={{
              width: `${slideItems.length * 100}%`,
              transform: `translateX(-${
                activeSlide * (100 / slideItems.length)
              }%)`,
              transition: hasTransition
                ? "transform 0.8s cubic-bezier(0.87, 0, 0.13, 1)"
                : "none",
            }}
          >
            {slideItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`relative shrink-0 overflow-hidden bg-black ${
                  isPanel ? "h-[50vh] min-h-[400px]" : "h-[70vh] min-h-[500px]"
                }`}
                style={{ width: `${100 / slideItems.length}%` }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} banner`}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity transition duration-1000 group-hover:scale-105 group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                  <div className="max-w-3xl">
                    <span className="mb-4 inline-block font-asgard text-sm font-bold uppercase tracking-widest text-primary">
                      {String((index % bannerItems.length) + 1).padStart(
                        2,
                        "0",
                      )}{" "}
                      / {String(bannerItems.length).padStart(2, "0")}
                    </span>
                    <h3 className="mb-4 font-asgard text-5xl font-extrabold uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
                      {item.title}
                    </h3>
                    <p className="mb-8 max-w-xl font-glancyr text-lg leading-relaxed text-white/80">
                      {item.text}
                    </p>

                    <button
                      onClick={() => navigate.push(item.path)}
                      className="group/btn flex w-fit flex-row items-center gap-4"
                    >
                      <span className="relative overflow-hidden rounded-full border border-white/30 bg-transparent px-8 py-4 font-asgard text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 group-hover/btn:border-primary group-hover/btn:bg-primary group-hover/btn:text-black">
                        <span>{item.cta}</span>
                      </span>
                      <span className="flex items-center justify-center rounded-full bg-white/10 p-4 text-white backdrop-blur-sm hover:rotate-45 transition-all duration-300 group-hover/btn:bg-primary group-hover/btn:text-black">
                        <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-45" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-8 top-8 z-10 flex gap-4 sm:right-12 sm:top-12">
            <button
              onClick={() =>
                setActiveSlide((prev) =>
                  prev > 0 ? prev - 1 : bannerItems.length - 1,
                )
              }
              className="rounded-full border border-white/20 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => prev + 1)}
              className="rounded-full border border-white/20 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:text-primary"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

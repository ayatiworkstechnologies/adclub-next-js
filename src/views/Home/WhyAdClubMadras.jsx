"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const bannerItems = [
  {
    title: "Inspire",
    text: "Meet the people, ideas, and creative work shaping what advertising can become.",
    image: "/assets/Events.png",
    cta: "Explore Events",
  },
  {
    title: "Educate",
    text: "Learn from programmes, talks, and industry sessions built for tomorrow's talent.",
    image: "/assets/pgda-banner.jpg",
    cta: "View Programmes",
  },
  {
    title: "Engage",
    text: "Join a citywide community where bold campaigns, awards, and conversations find their stage.",
    image: "/events/eventbanner3.jpg",
    cta: "Join The Movement",
  },
];

function BannerButton({ children }) {
  return (
    <button type="button" className="flex w-fit items-center group/btn">
      <span className="rounded-full bg-white px-6 py-3 font-asgard text-base font-bold uppercase text-black transition duration-300 hover:bg-primary group-hover/btn:bg-primary group-hover/btn:text-black">
        {children}
      </span>
      <span className="flex items-center justify-center rounded-full bg-white px-4 py-3 text-black transition duration-300 hover:bg-primary group-hover/btn:bg-primary group-hover/btn:text-black">
        <ArrowRight className="h-5 w-5" />
      </span>
    </button>
  );
}

export default function WhyAdClubMadras({ layout = "default" }) {
  const isPanel = layout === "panel";
  const sectionClassName = isPanel
    ? ""
    : "bg-black px-4 py-16 text-white sm:px-8 md:px-16 lg:py-24";
  const containerClassName = isPanel ? "" : "mx-auto max-w-6xl";
  const slideItems = useMemo(() => [...bannerItems, bannerItems[0]], []);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasTransition, setHasTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSliderTransitionEnd = () => {
    if (activeSlide !== bannerItems.length) return;
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
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        className={containerClassName}
      >
        <div className="grid gap-8 rounded-[18px] border border-primary/40 bg-white/[0.04] p-6 shadow-xl sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
          <div className="flex flex-col justify-between gap-10">
            <div>
            <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
              Why Ad Club Madras?
            </p>
            <h2 className="mt-4 font-asgard text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Don't just attend events, join the movement.
            </h2>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-glancyr text-base leading-8 text-white/82 sm:text-lg">
              Be part of a community that defines advertising in India, right
              here in Chennai, where creativity thrives, careers accelerate, and
              bold ideas find their stage. For decades, Ad Club Madras has been
              the place where the industry's brightest minds come together to
              inspire, educate, and engage.
            </p>
            <p className="font-glancyr text-base leading-8 text-white/82 sm:text-lg">
              This is more than a calendar of events; it's a movement that keeps
              the pulse of advertising alive and future-ready.
            </p>
            <p className="font-asgard text-2xl font-extrabold uppercase text-primary sm:text-3xl">
              Inspire. Educate. Engage.
            </p>
            <p className="font-glancyr text-base leading-7 text-white/72">
              That's not just our tagline, it's our DNA.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[18px] border border-white/10">
          <div
            className="flex"
            onTransitionEnd={handleSliderTransitionEnd}
            style={{
              width: `${slideItems.length * 100}%`,
              transform: `translateX(-${activeSlide * (100 / slideItems.length)}%)`,
              transition: hasTransition ? "transform 0.7s ease-in-out" : "none",
            }}
          >
            {slideItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`group relative shrink-0 overflow-hidden bg-black ${
                  isPanel
                    ? "min-h-[320px] sm:min-h-[420px]"
                    : "min-h-[440px] sm:min-h-[520px]"
                }`}
                style={{ width: `${100 / slideItems.length}%` }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} banner`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/82 to-transparent p-6 pt-24 sm:p-8 sm:pt-32 lg:p-10 lg:pt-40">
                  <span className="rounded-full bg-primary px-4 py-2 font-glancyr text-sm font-bold text-black">
                    Banner {String((index % bannerItems.length) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-asgard text-4xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-glancyr text-base leading-7 text-white/82 sm:text-lg">
                    {item.text}
                  </p>
                  <div className="mt-7">
                    <BannerButton>{item.cta}</BannerButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

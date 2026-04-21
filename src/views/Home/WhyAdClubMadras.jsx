"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Inspire",
    subtitle:
      "Where creativity meets recognition and ideas get their spotlight.",
    items: ["MADDYs", "AdTalks", "Deadline", "Sparks"],
    image: "/assets/home-event-1.png",
    link: "/events",
  },
  {
    title: "Educate",
    subtitle:
      "Where knowledge sharpens careers and learning feels like a creative campaign.",
    items: ["PGDAM", "Elevate", "Admates"],
    image: "/assets/home-event-2.png",
    link: "/events",
  },
  {
    title: "Engage",
    subtitle: "Where community and creativity collide, and sometimes compete.",
    items: ["Headline", "Brand & Brew", "Adrenaline"],
    image: "/assets/home-event-3.png",
    link: "/events",
  },
];

export default function WhyAdClubMadras() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 7000);
    return () => clearInterval(interval);
  }, [goNext]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="heading !leading-tight sm:!text-[30px] md:!text-[32px]">
            <span className="text-primary">WHY</span> AD CLUB MADRAS?
          </p>

          <h2 className="mt-4 font-glancyr text-[16px] font-bold text-white sm:text-[18px]">
            Don&apos;t just attend events, join the movement.
          </h2>

          <p className="text-phara mx-auto mt-8 max-w-4xl !text-white/80">
            Be part of a community that defines advertising in India, right here
            in Chennai, where creativity thrives, careers accelerate, and bold
            ideas find their stage. For decades, Ad Club Madras has been the
            place where the industry&apos;s brightest minds come together to{" "}
            <span className="font-bold text-white">
              inspire, educate, and engage.
            </span>{" "}
            This is more than a calendar of events; it&apos;s a movement that
            keeps the pulse of advertising alive and future-ready.
          </p>

          <p className="font-asgard mt-10 text-[18px] font-extrabold uppercase tracking-[0.08em] text-primary sm:text-[22px]">
            INSPIRE. EDUCATE. ENGAGE.
          </p>
        </motion.div>

        {/* Slider Card */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-12 overflow-hidden rounded-[20px] border border-white/10"
        >
          <div className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Light bottom gradient only — no dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text content */}
            <div className="absolute inset-0 flex items-end px-6 pb-10 sm:px-10 sm:pb-14 md:px-16 md:pb-16">
              <div className="w-full max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <h3 className="font-asgard text-3xl font-extrabold uppercase leading-none tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">
                      {activeSlide.title}
                    </h3>

                    <p className="mt-2 font-glancyr text-base font-bold text-white sm:text-lg md:text-xl">
                      {activeSlide.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-asgard text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:text-[14px]">
                      {activeSlide.items.map((item, index) => (
                        <div key={item} className="flex items-center gap-6">
                          {index !== 0 && (
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          )}
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      type="button"
                      onClick={() => router.push(activeSlide.link)}
                      className="group flex items-center w-fit mt-8"
                    >
                      <span className="px-6 py-3 text-sm md:text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                        LEARN MORE
                      </span>
                      <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary sm:h-12 sm:w-12"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary sm:h-12 sm:w-12"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 md:bottom-12 md:right-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { eventData } from "@/data/EventsData"; // ✅ import your real data here

export default function LatestNews() {
  const navigate = useRouter(); 
  const [startIndex, setStartIndex] = useState(0);
  const timeoutRef = useRef(null);
  const visibleCount = 3;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % eventData.length);
    }, 4000);
    return () => resetTimeout();
  }, [startIndex]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(eventData[(startIndex + i) % eventData.length]);
    }
    return items;
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 transition-colors duration-500">
      {/* Heading */}
      <motion.h2
        className="text-center font-asgard font-extrabold text-3xl uppercase mb-12 tracking-wider"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Latest News
      </motion.h2>

      {/* Carousel */}
      <div className="overflow-hidden max-w-7xl mx-auto">
        <motion.div className="flex gap-6" animate={{ x: 0 }} transition={{ duration: 0.8 }}>
          {getVisibleItems().map((item, idx) => {
            const isCenter = idx === 1;
            return (
              <motion.div
                key={item.id || idx}
                className={`w-full md:w-1/3 flex-shrink-0 transform transition-transform duration-500 ${
                  isCenter ? "scale-110 z-10" : "scale-95 opacity-80"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="group">
                  {/* Image */}
                  <div className="w-full h-72 overflow-hidden rounded-md mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <p className="text-sm font-bold uppercase mb-4">{item.title}</p>

                  <div className="border-t border-black dark:border-white border-opacity-40 my-4" />

                  {/* Tag Button */}
                  <button
                    type="button"
                    className="text-[12px] uppercase border border-black hover:border-primary dark:border-white px-3 py-2 rounded-full inline-block mb-2 transition-colors duration-300 hover:bg-primary dark:hover:bg-yellow-300 hover:text-black"
                  >
                    {item.category || item.tag}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate.push(`/events`)}
          className="mt-8 inline-flex font-asgard items-center"
        >
          <span className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-primary dark:hover:bg-primary transition-all duration-300">
            VIEW ALL EVENTS
          </span>
          <span className="px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-primary dark:hover:bg-primary transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="h-5 w-5" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import { getGalleryPhotos } from "@/api/api" ;

export default function DiscoverMoments() {
  const navigate = useRouter();
  const [images, setImages] = useState([]);
  const marqueeControls = useAnimation();
  const marqueeRef = useRef();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await getGalleryPhotos();

        const filtered = (photos || [])
          .filter((item) => item.type === "gallery" && item.path)
          .slice(-15); // get last 15

        const paths = filtered.map((item) => item.path);
        setImages(paths);
      } catch (error) {
        console.error("Error fetching gallery photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 60, // smooth and slow
        ease: "linear",
      },
    });
  }, [marqueeControls]);

  const handleMouseEnter = () => marqueeControls.stop();
  const handleMouseLeave = () =>
    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 overflow-hidden transition-colors duration-500">
      <motion.h2
        className="text-center font-asgard font-extrabold text-3xl uppercase mb-12 tracking-wider"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Discover Our <br /> Moments
      </motion.h2>

      {/* Marquee Scroll */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={marqueeRef}
      >
        <motion.div className="flex gap-6 w-max" animate={marqueeControls}>
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden transition-transform duration-500 hover:rotate-3 hover:scale-105"
            >
              <img
                src={src}
                alt={`Moment ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate.push(`/gallery`)}
          className="flex items-center group w-fit mx-auto mt-8"
        >
          <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
            VIEW ALL PICS
          </span>
          <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
            <ArrowRight className="h-5 w-5" />
          </span>
        </motion.button>
      </div>
    </section>
  );
}

"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
const bgGraphic = "/assets/hero-fream.svg";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const maddyImage = "/maddys-2026-2.png"; // ✅ Ensure this is in `public` or correct `src/assets` path

export default function HeroSection() {
  const { darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`relative min-h-screen overflow-hidden md:px-8  py-5 sm:py-16 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-black text-white"
      }`}
    >
      <div
        className="relative z-10 sm:pt-32 pt-10 text-left overflow-hidden max-w-6xl mx-auto"
        style={{
          backgroundImage: `url(${bgGraphic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "40px",
        }}
      >
        <div className="relative flex flex-col md:flex-row  justify-start items-start ">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl px-2 font-asgard uppercase leading-tight tracking-tight"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-glancyr">65+</span> years
            <br /> young, still ahead of{" "}
            <span className="text-primary">the ad game.</span>
          </motion.h1>

          <motion.p
            className="md:absolute text-xs font-glancyr px-4 md:text-sm mt-8 md:mt-0 md:ml-10 max-w-md justify-end leading-relaxed tracking-tight"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              ...(isDesktop ? { marginLeft: "500px" } : {}),
            }}
          >
            Explore everything from Madras roots to modern advertising, disrupt
            with distinction.
          </motion.p>
        </div>

        {/* Maddy Image and Overlay Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full max-w-4xl mx-auto mt-12"
        >
          <div className="relative w-full px-5">
            {/* Maddy Image */}
            <img
              src={maddyImage}
              alt="Maddy 2025"
              className="rounded-md shadow-lg w-full object-cover"
            />

            {/* Left Overlay: Text + Button */}
            {/* Left Bottom Overlay: Text + Button */}
            <div className="absolute bottom-[20%] left-6 sm:bottom-[15%] md:bottom-[12%] lg:bottom-16 md:left-10 text-left z-20">
              <h2 className="hidden sm:block text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-3 font-glancyr text-black drop-shadow-lg">
                MADDYS 2026
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  window.open("https://maddys2026.adclubmadras.com/", "_blank")
                }
                className="flex items-center group w-fit mt-8"
              >
                <span className="px-6 py-3 text-sm md:text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                  EXPLORE MORE
                </span>
                <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </motion.button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -top-10 -right-7 md:-top-12 md:-right-12 w-28 h-28 md:w-32 md:h-32">
              <div className="relative w-full h-full flex items-center justify-center rounded-full bg-black">
                <div className="absolute w-full h-full animate-spin-slow">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="circlePath"
                        d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text
                      fill="white"
                      fontSize="7"
                      fontWeight="bold"
                      letterSpacing="2"
                    >
                      <textPath href="#circlePath">
                        • SCROLL TO EXPLORE • SCROLL TO EXPLORE •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-primary z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m0 0l-6-6m6 6l6-6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

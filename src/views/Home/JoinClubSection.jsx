"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
const topicImage1 = "/assets/hero-img.svg";
const topicImage2 = "/assets/hero-img.svg";
const topicImage3 = "/assets/hero-img.svg";
const topicImage4 = "/assets/hero-img.svg";
const topicImage5 = "/assets/hero-img.svg";
import { useTheme } from "@/context/ThemeContext"; // ✅ Theme hook

const topics = [
  { title: "Networking Opportunities", image: topicImage1 },
  { title: "Workshops & Masterclasses", image: topicImage2 },
  { title: "Competitions", image: topicImage3 },
  { title: "Mentorship Programs", image: topicImage4 },
  { title: "Awards & Celebrations", image: topicImage5 },
];

export default function JoinTheClubSection() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const { darkMode } = useTheme(); // ✅ Get theme mode

  return (
    <section
      className={`py-20 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-xl mx-auto space-y-10 text-center relative z-10 px-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h3
              className={`text-2xl sm:text-3xl font-asgard font-extrabold transition-colors duration-300 ${
                hoverIndex === index
                  ? "text-primary"
                  : darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {topic.title}
            </h3>

            {/* Hover Elements */}
            {hoverIndex === index && (
              <div className="flex justify-center items-center mt-4 gap-4 transition-opacity duration-500 ease-in-out opacity-100 sm:flex-row flex-col">
                {/* Uncomment this block to show images if needed */}
                <div className="w-48 h-28 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                  />
                </div>

                <button
                  className={`rounded-full p-3 shadow-lg hover:scale-110 transition-transform ${
                    darkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Join Button */}
        <div className="pt-12">
          <button className="bg-primary font-asgard text-black font-extrabold px-6 py-3 transform rotate-[-5deg] hover:rotate-0 transition-all text-3xl shadow-lg">
            JOIN THE CLUB
          </button>
        </div>
      </div>
    </section>
  );
}

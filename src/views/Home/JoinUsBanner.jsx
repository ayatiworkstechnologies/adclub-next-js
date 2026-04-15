"use client";
import React from "react";
const Joinus = "/assets/Joinus-bannar.svg";

export default function JoinUsBanner() {
  return (
    <section className="relative bg-primary border-y-4 border-black w-full overflow-hidden">
      {/* Marquee Container */}
      <div className="flex items-center animate-marquee gap-8 sm:gap-12 whitespace-nowrap py-3 sm:py-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-shrink-0 px-2 sm:px-4">
            <img
              src={Joinus}
              alt="Join Us"
              className="h-40 sm:h-40 md:h-50 lg:h-80 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

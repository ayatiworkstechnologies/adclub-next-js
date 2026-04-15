"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- Newsletter Data ---------------- */
const MEDIA_COVERAGE = [
  {
    title: "Maddy's 2025",
    date: "Dec 2025",
    pdf: "/pdfs/maddys-2025.pdf",
  },
  {
    title: "The Feature of Advertising",
    date: "Jan 2026",
    pdf: "/pdfs/advertising-2026.pdf",
  },
];

const safeFormatDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  return isNaN(d)
    ? val
    : d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
    });
};

export default function NewsLetter() {
  const [query, setQuery] = useState("");
  const [activeYear, setActiveYear] = useState("2026");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    let results = MEDIA_COVERAGE.filter((item) => {
      if (!item.date) return false;
      return item.date.includes(activeYear);
    });

    const q = query.trim().toLowerCase();
    if (q) {
      results = results.filter((r) => r.title.toLowerCase().includes(q));
    }
    return results;
  }, [query, activeYear]);

  return (
    <section className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-asgard font-bold text-primary"
        >
          HEADLINE
        </motion.h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-4 sm:gap-8 mb-10 text-sm sm:text-base font-bold uppercase font-glancyr">
        <button
          className="p-1 rounded opacity-40 cursor-not-allowed"
          aria-label="Previous tabs"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        <div className="flex gap-4 sm:gap-8 items-center">
          {["2025", "2026"].map((year, index) => (
            <React.Fragment key={year}>
              <button
                onClick={() => setActiveYear(year)}
                className={`relative z-10 px-2 py-2 text-sm sm:text-base lg:text-lg tracking-wider font-bold transition duration-300 ${activeYear === year
                  ? "text-primary"
                  : "text-white hover:text-primary"
                  }`}
              >
                {year}
              </button>
              {index !== 1 && (
                <span className="text-primary font-bold text-lg select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          className="p-1 rounded opacity-40 cursor-not-allowed"
          aria-label="Next tabs"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Search */}
      <div className="mb-12">
        <div className="relative w-full md:w-96 mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search newsletters…"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary transition"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/60 transition">
              {/* Left content */}
              <div>
                <div className="text-xs uppercase tracking-wider text-primary mb-2">
                  {safeFormatDate(item.date)}
                </div>
                <h3 className="text-xl md:text-2xl font-glancyr group-hover:underline">
                  {item.title}
                </h3>
              </div>

              {/* Right actions */}
              <div className="flex gap-3">
                {/* Preview */}
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black transition text-sm"
                >
                  Preview
                </a>

                {/* Download */}
                <a
                  href={item.pdf}
                  download
                  className="px-5 py-2 rounded-lg bg-primary text-black hover:opacity-90 transition text-sm"
                >
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

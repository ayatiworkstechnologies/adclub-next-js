"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail } from "lucide-react";

const facilities = [
  "Open Discussions & Business Pitches",
  "Client Meetings Forums",
  "Delegate & Staff Presentations",
  "Seminars | Workshops | More",
];

const tariffRows = [
  {
    day: "Monday–Friday (Full Day)",
    member: "₹3,250 + GST",
    nonMember: "₹4,250 + GST",
  },
  {
    day: "Saturday (Full Day)",
    member: "₹3,750 + GST",
    nonMember: "₹4,750 + GST",
  },
  {
    day: "Sunday & Public Holidays",
    member: "₹4,250 + GST",
    nonMember: "₹5,250 + GST",
  },
  {
    day: "Projector Charges",
    member: "₹750 + GST",
    nonMember: "₹1,250 + GST",
  },
];

const bookingNotes = [
  "Full-day booking timing: 9:30 AM to 5:30 PM",
  "Half-day booking is charged at 60% of the full-day tariff",
  "Advance payment is required to confirm booking",
  "Alcohol is strictly prohibited on the premises",
];

export default function FacilitiesSection() {
  return (
    <section className="bg-black px-4 py-12 text-white text-left sm:px-6 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top Intro */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
        >
          <div>
            <h2 className="font-asgard text-[28px] font-extrabold uppercase leading-[1.08] tracking-[-0.03em] text-white sm:text-[34px] md:text-[42px]">
              <span className="text-primary">The Hub:</span> Where
              <br />
              Visionaries
              <br />
              Converge &
              <br />
              Possibilities
              <br />
              Multiply.
            </h2>
          </div>

          <div className="space-y-4">
            <p className="font-glancyr text-[12px] leading-[1.9] text-white/68 sm:text-[12.5px] md:text-[13px]">
              Welcome to The HUB, a dynamic coworking space in T. Nagar that
              blends the legacy of Ad Club Madras with the pulse of modern
              enterprise. Designed for thinkers, creators, and changemakers,
              this is more than just a venue — it is a launchpad for ideas,
              collaboration, and growth.
            </p>

            <p className="font-glancyr text-[12px] leading-[1.9] text-white/68 sm:text-[12.5px] md:text-[13px]">
              Whether you are hosting a business pitch, a client presentation, a
              strategic seminar, or a creative workshop, the space adapts to
              your ambition. With a longstanding heritage of nurturing
              advertising excellence, The HUB now opens its doors to a new
              generation of professionals seeking an inspiring and accessible
              coworking space in Chennai.
            </p>
          </div>
        </motion.div>

        {/* Image + Why Choose */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-[0.82fr_1.18fr]"
        >
          <div className="overflow-hidden rounded-[10px]">
            <img
              src="/assets/home-img-2.png"
              alt="The Hub coworking space"
              className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="rounded-[10px] border border-white/10 bg-[#0a0a0a] p-5 sm:p-6 md:p-7">
            <h3 className="font-asgard text-[18px] font-extrabold uppercase tracking-[0.04em] text-primary sm:text-[20px]">
              Why Choose The Hub?
            </h3>

            <div className="mt-5 space-y-4">
              {[
                "Legacy with vision — backed by one of India’s earliest and most respected advertising communities.",
                "Inclusive & evolved — open to both members and non-members, encouraging wider collaboration.",
                "Dynamic programming — ideal for talks, debates, presentations, meetings, and industry networking.",
                "Affordable excellence — a premium-feel venue in T. Nagar without the premium rental barrier.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="font-glancyr text-[12px] leading-[1.9] text-white/68 sm:text-[12.5px] md:text-[13px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <h3 className="font-asgard text-[16px] font-extrabold uppercase tracking-[0.05em] text-primary sm:text-[18px]">
            Facilities That Empower
          </h3>

          <p className="font-glancyr mt-3 text-[12px] leading-[1.9] text-white/65 sm:text-[12.5px] md:text-[13px]">
            The HUB coworking space offers a thoughtfully curated environment
            for:
          </p>

          <div className="mt-5 space-y-4">
            {facilities.map((item) => (
              <div
                key={item}
                className="font-asgard border-b border-white/10 pb-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-white/88 sm:text-[12.5px] md:text-[13px]"
              >
                <span className="text-primary">{item.split(" | ")[0]}</span>
                {item.includes("|") && (
                  <span className="text-white/88">
                    {" "}
                    | {item.split(" | ")[1]}
                  </span>
                )}
                {!item.includes("|") && item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tariff */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <h3 className="font-asgard text-[16px] font-extrabold uppercase tracking-[0.05em] text-primary sm:text-[18px]">
            Venue Tariff & Booking Details
          </h3>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[10px] border border-white/10">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary">
                      Day
                    </th>
                    <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary">
                      Member
                    </th>
                    <th className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary">
                      Non-Member
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tariffRows.map((row, index) => (
                    <tr
                      key={row.day}
                      className={`border-b border-white/10 ${
                        index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                      }`}
                    >
                      <td className="font-glancyr px-4 py-3 text-[12px] leading-[1.7] text-white/82">
                        {row.day}
                      </td>
                      <td className="font-glancyr px-4 py-3 text-[12px] font-semibold leading-[1.7] text-primary">
                        {row.member}
                      </td>
                      <td className="font-glancyr px-4 py-3 text-[12px] font-semibold leading-[1.7] text-white/60">
                        {row.nonMember}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              {bookingNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-3 rounded-[10px] border border-white/8 bg-[#0a0a0a] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="font-glancyr text-[12px] leading-[1.8] text-white/68 sm:text-[12.5px]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <h3 className="font-asgard text-[16px] font-extrabold uppercase tracking-[0.05em] text-primary sm:text-[18px]">
            Contact Details
          </h3>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 font-glancyr text-[12px] text-white/80 sm:text-[13px]">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:8248717152" className="hover:text-primary">
                8248717152
              </a>
            </div>

            <div className="flex items-center gap-3 font-glancyr text-[12px] text-white/80 sm:text-[13px]">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:admin@adclubmadras.com"
                className="hover:text-primary"
              >
                admin@adclubmadras.com
              </a>
            </div>
          </div>

          <p className="font-glancyr mt-5 max-w-4xl text-[12px] leading-[1.9] text-white/62 sm:text-[12.5px] md:text-[13px]">
            Discover a coworking experience that is as ambitious as you are.
            Book The HUB and be part of a community that celebrates creativity,
            connection, and continuous evolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

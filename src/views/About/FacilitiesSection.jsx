"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  ClipboardList,
  Presentation,
  FileText,
  UsersRound,
  Mic,
  Sliders,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const facilities = [
  { icon: <Users className="h-5 w-5" />, label: "Briefing Sessions" },
  { icon: <Briefcase className="h-5 w-5" />, label: "Business Pitches" },
  { icon: <ClipboardList className="h-5 w-5" />, label: "Client Meetings" },
  { icon: <FileText className="h-5 w-5" />, label: "Forums" },
  { icon: <Presentation className="h-5 w-5" />, label: "Sales Meets" },
  { icon: <UsersRound className="h-5 w-5" />, label: "Presentations" },
  { icon: <Mic className="h-5 w-5" />, label: "Seminars" },
  { icon: <Sliders className="h-5 w-5" />, label: "Workshops & More" },
];

const tariffRows = [
  { day: "Monday–Friday (Full Day)", member: "3,250", nonMember: "4,250" },
  { day: "Saturday (Full Day)", member: "3,750", nonMember: "4,750" },
  { day: "Sunday & Public Holidays", member: "4,250", nonMember: "5,250" },
  { day: "Projector Charges", member: "750", nonMember: "1,250" },
];

const bookingNotes = [
  "Full Day Timing: 9:30 AM to 5:30 PM",
  "Half Day Pricing: 60% of full-day rates",
  "GST @18% applicable",
  "Advance payment required for booking",
  "Alcohol is strictly prohibited on premises",
];

export default function FacilitiesSection() {
  return (
    <section className="min-h-screen bg-black px-6 py-12 text-white sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="font-asgard text-2xl font-extrabold uppercase leading-tight text-primary sm:text-4xl">
            The Hub: Where Visionaries Converge & Possibilities Multiply.
          </h2>

          <p className="font-glancyr text-sm leading-8 text-white/85 sm:text-base">
            Welcome to The HUB, a dynamic coworking space in T.Nagar that blends the heritage of Advertising Club
            Madras with the pulse of modern enterprise. Designed for thinkers, creators, and changemakers, The HUB is
            more than just a venue — it&apos;s a launchpad for ideas, collaboration, and growth.
          </p>

          <p className="font-glancyr text-sm leading-8 text-white/85 sm:text-base">
            Whether you&apos;re hosting a high-stakes business pitch, a client presentation, a creative workshop, or a
            strategic seminar, our space adapts to your ambition. With over 65 years of legacy in nurturing
            advertising excellence, we now open our doors to a new generation of professionals seeking an affordable
            coworking space in Chennai that&apos;s both inspiring and inclusive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-left"
        >
          <h3 className="font-asgard text-xl font-bold uppercase text-primary sm:text-2xl">Why Choose The HUB?</h3>
          <ul className="mt-4 space-y-3 font-glancyr text-sm leading-7 text-white/88 sm:text-base">
            <li>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Legacy with Vision:</strong> Backed by one of India&apos;s oldest
                  advertising clubs, The HUB is rooted in credibility and driven by innovation.
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Inclusive & Evolved:</strong> Open to members and non-members alike,
                  our space welcomes diverse voices and ideas.
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Dynamic Programming:</strong> From speaker series and debates to award
                  shows and networking events, The HUB is always buzzing.
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Affordable Excellence:</strong> A premium coworking space in T.Nagar
                  without the premium price tag — ideal for startups, freelancers, and established teams alike.
                </span>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="font-asgard text-xl font-bold uppercase text-primary sm:text-2xl">Facilities That Empower</h3>
          <p className="font-glancyr text-sm leading-8 text-white/85 sm:text-base">
            The HUB (coworking space) offers a thoughtfully curated environment for:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-primary/25 bg-primary/10 p-4 text-white"
              >
                <div className="mb-2 text-primary">{item.icon}</div>
                <p className="font-asgard text-sm font-bold uppercase leading-6">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h3 className="font-asgard text-xl font-bold uppercase text-primary sm:text-2xl">
            Venue Tariff & Booking Details
          </h3>

          <div className="overflow-x-auto rounded-xl border border-primary/50">
            <table className="w-full min-w-[640px] text-left text-sm font-glancyr sm:text-base">
              <thead className="bg-primary text-black">
                <tr>
                  <th className="px-4 py-3 font-asgard uppercase">Day</th>
                  <th className="px-4 py-3 font-asgard uppercase">Member (₹)</th>
                  <th className="px-4 py-3 font-asgard uppercase">Non-Member (₹)</th>
                </tr>
              </thead>
              <tbody>
                {tariffRows.map((row) => (
                  <tr key={row.day} className="border-t border-white/15">
                    <td className="px-4 py-3">{row.day}</td>
                    <td className="px-4 py-3">{row.member}</td>
                    <td className="px-4 py-3">{row.nonMember}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {bookingNotes.map((note) => (
              <div
                key={note}
                className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/[0.02] p-3 text-left"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="font-glancyr text-sm leading-6 text-white/88 sm:text-base">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/15 bg-white/[0.03] p-6"
        >
          <h3 className="font-asgard text-xl font-bold uppercase text-primary sm:text-2xl">Contact Details</h3>

          <div className="mt-4 space-y-3 font-glancyr text-sm text-white/88 sm:text-base">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:8248717152" className="hover:underline">8248717152</a>
              <span>/</span>
              <a href="tel:04442694778" className="hover:underline">044-42694778</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:admin@adclubmadras.com" className="hover:underline">
                admin@adclubmadras.com
              </a>
            </p>
          </div>

          <p className="mt-6 font-glancyr text-sm leading-8 text-white/85 sm:text-base">
            Discover a coworking experience that&apos;s as ambitious as you are. Book The HUB today and be part of a
            community that celebrates creativity, connection, and continuous evolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

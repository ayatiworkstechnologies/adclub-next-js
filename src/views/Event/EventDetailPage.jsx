"use client";
import { useRouter, useParams } from 'next/navigation';
import React, { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";
import { getEventsSlug } from "@/api/api";
import Loader from "@/components/Loader";

export default function EventDetailPage() {
  const { eventSlug } = useParams();
  const navigate = useRouter();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Correct seconds-to-time converter (seconds since midnight)
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "Not Available";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHour = ((hours + 11) % 12) + 1; // convert to 12-hour
    const displayMin = minutes.toString().padStart(2, "0");

    return `${displayHour}:${displayMin} ${ampm}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const delay = new Promise((res) => setTimeout(res, 1000));
        const events = await getEventsSlug("all");
        const found = events.find((e) => e.eventSlug === eventSlug);
        await delay;
        setEvent(found || null);
      } catch (err) {
        console.error("Failed to load event:", err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [eventSlug]);

  if (loading) {
    return <Loader />;
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Event not found</p>
      </div>
    );
  }

  const {
    eventTitle,
    eventDescription,
    eventDate,
    eventTime,
    eventEndTime,
    reportingTime,
    eventVenue,
    memberFee,
    nonMemberFee,
    memberFeeText,
    streaming_link,
    eventPoster,
  } = event;

  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 mt-10 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* 🔙 Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate.push(-1)}
            className="flex items-center gap-2 px-4 py-2 border font-primary border-primary bg-primary/10 text-sm text-gray-300 rounded-full transition-all duration-200 hover:bg-primary hover:text-white active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{eventTitle}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="space-y-4">
            <Info label="Date" value={eventDate || "N/A"} />

            {/* ✅ Correctly formatted Start–End time */}
            <Info
              label="Time"
              value={
                eventTime
                  ? `${formatTime(eventTime)}${eventEndTime ? ` - ${formatTime(eventEndTime)}` : ""
                  }`
                  : "N/A"
              }
            />

            <Info label="Reporting Time" value={formatTime(reportingTime)} />
            <Info label="Venue" value={eventVenue || "N/A"} />
            <Info
              label="Entry Fee"
              value={
                memberFeeText
                  ? memberFeeText
                  : memberFee && nonMemberFee
                    ? `Members: ₹${memberFee}, Non Members: ₹${nonMemberFee}`
                    : "N/A"
              }
            />
            <Info
              label="Registration"
              value={
                streaming_link ? (
                  <a
                    href={streaming_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary"
                  >
                    Click to Register
                  </a>
                ) : (
                  "N/A"
                )
              }
            />
          </div>

          <div>
            <img
              src={eventPoster || "/assets/placeholder.jpg"}
              alt="Event Poster"
              className="rounded border border-primary object-contain w-full max-h-[400px]"
            />
          </div>
        </div>

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: eventDescription || "<p>No description available.</p>",
          }}
        />
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="text-sm">
      <span className="font-bold">{label}:</span>{" "}
      <span className="ml-1">{value}</span>
    </div>
  );
}

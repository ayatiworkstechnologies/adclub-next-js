"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Flame,
  GraduationCap,
  Sparkles,
  Trophy,
  Users2,
} from "lucide-react";
import { getEventsCategory, getEventsSlug } from "@/api/api";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function EventpagesLegacy() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryID, setActiveCategoryID] = useState("upcoming");
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useRouter();

  const TABS_VISIBLE = 4;

  const getTabIcon = (tabName = "") => {
    const normalized = tabName.toLowerCase();
    if (normalized.includes("all")) return CalendarDays;
    if (normalized.includes("upcoming")) return CalendarDays;
    if (normalized.includes("gyan")) return GraduationCap;
    if (normalized.includes("sports")) return Trophy;
    if (normalized.includes("madd")) return Flame;
    if (normalized.includes("adtalk")) return Sparkles;
    if (normalized.includes("deadline")) return Sparkles;
    if (normalized.includes("spark")) return Sparkles;
    if (normalized.includes("headline")) return Users2;
    return CalendarDays;
  };

  const formatTime = (seconds) => {
    if (seconds == null || isNaN(seconds)) return null;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const ampm = h >= 12 ? "PM" : "AM";
    const hh12 = ((h + 11) % 12) + 1;
    return `${hh12}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  const getDayMonthYear = (dateStr) => {
    if (!dateStr) return { day: "00", mon: "Mon", year: "0000", dow: "—" };
    const parts = dateStr.split("-");
    if (parts.length !== 3) return { day: "00", mon: "Mon", year: "0000", dow: "—" };
    const [y, m, d] = parts.map((part) => parseInt(part, 10));
    if (isNaN(y) || isNaN(m) || isNaN(d)) {
      return { day: "00", mon: "Mon", year: "0000", dow: "—" };
    }

    const date = new Date(y, m - 1, d);
    return {
      day: d.toString().padStart(2, "0"),
      mon: date.toLocaleString("default", { month: "short" }),
      year: y.toString(),
      dow: date.toLocaleString("default", { weekday: "short" }),
    };
  };

  const categoryMap = useMemo(() => {
    const map = new Map();
    categories.forEach((category) => map.set(category.id, category.name));
    return map;
  }, [categories]);

  const loadEventsBySlug = async (categorySlug, id) => {
    try {
      const response = await getEventsSlug(categorySlug);
      const sortedEvents = response.sort(
        (a, b) => new Date(b.eventDate || "1970-01-01") - new Date(a.eventDate || "1970-01-01")
      );
      setEvents(sortedEvents);
      setActiveCategoryID(id);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getEventsCategory();
        const formattedCategories = categoriesData.map((category) => ({
          id: category.id,
          name: category.categoryName,
          categorySlug: category.categorySlug,
        }));

        const defaultTabs = [
          { id: "all", name: "All", categorySlug: "all" },
          { id: "upcoming", name: "Upcoming", categorySlug: "upcoming" },
        ];

        const mergedTabs = [...defaultTabs, ...formattedCategories];
        setCategories(mergedTabs);
        loadEventsBySlug("all", "all");
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setStartIndex((value) => Math.max(0, value - 1));
  };

  const handleNext = () => {
    setStartIndex((value) => (value + TABS_VISIBLE < categories.length ? value + 1 : value));
  };

  const visibleTabs = categories.slice(startIndex, startIndex + TABS_VISIBLE);

  return (
    <section className="relative mt-20 min-h-screen overflow-hidden bg-black px-4 py-16 text-white sm:px-6 md:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex justify-end text-xs font-bold tracking-wide text-white sm:text-sm">
          Total Events: <span className="ml-2 text-primary">{events.length}</span>
        </div>

        <div className="mb-10 flex items-center justify-center gap-8 font-asgard text-sm font-bold uppercase sm:text-base">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`rounded p-1 ${startIndex === 0 ? "cursor-not-allowed opacity-40" : "hover:bg-white/10"}`}
            aria-label="Previous tabs"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <div className="flex items-center gap-8">
            {visibleTabs.map((category, index) => (
              <React.Fragment key={category.id ?? `tab-${index}`}>
                <div className="relative flex h-20 w-20 items-center justify-center">
                  {activeCategoryID === category.id && (
                    <div className="absolute inset-0 scale-110">
                      <DotLottieReact
                        src="/circleanime.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                  <button
                    onClick={() => loadEventsBySlug(category.categorySlug, category.id)}
                    className={`relative z-10 rounded-full px-4 py-2 text-xs font-bold uppercase transition duration-300 sm:text-sm ${
                      activeCategoryID === category.id ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {React.createElement(getTabIcon(category.name), { className: "h-4 w-4" })}
                      {category.name}
                    </span>
                  </button>
                </div>
                {index !== visibleTabs.length - 1 && <span className="select-none text-primary">|</span>}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + TABS_VISIBLE >= categories.length}
            className={`rounded p-1 ${
              startIndex + TABS_VISIBLE >= categories.length ? "cursor-not-allowed opacity-40" : "hover:bg-white/10"
            }`}
            aria-label="Next tabs"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        {events.map((event) => {
          const { dow, mon, year, day } = getDayMonthYear(event.eventDate);
          const startTime = formatTime(event.eventTime);
          const endTime = formatTime(event.eventEndTime);

          return (
            <div key={event.id} className="border-b border-dashed border-gray-700 pb-6">
              <div className="group flex flex-col gap-4 rounded-md p-4 transition hover:shadow-lg sm:grid sm:grid-cols-11">
                <div className="flex h-20 w-full flex-col items-center justify-center rounded bg-white text-xs font-bold text-black transition-colors group-hover:bg-primary sm:col-span-1">
                  <span className="uppercase">{dow || "—"}</span>
                  <span className="w-10 border-t border-black py-1" />
                  <span className="text-xl font-black leading-none">{day}</span>
                  <span className="text-[10px] font-bold uppercase">
                    {mon} {year}
                  </span>
                </div>

                <div className="p-3 sm:col-span-6">
                  <p className="flex items-start gap-2 break-words font-glancyr text-sm font-semibold sm:text-base lg:text-lg">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{event.eventTitle}</span>
                  </p>
                  {(startTime || endTime) && (
                    <p className="mt-2 text-xs opacity-80">
                      {startTime}
                      {endTime ? ` – ${endTime}` : ""}
                    </p>
                  )}
                </div>

                <span className="h-fit w-fit self-center rounded-full border border-white px-3 py-1 font-glancyr text-[10px] uppercase sm:col-span-2 sm:text-sm">
                  {categoryMap.get(event.eventCategoryID) ?? "Unknown"}
                </span>

                <div className="flex sm:col-span-2 sm:justify-end">
                  <button
                    onClick={() => navigate.push(`/events/${event.eventSlug}`)}
                    className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary transition-all hover:w-28 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    aria-label={`View details for ${event.eventTitle}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-black" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-black sm:text-xs">
                        View Details
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

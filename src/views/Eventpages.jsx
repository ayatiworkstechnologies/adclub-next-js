"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Flame,
  GraduationCap,
  Megaphone,
  Sparkles,
  Users2,
} from "lucide-react";
import { getEventsCategory, getEventsSlug } from "@/api/api";

const alternateTitles = [
  "Opt 1: What’s The Scene? / What’s Up? / What’s Next?",
  "Opt 2: The Ad ‘Clubbin’ Calendar",
  "Opt 3: ACM Line Up / ACM Affairs / ACM Playground / ACM Billboard",
];

const eventShowcaseCategories = [
  {
    id: "inspire",
    title: "Inspire",
    tagline: "Where creativity meets recognition",
    items: ["MADDYs", "AdTalks", "Deadline", "Sparks"],
    details: [
      "MADDYs: One full night (and sometimes day) of celebrating advertising every year between May and July. The MADDYs are the Oscars of Chennai’s ad world, where agencies proudly showcase craft, creativity, and campaigns that made the year unforgettable.",
      "AdTalks: Offline meet-ups typically on the last Friday of the month. A leading voice from the industry ecosystem—creative, marketing, digital, media, innovation—shares insights over an evening that feels more like a conversation than a lecture.",
      "Deadline: Our annual action-packed challenge. Teams crack a live client brief in just 72 hours, pushing creativity, strategy, and teamwork to the limit. Present ideas to industry judges and walk away with mentorship, internships, and bragging rights.",
      "Sparks: Fortnightly online sessions with speakers from across India and the globe. Twenty sessions a year, typically on the 2nd and 4th Thursday, designed to ignite fresh thinking and keep you plugged into the pulse of the industry.",
    ],
  },
  {
    id: "educate",
    title: "Educate",
    tagline: "Where knowledge sharpens careers",
    items: ["PGDAM", "ELEVATE", "Admates"],
    details: [
      "PGDAM: One flagship program per year. An offline course with 300+ hours of expert weekend sessions, designed and delivered by seasoned advertising professionals. It blends real-world insights with academic rigor, backed by internships, mentorship, and networking.",
      "Elevate: Six sessions a year, with offline workshops every alternate month. From AI and copywriting to planning, social, and media, this is hands-on training from professionals who know how to make knowledge stick.",
      "Admates: Our ongoing student connect program across colleges in Tamil Nadu, nurturing young talent by introducing advertising and marketing early with practical skills and industry exposure.",
    ],
  },
  {
    id: "engage",
    title: "Engage",
    tagline: "Where community and creativity collide",
    items: ["Headline", "Brand & Brew", "Adrenaline"],
    details: [
      "Headline: Twelve issues a year. Our monthly newsletter captures the pulse of the club—student achievements, workshops, industry insights, and the most impactful campaigns shaping Chennai’s creative landscape.",
      "Brand & Brew: Six events a year. Test your advertising and marketing savvy with our engaging quiz, held every two months. Sharpen your knowledge, win prizes, and stay connected with the club’s vibe.",
      "Adrenaline: The most awaited annual sports event of ACM. Four sports—badminton, snow bowling, pickleball, and cricket—where adrenaline rushes, friendships are forged, and legends are born.",
    ],
  },
];

const categoryIcons = {
  inspire: Sparkles,
  educate: GraduationCap,
  engage: Users2,
};

const groupKeywords = {
  inspire: ["maddys", "adtalks", "ad talks", "deadline", "sparks"],
  educate: ["pgdam", "elevate", "admates", "ad mates"],
  engage: ["headline", "brand & brew", "brand and brew", "adrenaline", "adrenalin"],
};

const groupCategorySlugHints = {
  inspire: ["madd", "adtalk", "deadline", "spark"],
  educate: ["pgdam", "elevate", "admate"],
  engage: ["headline", "brand", "brew", "adrenalin", "adrenaline"],
};

const groupCategoryTabs = {
  inspire: [
    { id: "maddys", label: "MADDYs", hints: ["madd"] },
    { id: "adtalks", label: "AdTalks", hints: ["adtalk"] },
    { id: "deadline", label: "Deadline", hints: ["deadline"] },
    { id: "sparks", label: "Sparks", hints: ["spark"] },
  ],
  educate: [
    { id: "pgdam", label: "PGDAM", hints: ["pgdam"] },
    { id: "elevate", label: "ELEVATE", hints: ["elevate"] },
    { id: "admates", label: "Admates", hints: ["admate"] },
  ],
  engage: [
    { id: "headline", label: "Headline", hints: ["headline"] },
    { id: "brand-brew", label: "Brand & Brew", hints: ["brand", "brew"] },
    { id: "adrenaline", label: "Adrenaline", hints: ["adrenalin", "adrenaline"] },
  ],
};

const eventTabs = [
  { id: "all", label: "All", slug: "all" },
  { id: "upcoming", label: "Upcoming", slug: "upcoming" },
  { id: "inspire", label: "Inspire", slug: "all" },
  { id: "educate", label: "Educate", slug: "all" },
  { id: "engage", label: "Engage", slug: "all" },
];

const tabIcons = {
  all: CalendarDays,
  upcoming: CalendarDays,
  inspire: Sparkles,
  educate: GraduationCap,
  engage: Users2,
  maddys: Flame,
  adtalks: Megaphone,
  deadline: Sparkles,
  sparks: Sparkles,
  pgdam: GraduationCap,
  elevate: GraduationCap,
  admates: Users2,
  headline: Megaphone,
  "brand-brew": Users2,
  adrenaline: Flame,
};

const heroHighlights = [
  "Chennai's advertising story",
  "campaigns for creativity",
  "workshops for wisdom",
  "festivals for fun",
  "billboard to what's next",
];

const categoryDetailHighlights = {
  inspire: ["MADDYs", "AdTalks", "Deadline", "Sparks", "72 hours", "mentorship", "internships"],
  educate: ["PGDAM", "Elevate", "Admates", "300+ hours", "internships", "mentorship"],
  engage: ["Headline", "Brand & Brew", "Adrenaline", "quiz", "badminton", "pickleball", "cricket"],
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightText = (text, phrases = []) => {
  let parts = [text];
  const sortedPhrases = [...phrases].sort((first, second) => second.length - first.length);

  sortedPhrases.forEach((phrase) => {
    const regex = new RegExp(`(${escapeRegExp(phrase)})`, "gi");
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      return part.split(regex).map((chunk, index) => {
        if (index % 2 === 1) {
          return (
            <span key={`${phrase}-${index}`} className="font-bold text-primary">
              {chunk}
            </span>
          );
        }
        return chunk;
      });
    });
  });

  return parts;
};

export default function AllEvents({ eventGroup = "all" }) {
  const isGroupPage = eventGroup !== "all";
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryID, setActiveCategoryID] = useState(
    groupKeywords[eventGroup] ? eventGroup : "all"
  );
  const [groupTabs, setGroupTabs] = useState([]);
  const [openShowcaseCategory, setOpenShowcaseCategory] = useState(
    groupKeywords[eventGroup] ? eventGroup : "inspire"
  );

  const navigate = useRouter();

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
    if (parts.length !== 3) {
      return { day: "00", mon: "Mon", year: "0000", dow: "—" };
    }
    const [y, m, d] = parts.map((p) => parseInt(p, 10));
    if (isNaN(y) || isNaN(m) || isNaN(d)) {
      return { day: "00", mon: "Mon", year: "0000", dow: "—" };
    }

    const date = new Date(y, m - 1, d);
    const mon = date.toLocaleString("default", { month: "short" });
    const dow = date.toLocaleString("default", { weekday: "short" });
    return {
      day: d.toString().padStart(2, "0"),
      mon,
      year: y.toString(),
      dow,
    };
  };

  const categoryMap = useMemo(() => {
    const map = new Map();
    categories.forEach((c) => map.set(c.id, c.name));
    return map;
  }, [categories]);

  const loadEventsByTab = async (tabId, categoriesForLookup = categories) => {
    try {
      const tab = eventTabs.find((item) => item.id === tabId) || eventTabs[0];
      let eventsFromApi = [];

      if (groupCategorySlugHints[tabId]) {
        const hints = groupCategorySlugHints[tabId];
        const matchedCategories = categoriesForLookup.filter((cat) => {
          const slug = (cat.categorySlug || "").toLowerCase();
          const name = (cat.name || "").toLowerCase();
          return hints.some(
            (hint) => slug.includes(hint) || name.includes(hint)
          );
        });

        const groupedResponses = await Promise.all(
          matchedCategories.map((cat) => getEventsSlug(cat.categorySlug))
        );
        eventsFromApi = groupedResponses.flat();
      } else {
        eventsFromApi = await getEventsSlug(tab.slug);
      }

      const dedupedEvents = Array.from(
        new Map(eventsFromApi.map((event) => [event.id, event])).values()
      );

      const sortedFilteredEvents = dedupedEvents.sort(
        (a, b) =>
          new Date(b.eventDate || "1970-01-01") -
          new Date(a.eventDate || "1970-01-01")
      );
      setEvents(sortedFilteredEvents);
      setActiveCategoryID(tabId);
    } catch (err) {
      console.error("Error loading events:", err);
    }
  };

  const loadEventsByCategorySlug = async (categorySlug, id) => {
    if (!categorySlug) {
      setEvents([]);
      setActiveCategoryID(id);
      return;
    }

    try {
      const res = await getEventsSlug(categorySlug);
      const sortedEvents = res.sort(
        (a, b) =>
          new Date(b.eventDate || "1970-01-01") -
          new Date(a.eventDate || "1970-01-01")
      );
      setEvents(sortedEvents);
      setActiveCategoryID(id);
    } catch (err) {
      console.error("Error loading events by category slug:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getEventsCategory();
        const formatted = categoriesData.map((cat) => ({
          id: cat.id,
          name: cat.categoryName,
          categorySlug: cat.categorySlug,
        }));

        setCategories(formatted);

        if (isGroupPage) {
          const configuredTabs = groupCategoryTabs[eventGroup] || [];
          const matchedTabs = configuredTabs.map((tab) => {
            const matchedCategory = formatted.find((cat) => {
              const slug = (cat.categorySlug || "").toLowerCase();
              const name = (cat.name || "").toLowerCase();
              return tab.hints.some(
                (hint) => slug.includes(hint) || name.includes(hint)
              );
            });

            return {
              id: tab.id,
              label: tab.label,
              categorySlug: matchedCategory?.categorySlug || "",
            };
          });

          setGroupTabs(matchedTabs);

          const firstAvailable = matchedTabs.find((tab) => tab.categorySlug);
          if (firstAvailable) {
            loadEventsByCategorySlug(firstAvailable.categorySlug, firstAvailable.id);
          } else {
            setEvents([]);
          }
        } else {
          loadEventsByTab("all", formatted);
        }
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchData();
  }, [eventGroup]);

  const toggleShowcaseCategory = (categoryId) => {
    setOpenShowcaseCategory((prev) => (prev === categoryId ? "" : categoryId));
  };

  const pageHeroTitle = isGroupPage
    ? `${eventGroup.charAt(0).toUpperCase()}${eventGroup.slice(1)} Events`
    : "What's The Scene?";
  const showcaseCategories = isGroupPage
    ? eventShowcaseCategories.filter((item) => item.id === eventGroup)
    : eventShowcaseCategories;

  return (
    <section className="relative mt-20 min-h-screen overflow-hidden bg-black px-4 py-16 text-white sm:px-6 md:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[18px] border border-primary/40 bg-white/[0.04] p-6 sm:p-8">
          <p className="font-asgard text-sm uppercase tracking-[0.24em] text-primary">
            Events
          </p>
          <h1 className="mt-4 font-asgard text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            {pageHeroTitle}
          </h1>
          <p className="mt-4 font-asgard text-xl font-bold uppercase text-primary sm:text-2xl">
            Inspire. Educate. Engage.
          </p>
          <p className="mt-5 max-w-4xl font-glancyr text-base leading-8 text-white/85 sm:text-lg">
            {highlightText(
              "Welcome to the calendar that keeps Chennai's advertising story alive. At Ad Club Madras, our experiences aren't just events — they're campaigns for creativity, workshops for wisdom, and festivals for fun. Think of this page as your billboard to what's next.",
              heroHighlights
            )}
          </p>

          {!isGroupPage && (
            <div className="mt-6">
              <p className="font-asgard text-xs uppercase tracking-[0.2em] text-white/70">
                Events Page Alternate Titles
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {alternateTitles.map((title) => (
                  <span
                    key={title}
                    className="rounded-full border border-white/20 px-4 py-2 font-glancyr text-xs text-white/80 sm:text-sm"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {showcaseCategories.map((category) => {
            const isOpen = isGroupPage || openShowcaseCategory === category.id;

            return (
              <div
                key={category.id}
                className="overflow-hidden rounded-[16px] border border-white/15 bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => toggleShowcaseCategory(category.id)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
                >
                  <div>
                    <h2 className="flex items-center gap-2 font-asgard text-3xl font-extrabold uppercase text-primary">
                      {React.createElement(categoryIcons[category.id] || Sparkles, {
                        className: "h-7 w-7",
                      })}
                      <span>{category.title}</span>
                    </h2>
                    <p className="mt-1 font-glancyr text-sm text-white/78 sm:text-base">
                      {category.tagline}
                    </p>
                    <p className="mt-2 font-glancyr text-xs uppercase tracking-[0.12em] text-white/65">
                      {category.items.join(" • ")}
                    </p>
                  </div>
                  {!isGroupPage && (
                    <ChevronDown
                      className={`h-6 w-6 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="space-y-3 border-t border-white/10 px-5 py-4 sm:px-6">
                    {category.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-xl border border-primary/20 bg-black/45 p-4"
                      >
                        <p className="font-glancyr text-sm leading-7 text-white/82 sm:text-base">
                          {highlightText(detail, categoryDetailHighlights[category.id] || [])}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end text-xs font-bold tracking-wide text-white sm:text-sm">
          Total Events: <span className="ml-2 text-primary">{events.length}</span>
        </div>

        {isGroupPage ? (
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 font-asgard text-sm font-bold uppercase sm:text-base">
            {groupTabs.map((tab) => {
              const TabIcon = tabIcons[tab.id] || Sparkles;
              return (
              <button
                key={tab.id}
                type="button"
                onClick={() => loadEventsByCategorySlug(tab.categorySlug, tab.id)}
                disabled={!tab.categorySlug}
                className={`rounded-full border px-5 py-2 transition ${
                  activeCategoryID === tab.id
                    ? "border-primary bg-primary text-black"
                    : "border-white/25 text-white hover:border-primary hover:text-primary"
                } ${!tab.categorySlug ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <span className="inline-flex items-center gap-2">
                  <TabIcon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
              );
            })}
          </div>
        ) : (
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 font-asgard text-sm font-bold uppercase sm:text-base">
            {eventTabs.map((tab) => {
              const TabIcon = tabIcons[tab.id] || CalendarDays;
              return (
              <button
                key={tab.id}
                type="button"
                onClick={() => loadEventsByTab(tab.id)}
                className={`rounded-full border px-5 py-2 transition ${
                  activeCategoryID === tab.id
                    ? "border-primary bg-primary text-black"
                    : "border-white/25 text-white hover:border-primary hover:text-primary"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <TabIcon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
              );
            })}
          </div>
        )}

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


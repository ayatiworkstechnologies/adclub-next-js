"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getEventsCategory, getEventsSlug } from "@/api/api";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const INSPIRE_SLUGS = ["awards", "sports", "quiz"];
const EDUCATE_SLUGS = ["gyan-series", "workshop", "adtalk"];

const getParentForSlug = (slug) => {
  if (!slug) return "engage";
  if (INSPIRE_SLUGS.includes(slug.toLowerCase())) return "inspire";
  if (EDUCATE_SLUGS.includes(slug.toLowerCase())) return "educate";
  return "engage"; // Fallback any new/unmapped APIs to engage
};

export default function EventpagesLegacy() {
  const [events, setEvents] = useState([]);
  const [rawCategories, setRawCategories] = useState([]);
  const [activeParentID, setActiveParentID] = useState("inspire");
  const [activeCategoryID, setActiveCategoryID] = useState("all");
  const navigate = useRouter();

  const getDayMonthYear = (dateStr) => {
    if (!dateStr) return { day: "00", mon: "Mon", year: "0000", dow: "—" };
    const parts = dateStr.split("-");
    if (parts.length !== 3)
      return { day: "00", mon: "Mon", year: "0000", dow: "—" };
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
    rawCategories.forEach((category) => map.set(category.id, category.name));
    return map;
  }, [rawCategories]);

  const loadEventsBySlug = async (categorySlug, id) => {
    try {
      const response = await getEventsSlug(categorySlug);
      const sortedEvents = response.sort(
        (a, b) =>
          new Date(b.eventDate || "1970-01-01") -
          new Date(a.eventDate || "1970-01-01"),
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
          parentGroup: getParentForSlug(category.categorySlug),
        }));

        setRawCategories(formattedCategories);
        
        // Load default to first child of 'inspire'
        const defaultChildren = formattedCategories.filter(c => c.parentGroup === "inspire");
        if (defaultChildren.length > 0) {
          loadEventsBySlug(defaultChildren[0].categorySlug, defaultChildren[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchData();
  }, []);

  const handleParentTabClick = (parentId) => {
    setActiveParentID(parentId);
    const children = rawCategories.filter(c => c.parentGroup === parentId);
    if (children.length > 0) {
      loadEventsBySlug(children[0].categorySlug, children[0].id);
    } else {
      setEvents([]);
      setActiveCategoryID(null);
    }
  };

  const featuredEvents = useMemo(() => {
    return events.slice(0, Math.min(4, events.length));
  }, [events]);

  const [featuredIndex, setFeaturedIndex] = useState(0);

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev === 0 ? Math.max(0, featuredEvents.length - 1) : prev - 1));
  };

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev >= featuredEvents.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setFeaturedIndex(0);
  }, [activeCategoryID]);

  return (
    <section className="relative min-h-screen bg-black text-white font-glancyr pt-24 pb-24 overflow-hidden">
      {/* Subtle Grid Background for Hero */}
      <div className="absolute inset-x-0 top-0 h-[800px] pointer-events-none opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] z-0"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto space-y-24">
        
        {/* Top Split Header */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 px-5 sm:px-8 md:px-12 pt-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-asgard font-extrabold uppercase leading-[1.05] tracking-tight">
              INSPIRE. EDUCATE.<br />ENGAGE.
            </h1>
          </div>
          <div className="text-white/60 text-[13px] sm:text-[15px] leading-[1.8] flex items-center md:pl-10">
            <p>
              Welcome to the epicenter of Chennai&apos;s advertising pulse. Here, 
              The Ad Club Madras curates events that transcend standard 
              gatherings, mixing insights with industry celebrations. 
              Find the fuel for your creative journey right here.
            </p>
          </div>
        </div>

        {/* Tier 1: Parent Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm sm:text-[17px] font-bold font-glancyr tracking-wide px-4 mt-8">
          {[
            { id: "inspire", name: "Inspire" },
            { id: "educate", name: "Educate" },
            { id: "engage", name: "Engage" }
          ].map((parent, index) => {
            const isActive = activeParentID === parent.id;
            return (
              <React.Fragment key={parent.id}>
                <div className="relative flex items-center justify-center">
                  {isActive && (
                    <div className="absolute inset-0 scale-[2.2]">
                      <DotLottieReact
                        src="/circleanime.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                  <button
                    onClick={() => handleParentTabClick(parent.id)}
                    className={`relative z-10 transition-all duration-300 px-2 py-1 whitespace-nowrap capitalize ${
                      isActive
                        ? "text-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {parent.name}
                  </button>
                </div>
                {index !== 2 && (
                  <span className="text-primary font-bold select-none text-xl">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Tier 2: Sub-categories (API Mapping) */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase font-asgard px-4 mt-6 opacity-90">
          {rawCategories.filter(c => c.parentGroup === activeParentID).map((category, index) => (
            <button
              key={category.id ?? `child-${index}`}
              onClick={() => loadEventsBySlug(category.categorySlug, category.id)}
              className={`transition-all duration-300 rounded-full px-4 py-1.5 whitespace-nowrap tracking-widest ${
                activeCategoryID === category.id
                  ? "border border-primary text-primary"
                  : "border border-white/10 text-white/50 hover:text-white bg-white/5"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Static Title (Above Slider) */}
        <div className="text-center px-4 max-w-4xl mx-auto -mb-10">
          <h2 className="text-2xl sm:text-[28px] md:text-[34px] font-asgard font-extrabold uppercase tracking-[0.02em] leading-[1.2]">
            <span className="text-primary">WHERE CREATIVITY</span> MEETS RECOGNITION AND IDEAS GET THEIR SPOTLIGHT.
          </h2>
        </div>

        {/* Dynamic Featured Event Slider */}
        {featuredEvents.length > 0 ? (
          <div className="px-2 sm:px-6 md:px-12 overflow-visible">
             <div className="flex items-center gap-2 sm:gap-6">
                <button onClick={handlePrevFeatured} className="text-primary hover:text-white transition-colors p-2 hidden sm:block shrink-0">
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="flex-1 bg-[#0f0f0f] rounded-2xl md:rounded-[24px] overflow-hidden flex flex-col md:flex-row relative shadow-2xl relative h-full min-h-[500px]">
                  
                  {/* Left content block */}
                  <div className="w-full md:w-5/12 p-8 md:p-14 flex flex-col justify-between z-10 shrink-0">
                    <button className="border border-white/20 text-white/80 text-[10px] md:text-xs px-5 py-1.5 rounded-full w-fit hover:bg-white/10 transition uppercase tracking-widest font-asgard font-bold">
                      Explore
                    </button>

                    <div className="mt-8 mb-8">
                      <h3 className="text-[26px] md:text-[36px] font-asgard uppercase font-extrabold tracking-wide leading-tight line-clamp-2 md:line-clamp-3">
                        {featuredEvents[featuredIndex].eventTitle}
                      </h3>
                      <p className="mt-4 text-white/50 text-[13px] sm:text-[14px] leading-[1.8] line-clamp-3 lg:line-clamp-4 font-glancyr">
                        The Ad Club is a fraction of a whole body of daily heroes who dedicate their brilliant minds to taking brands toward exponential success. Let&apos;s celebrate your ideas.
                      </p>
                    </div>

                    <div className="flex gap-4 sm:gap-6 items-end font-bold font-glancyr tracking-wider mt-auto">
                      {featuredEvents.map((_, index) => {
                        const displayNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;
                        return (
                          <button
                            key={index}
                            onClick={() => setFeaturedIndex(index)}
                            className={`transition-all duration-300 ${
                              featuredIndex === index
                                ? "text-primary text-xl sm:text-2xl"
                                : "text-white/40 text-[13px] sm:text-[15px] hover:text-white pb-0.5"
                            }`}
                          >
                            {displayNumber}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Image Block */}
                  <div className="w-full md:w-7/12 h-64 md:h-auto min-h-[300px] relative">
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0f0f0f] via-transparent to-transparent z-10 pointer-events-none"></div>
                    <img 
                      src={featuredEvents[featuredIndex].eventCover || "/assets/eventbanner3.jpg"} 
                      alt={featuredEvents[featuredIndex].eventTitle} 
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>

                </div>

                <button onClick={handleNextFeatured} className="text-primary hover:text-white transition-colors p-2 hidden sm:block shrink-0">
                  <ChevronRight className="w-8 h-8" />
                </button>
             </div>
             
             {/* Mobile arrows */}
             <div className="flex sm:hidden justify-center gap-6 mt-6">
                <button onClick={handlePrevFeatured} className="text-primary hover:text-white transition-colors p-2">
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button onClick={handleNextFeatured} className="text-primary hover:text-white transition-colors p-2">
                  <ChevronRight className="w-8 h-8" />
                </button>
             </div>
          </div>
        ) : (
          <div className="text-center text-white/50 py-20 font-asgard uppercase tracking-widest text-sm">
             No events available in this category.
          </div>
        )}

        {/* Upcoming Events List */}
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12">
          <h2 className="text-center text-primary uppercase font-asgard font-extrabold text-[16px] sm:text-[20px] tracking-widest mb-16">
             UPCOMING EVENTS
          </h2>
          
          <div className="flex flex-col">
            {events.map((event) => {
              const { mon, year, day } = getDayMonthYear(event.eventDate);

              return (
                <div key={event.id} className="group border-b border-dashed border-white/20 hover:border-white/40 pb-7 pt-7 first:pt-0 transition duration-300">
                   <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-2 sm:p-4 rounded-xl hover:bg-white/[0.02] transition duration-300">
                     
                     {/* Calendar Box */}
                     <div className="bg-white group-hover:bg-primary transition-colors duration-500 text-black flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-lg shrink-0 overflow-hidden shadow-lg border border-white/10 relative">
                       <div className="bg-black/5 w-full text-center py-1 absolute top-0 border-b border-black/10">
                         <span className="font-extrabold text-[9px] sm:text-[10px] uppercase tracking-widest">{mon}</span>
                       </div>
                       <span className="font-extrabold font-glancyr text-[32px] sm:text-[40px] leading-none mt-4">{day}</span>
                       <span className="font-extrabold font-glancyr text-[9px] sm:text-[10px] uppercase tracking-widest absolute bottom-2 opacity-60">{year}</span>
                     </div>

                     {/* Event Details */}
                     <div className="flex-1 space-y-3">
                       <h3 className="font-bold text-base sm:text-lg lg:text-[20px] font-glancyr leading-snug">
                         {event.eventTitle}
                       </h3>
                       <div>
                         <span className="border border-white/20 text-white/70 text-[9px] sm:text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold">
                            {categoryMap.get(event.eventCategoryID) || "Industry Event"}
                         </span>
                       </div>
                     </div>

                     {/* Animated Detail Button */}
                     <div className="shrink-0 pt-2 sm:pt-0">
                       <button 
                         onClick={() => navigate.push(`/events/${event.eventSlug}`)} 
                         className="flex items-center overflow-hidden rounded-full bg-primary h-10 w-10 hover:w-36 transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] relative justify-start group/btn font-asgard"
                         aria-label="View Details"
                       >
                          <div className="w-10 h-10 shrink-0 flex items-center justify-center relative z-10">
                            <ArrowRight className="text-black w-4 h-4 transition-transform duration-300" />
                          </div>
                          <div className="absolute inset-0 pl-10 pr-4 flex items-center opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-widest mt-[2px]">
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
        </div>

      </div>
    </section>
  );
}

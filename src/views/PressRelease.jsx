"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- Media Coverage (external links) ----------------
   ✅ Uses ONLY external links you provided.
   🧹 Dates are ISO (YYYY-MM-DD) for proper sorting; if unknown, leave "".
------------------------------------------------------------------ */
const MEDIA_COVERAGE_2026 = [
  { title: "Advertising Club Madras Maddys 2026: Agnello Dias, Preeti Vyas & Ramsam join as jury chairs", source: "Exchange4Media", date: "March 18, 2026", url: "https://www.exchange4media.com/industry-briefing-news/advertising-club-madras-maddys-2026-agnello-dias-preeti-vyas-ramsam-join-as-jury-chairs-152810.html" },
  { title: "Agnello Dias, Preeti Vyas and Ramsam named jury chairs for Advertising Club Madras Maddys 2026", source: "MediaNews4U", date: "March 18, 2026", url: "https://www.medianews4u.com/agnello-dias-preeti-vyas-and-ramsam-named-jury-chairs-for-advertising-club-madras-maddys-2026/" },
  { title: "Advertising Club Madras names jury chairs for Maddys 2026", source: "afaqs", date: "March 18, 2026", url: "https://www.afaqs.com/news/advertising/advertising-club-madras-names-jury-chairs-for-maddys-2026-11205724" },
  { title: "Ad Club Madras Maddys 2026: Agnello Dias, Preeti Vyas, Ramsam join as jury chairs", source: "Adgully", date: "March 18, 2026", url: "https://www.adgully.com/post/13099/ad-club-madras-maddys-2026-agnello-dias-preeti-vyas-ramsam-join-as-jury-chairs" },
  { title: "Agnello Dias, Preeti Vyas & Ramsam named jury chairs for Advertising Club Madras Maddys 2026", source: "Social Samosa", date: "March 18, 2026", url: "https://www.socialsamosa.com/industry-updates/agnello-dias-preeti-vyas-ramsamjury-chairs-advertising-club-madras-maddys-2026-11206707" },
  { title: "Maddys 2026 Welcomes Advertising Icons to Lead Prestigious Jury Panels", source: "SociaPanews", date: "March 18, 2026", url: "https://sociapanews.com/maddys-2026-welcomes-advertising-icons-to-lead-prestigious-jury-panels" },
  { title: "Agnello Dias, Preeti Vyas & Ramsam join as jury chairs at Advertising Club Madras Maddys 2026", source: "Agency Reporter", date: "March 18, 2026", url: "https://www.agencyreporter.com/agnello-dias-preeti-vyas-ramsam-join-as-jury-chairs-at-advertising-clubmadras-maddys-2026/" },
  { title: "Jury Chairs for Advertising Club Madras Maddys 2026", source: "The Mad Buzz", date: "March 18, 2026", url: "https://themadbuzz.com/jury-chairs-advertising-club-madras-maddys-2026/" },
  { title: "Ashish Khazanchi, Anisha Iyer & Sabyasachi Mitter named jury chairpersons for Maddys 2026", source: "MediaNews4U", date: "March 10, 2026", url: "https://www.medianews4u.com/ashish-khazanchi-anisha-iyer-sabyasachi-mitter-named-jury-chairpersons-for-maddys-2026-digital-category-revamped/" },
  { title: "Ashish Khazanchi, Anisha Iyer & Sabyasachi Mitter to chair AdClub Madras Maddys 2026", source: "BW Marketing World", date: "March 10, 2026", url: "https://www.bwmarketingworld.com/article/ashish-khazanchi-anisha-iyer-sabyasachi-mitter-to-chair-adclub-madras-maddys-2026-595872" },
  { title: "Ashish Khazanchi, Anisha Iyer, Sabyasachi Mitter named chairpersons for Adclub Madras' Maddys 2026", source: "Adgully", date: "March 10, 2026", url: "https://www.adgully.com/post/12740/ashish-khazanchi-anisha-iyer-sabyasachi-mitter-named-chairpersons-for-adclub-madras-maddys-2026" },
  { title: "Ashish Khazanchi, Anisha Iyer & Sabyasachi Mitter named chairpersons for Maddys 2026", source: "Exchange4Media", date: "March 10, 2026", url: "https://www.exchange4media.com/industry-briefing-news/ashish-khazanchi-anisha-iyer-sabyasachi-mitter-named-chairpersons-for-maddys-2026-152519.html" },
  { title: "Chairpersons for AdClub Madras Maddys 2026", source: "Social Samosa", date: "March 10, 2026", url: "https://www.socialsamosa.com/industry-updates/chairpersons-for-adclub-madras-maddys-2026-11169867" },
  { title: "Advertising Club Madras Maddys 2026 Press Release", source: "Mx Mindia", date: "March 10, 2026", url: "https://share.google/swZdKmhvVRlfEhWC1" },
  { title: "Advertising Club Madras opens submissions for the 44th edition of Maddys 2026", source: "The Mad Buzz", date: "March 10, 2026", url: "https://themadbuzz.com/advertising-club-madras-opens-submissions-for-the-44th-edition-of-maddys-2026/" },
  { title: "Advertising Club Madras Maddys 2026 Announcement", source: "Influencing", date: "March 10, 2026", url: "https://influencing.com/app/announcements/127227" },
];

const MEDIA_COVERAGE_2025 = [
  { title: "The Advertising Club Madras elects Surej Salim as President, appoints Kavitha Srinivasan as Secretary for 2025–2026", source: "MN4U Bureau", date: "October 27, 2025", url: "https://www.medianews4u.com/the-advertising-club-madras-elects-surej-salim-as-president-appoints-kavitha-srinivasan-as-secretary-for-2025-2026/" },
  { title: "Surej Salim elected President of The Advertising Club Madras", source: "e4m Staff", date: "October 27, 2025", url: "https://www.exchange4media.com/advertising-news/surej-salim-elected-president-of-the-advertising-club-madras-148768.html" },
  { title: "Surej Salim elected as President of The Advertising Club Madras for 2025–26", source: "A Faqs", date: "Oct 27, 2025", url: "https://www.afaqs.com/people-spotting/surej-salim-elected-as-president-of-the-advertising-club-madras-for-202526-10597054" },
  { title: "Moves and Wins: Week of 27 October", source: "Campaign India", date: "27th October, 2025", url: "https://www.campaignindia.in/gallery/moves-and-wins-week-of-27-october/505460" },
  { title: "Surej Salim elected President of The Advertising Club Madras for 2025–2026", source: "Ad Gully", date: "October 26, 2025", url: "https://www.adgully.com/post/8290/surej-salim-elected-president-of-the-advertising-club-madras-for-20252026" },
  { title: "Surej Salim elected President of The Advertising Club Madras for 2025–2026", source: "Media Brief", date: "October 27, 2025", url: "https://mediabrief.com/surej-salim-elected-president-of-ad-club-madras-for-2025-2026/" },
  { title: "Surej Salim elected president of The Advertising Club Madras for 2025–2026", source: "Manifest Media Staff", date: "Oct 27, 2025", url: "https://www.manifest-media.in/advertising/271025/surej-salim-elected-president-of-the-advertising-club-madras-for-2025.html" },
  { title: "Advertising Club Madras names Surej Salim as President", source: "Social Samosa", date: "27th October, 2025", url: "https://www.socialsamosa.com/industry-updates/advertising-club-madras-surej-salim-president-10597495" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "AD Tech Today", date: "October 27, 2025", url: "https://adtechtoday.com/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Advertising Reporter", date: "Oct 27, 2025", url: "https://www.advertisingreporter.com/media/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim takes charge as president of The Advertising Club Madras for 2025–2026", source: "BestMediaInfo", date: "Oct 27, 2025", url: "https://bestmediainfo.com/mediainfo/advertising/surej-salim-takes-charge-as-president-of-the-advertising-club-madras-for-20252026-10597269" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Media Info Line", date: "Oct 27, 2025", url: "https://www.mediainfoline.com/movement/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Passionate In Marketing", date: "Oct 27, 2025", url: "https://www.passionateinmarketing.com/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim elected president of The Advertising Club Madras for 2025–2026", source: "Brande Quity", date: "Oct 27, 2025", url: "https://brandequity.economictimes.indiatimes.com/news/industry/surej-salim-elected-president-of-the-advertising-club-madras-for-20252026/124849881" },
  { title: "Surej Salim takes the helm at Ad Club Madras", source: "Production Mehmood", date: "27 Oct, 2025", url: "https://www.indiantelevision.com/mam/media-and-advertising/people/surej-salim-takes-the-helm-at-ad-club-madras-251027?amp" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "The 9th Estate", date: "28th October, 2025", url: "https://the9thestate.com/news/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Startup Business Stories", date: "28th October, 2025", url: "https://startupbusinessstories.com/news/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Right Column Media", date: "28th October, 2025", url: "https://rightcolumnmedia.com/news/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Quick Biz News", date: "28th October, 2025", url: "https://quickbiznews.com/news/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Online News9", date: "28th October, 2025", url: "https://onlinenews9.in/news/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Takes Charge As President Of The Advertising Club Madras", source: "Marketing Mind", date: "27th October, 2025", url: "https://marketingmind.in/surej-salim-takes-charge-as-president-of-the-advertising-club-madras/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Customer Engagement", date: "27th October, 2025", url: "https://customerengagement.net/surej-salim-elected-president-advertising-club-madras-2025/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "India Education Diary", date: "27th October, 2025", url: "https://indiaeducationdiary.in/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Express News", date: "28th October, 2025", url: "https://expressnews.asia/2025/10/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Pulse of India", date: "28th October, 2025", url: "https://pulseofindia.asia/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Chennai Mail", date: "28th October, 2025", url: "https://chennaimail.com/2025/10/28/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "TN Mirror News", date: "28th October, 2025", url: "https://tnmirrornews.com/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Pore Murasu TV", date: "28th October, 2025", url: "https://poremurasutv.com/2025/10/28/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
  { title: "Surej Salim Elected President of The Advertising Club Madras for 2025–2026", source: "Talk 4 City", date: "28th October, 2025", url: "https://talk4city.in/surej-salim-elected-president-of-the-advertising-club-madras-for-2025-2026/" },
];

const safeFormatDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  return isNaN(d) ? val : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
};

export default function PressRelease() {
  const [query, setQuery] = useState("");
  const [activeYear, setActiveYear] = useState("2026");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    const dataForYear = activeYear === "2026" ? MEDIA_COVERAGE_2026 : MEDIA_COVERAGE_2025;
    let results = dataForYear;

    const q = query.trim().toLowerCase();
    if (q) {
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.source.toLowerCase().includes(q)
      );
    }
    return results;
  }, [query, activeYear]);

  const totalItemsForActiveYear = useMemo(() => {
    return activeYear === "2026" ? MEDIA_COVERAGE_2026.length : MEDIA_COVERAGE_2025.length;
  }, [activeYear]);

  return (
    <section className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-16 px-6 md:px-16">
      <div className="text-center mb-10 md:mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-asgard font-bold text-primary mb-3"
        >
          Press Release
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

      {/* Search bar */}
      <div className="mb-8">
        <div className="relative w-full md:w-96 mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by headline or outlet…"
            className="w-full rounded-xl bg-white/5 border font-glancyr border-white/10 px-4 py-3 outline-none focus:border-primary transition"
          />
          <span className="absolute right-3 top-1/2 font-glancyr -translate-y-1/2 text-gray-400 text-sm">
            {filtered.length}/{totalItemsForActiveYear}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-12">
          {filtered.length === 0 ? (
            <div className="text-center font-glancyr text-gray-400 py-10">
              No press releases found for {activeYear}.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {filtered.map((item, i) => (
                <motion.a
                  key={`${item.source}-${i}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.45 }}
                  className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/70 group transition block"
                >
                  <div className="h-44 w-full grid place-items-center bg-gradient-to-br from-primary/30 to-white/10">
                    <div className="text-3xl font-bold font-glancyr text-center text-white/90 tracking-wider">
                      {item.source}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-xs">
                      {item.date && (
                        <span className="px-2 py-0.5 rounded font-glancyr bg-primary/20 text-primary border border-primary/30">
                          Date: {safeFormatDate(item.date)}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-glancyr mb-2 group-hover:underline">
                      {item.title}
                    </h3>
                    <div className="mt-3 inline-flex items-center font-glancyr gap-2 text-primary">
                      Read on publisher
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="translate-x-0 group-hover:translate-x-1 transition-transform"
                      >
                        <path
                          fill="currentColor"
                          d="M13 5l7 7-7 7M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
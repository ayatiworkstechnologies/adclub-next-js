"use client";
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const image1 = "/assets/Event-1.svg";
const image2 = "/assets/Event-2.svg";
const image3 = "/assets/Event-3.svg";
const image4 = "/assets/Event-4.svg";
const image5 = "/assets/Event-5.svg";

const events = [
  { title: "Networking Opportunities", image: image1, slug: "networking-opportunities" },
  { title: "Workshops & Masterclasses", image: image5, slug: "workshops-and-masterclasses" },
  { title: "Competitions", image: image4, slug: "competitions" },
  { title: "Mentorship Programs", image: image2, slug: "mentorship-programs" },
  { title: "Awards & Celebrations", image: image3, slug: "awards-and-celebrations" },
];

export default function EventScrollStack() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY + window.innerHeight * 0.5;
      const sectionHeight = containerRef.current.scrollHeight / events.length;
      const index = Math.min(
        events.length - 1,
        Math.floor((scrollY - containerRef.current.offsetTop) / sectionHeight)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-white dark:bg-black transition-colors duration-500"
    >
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          className="sticky top-0 h-screen flex items-center justify-center px-4"
          animate={{
            opacity: activeIndex === idx ? 1 : 0.3,
            scale: activeIndex === idx ? 1 : 0.94,
            zIndex: activeIndex === idx ? 10 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: activeIndex === idx ? 1 : 0,
              y: activeIndex === idx ? 0 : 50,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group w-full sm:w-[90%] md:w-[80%] max-w-5xl rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover transition-all duration-500"
            />

            <div className="absolute bottom-6 left-6 z-20">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-primary/80 dark:bg-primary/80 backdrop-blur-md text-black px-4 py-2 rounded shadow inline-block mb-2"
              >
                <p className="text-sm sm:text-base font-asgard font-bold uppercase">
                  {event.title}
                </p>
              </motion.div>

              <motion.button
                initial={{ width: 44 }}
                whileHover={{ width: 180 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => navigate.push(`/events/${event.slug}`)}
                className="relative h-10 sm:h-10 rounded-full bg-white hover:bg-primary dark:bg-primary overflow-hidden flex items-center justify-start pl-3"
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <ArrowRight className="text-black w-4 h-4" />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="text-black text-[9px] sm:text-xs font-asgard font-bold uppercase tracking-wide text-center w-full"
                >
                  View Details
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}

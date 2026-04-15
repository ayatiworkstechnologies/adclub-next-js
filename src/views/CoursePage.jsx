"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    MapPin,
    DollarSign,
    CheckCircle2,
} from "lucide-react";
import CourseEnquiryForm from "@/components/CourseEnquiryForm";

const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: i * 0.15,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function CoursePage() {
    const { scrollYProgress } = useScroll();
    const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const yHero = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    // Scroll-based parallax transforms for different sections
    const rotateCards = useTransform(scrollYProgress, [0.1, 0.3], [5, 0]);
    const xFeatureLeft = useTransform(scrollYProgress, [0.2, 0.4], [-80, 0]);
    const xFeatureRight = useTransform(scrollYProgress, [0.2, 0.4], [80, 0]);
    const scaleTimeline = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);


    // Custom cursor
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
    const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });
    const [cursorHover, setCursorHover] = useState(false);

    useEffect(() => {
        const handleMouse = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [cursorX, cursorY]);

    return (
        <div id="course-page-content" className="bg-[#050505] text-white min-h-screen selection:bg-primary selection:text-black cursor-none">
            {/* ─── Custom Cursor ─── */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
            >
                <motion.div
                    animate={{
                        width: cursorHover ? 120 : 20,
                        height: cursorHover ? 120 : 20,
                        backgroundColor: cursorHover ? "rgba(212,175,55,0.15)" : "rgba(212,175,55,1)",
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${cursorHover ? 'border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'shadow-[0_0_20px_rgba(212,175,55,0.4)]'}`}
                />
            </motion.div>
            {/* ─── Hero Section (Parallax) ─── */}
            <motion.section
                style={{ opacity: opacityHero, y: yHero, scale: scaleHero }}
                className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-32 sm:pt-40 pb-20 origin-top"
            >
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full opacity-30"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full opacity-20"
                    />
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center max-w-5xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-6">
                        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-asgard uppercase tracking-[0.2em] text-xs sm:text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] animate-shimmer">
                            Madras Advertising Club
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl sm:text-6xl md:text-8xl font-asgard font-extrabold uppercase leading-[1.1] tracking-tight"
                    >
                        Learn Advertising <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary animate-gradient-x">
                            The Right Way
                        </span>{" "}
                        <br />
                        From The Right People
                    </motion.h1>

                    <button
                        onClick={() =>
                            document
                                .getElementById("application-form")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        onMouseEnter={() => setCursorHover(true)}
                        onMouseLeave={() => setCursorHover(false)}
                        className="group relative inline-flex items-center justify-center font-asgard uppercase font-bold text-black mt-10"
                    >
                        <span className="absolute inset-0 w-full h-full bg-primary rounded-full group-hover:scale-105 transition-transform duration-300 ease-out shadow-[0_0_30px_rgba(212,175,55,0.4)]"></span>
                        <span className="relative flex items-center gap-3 px-8 py-4">
                            Apply Now{" "}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </motion.div>

                {/* Image and descriptive text directly after hero CTA */}
                <motion.div variants={fadeInUp} className="mt-20 max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 group mb-12">
                        <img
                            src="/assets/pgda-banner.jpg"
                            alt="Studio Session"
                            className="w-full h-[300px] sm:h-[450px] object-cover group-hover:scale-105 transition-all duration-700"
                        />
                    </div>

                    <div className="text-center px-4">
                        <h3 className="text-3xl font-asgard font-bold uppercase mb-4 text-white">
                            Madras Advertising{" "}
                            <span className="text-primary border-b-2 border-primary">
                                Club
                            </span>
                        </h3>
                        <p className="font-glancyr text-gray-400 text-lg leading-relaxed text-justify sm:text-center mt-6">
                            We're not just a club. We're a dynamic community of artistic
                            minds, strategic thinkers, and trendsetters committed to pushing
                            the boundaries of conventional advertising. Whether you're a
                            seasoned professional or an aspiring talent, our platform offers a
                            space for collaboration, growth, and networking that goes beyond
                            the ordinary. The course we offer comes from years of seasoned
                            professionals who have not only seen the ropes but shown the ropes
                            for the new generation as well.
                        </p>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs font-asgard uppercase tracking-widest text-gray-500">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"
                    />
                </motion.div>
            </motion.section>

            {/* ─── Highlights Cards (Hover Reveals) ─── */}
            <section className="py-20 px-4 sm:px-8 md:px-16 border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Last Date",
                            value: "Jan 11th 2026",
                            icon: <Calendar className="w-8 h-8 text-primary" />,
                        },
                        {
                            title: "Next Batch",
                            value: "Jan 25th 2026",
                            sub: "Ad Club Office - Chennai",
                            icon: <MapPin className="w-8 h-8 text-primary" />,
                        },
                        {
                            title: "Course Fee",
                            value: "₹40,000/- +GST",
                            icon: <DollarSign className="w-8 h-8 text-primary" />,
                        },
                        {
                            title: "Mode",
                            value: "Easy to Learn",
                            sub: "Offline Sessions",
                            icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            onMouseEnter={() => setCursorHover(true)}
                            onMouseLeave={() => setCursorHover(false)}
                            className="group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] cursor-pointer"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 animate-float">
                                    {item.icon}
                                </div>
                                <h3 className="font-asgard uppercase text-gray-500 tracking-widest text-sm mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-3xl font-glancyr font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {item.value}
                                </p>
                                {item.sub && (
                                    <p className="mt-2 font-glancyr text-sm text-gray-400 border-t border-white/10 pt-2">
                                        {item.sub}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Immersive Features Section ─── */}
            <section className="py-32 px-4 sm:px-8 relative overflow-hidden z-30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-asgard font-extrabold uppercase leading-tight">
                            Easy to Learn. <br />
                            <span className="text-primary italic">Offline Sessions.</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                num: "01",
                                title: "Personalized Industry Sessions",
                                desc: "Advertising is not a one-size-fits-all industry where one solution cannot answer every problem. Get mentored one-on-one by the top industry experts and gain valuable insights that they have gathered throughout the years.",
                            },
                            {
                                num: "02",
                                title: "High-Performance Coaching",
                                desc: "Knowledge without implementation is really of no use to anyone. But, how do you perform to the best of your potential? We'll help you with that.",
                            },
                            {
                                num: "03",
                                title: "Career Mentorship",
                                desc: "Most people have careers but do they know where they're heading to? With our PGDA, you can be assured of knowledge filled sessions of what you can expect from the path you're about to take.",
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.num}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                onMouseEnter={() => setCursorHover(true)}
                                onMouseLeave={() => setCursorHover(false)}
                                className="group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-500 cursor-pointer"
                            >
                                <div className="text-6xl sm:text-7xl md:text-8xl font-glancyr font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-primary/20 transition-all duration-500 select-none">
                                    {feature.num}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-asgard font-bold uppercase mb-4 text-white group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="font-glancyr text-gray-400 text-lg leading-relaxed max-w-3xl">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Animated Timeline Component ─── */}
            <section className="py-32 px-4 sm:px-8 bg-neutral-950 relative border-t border-white/5 z-30">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-24 max-w-4xl mx-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-3xl overflow-hidden mb-16 border border-white/10 group shadow-2xl shadow-primary/5"
                        >
                            <img
                                src="https://sgp1.digitaloceanspaces.com/deepsense/pgda/staging/media/banner_images/desktop/Frame_23025.webp"
                                alt="Advertising Masterclass Session"
                                className="w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-asgard font-bold uppercase mb-6">
                            Pathway to <span className="text-primary">PG Diploma</span>
                        </h2>
                        <p className="font-glancyr text-gray-400 text-lg max-w-2xl mx-auto">
                            Our admission process is designed to ensure a seamless and
                            inclusive experience for prospective members.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

                        {[
                            {
                                step: "1",
                                title: "Fill Application Form",
                                desc: "Fill out a short application form with some basic details about yourself.",
                            },
                            {
                                step: "2",
                                title: "Short Screening Process",
                                desc: "We conduct a short screening process to shortlist the best candidates.",
                            },
                            {
                                step: "3",
                                title: "Classes Begin",
                                desc: "Starting From Dec 14th 2024",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                                className={`relative flex items-center mb-16 md:mb-24 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                    } flex-row`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-6 md:left-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black border-2 border-primary -translate-x-1/2 flex items-center justify-center font-glancyr font-bold text-primary z-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    {item.step}
                                </div>

                                {/* Content */}
                                <div
                                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}
                                >
                                    <div
                                        className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-primary/30 transition-all duration-300 group overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] cursor-pointer"
                                        onMouseEnter={() => setCursorHover(true)}
                                        onMouseLeave={() => setCursorHover(false)}
                                    >
                                        <div className="w-full h-48 sm:h-64 mb-6 rounded-2xl overflow-hidden relative">
                                            {item.step === "1" && (
                                                <img
                                                    src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800&h=600"
                                                    alt="Application Form"
                                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                                />
                                            )}
                                            {item.step === "2" && (
                                                <img
                                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600"
                                                    alt="Screening process"
                                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                                />
                                            )}
                                            {item.step === "3" && (
                                                <img
                                                    src="https://sgp1.digitaloceanspaces.com/deepsense/pgda/staging/media/banner_images/desktop/Frame_23025.webp"
                                                    alt="Classes Begin"
                                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                                />
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-asgard uppercase font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="font-glancyr text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Advanced Application Form ─── */}
            <section id="application-form" className="py-32 px-4 sm:px-8 relative z-30">
                <div className="absolute inset-0 bg-primary/5 clip-path-slant pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                    {/* Form Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 overflow-hidden"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-asgard font-bold uppercase leading-tight"
                        >
                            The Future of <br />
                            <span className="text-primary backdrop-blur-sm">Advertising</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-glancyr text-gray-400 text-lg"
                        >
                            A community of trendsetters pushing boundaries and transforming
                            the landscape. Apply now to secure your spot.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4 pt-8 border-t border-white/10"
                        >
                            <h4 className="font-asgard uppercase tracking-widest text-sm text-gray-500 mb-6">
                                What you will learn
                            </h4>
                            {[
                                "Industry-recognized certification",
                                "Mentored by top professionals",
                                "Placement assistance included",
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="font-glancyr text-gray-300">{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-8 mt-8 border-t border-white/10"
                        >
                            <h4 className="font-asgard uppercase tracking-widest text-sm text-gray-500 mb-6">
                                Have a question?
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-asgard text-xs text-gray-400 uppercase tracking-widest mb-1">Call Us At</p>
                                    <a href="tel:+918248717152" className="text-xl sm:text-2xl font-glancyr text-white hover:text-primary transition-colors block">
                                        +91 82487 17152
                                    </a>
                                </div>
                                <div>
                                    <p className="font-asgard text-xs text-gray-400 uppercase tracking-widest mb-1">Contact us at</p>
                                    <a href="mailto:advertisingclubmadras@gmail.com" className="text-lg sm:text-xl font-glancyr text-white hover:text-primary transition-colors block break-all">
                                        advertisingclubmadras@gmail.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Form UI */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full"
                    >
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                            {/* Form internal gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full opacity-20 pointer-events-none" />

                            <h3 className="text-2xl font-asgard uppercase font-bold mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary block"></span>
                                Application Form
                            </h3>

                            <CourseEnquiryForm setCursorHover={setCursorHover} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Custom Styles */}
            <style key="custom-styles">{`
                .clip-path-slant {
                  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
                }
                #course-page-content, #course-page-content * { cursor: none !important; }
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                @keyframes shimmer {
                  0% { background-position: -200% 0; }
                  100% { background-position: 200% 0; }
                }
                .animate-shimmer {
                  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent);
                  background-size: 200% 100%;
                  animation: shimmer 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

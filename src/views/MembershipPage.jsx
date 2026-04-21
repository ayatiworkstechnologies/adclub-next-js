"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { getmembershipfirstpage, getoptions } from "../api/api";

export default function MembershipPage() {
  const navigate = useRouter();
  const isAuthenticated =
    typeof window !== "undefined"
      ? localStorage.getItem("isAuthenticated") === "true"
      : false;

  const [files, setFiles] = useState({
    uploadMembershipRegForm: "",
    uploadMembershipRenewalForm: "",
  });

  const [fees, setFees] = useState({
    corporate: 0,
    GST: 0,
    individual: 0,
    student: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fileRes, optionRes] = await Promise.all([
          getmembershipfirstpage(),
          getoptions(),
        ]);

        setFiles(fileRes);

        const opt = optionRes.data;

        setFees({
          corporate: Number(opt.corporate),
          GST: Number(opt.GST),
          individual: Number(opt.individual),
          student: Number(opt.student),
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const priceWithGST = (price = 0) =>
    Math.round(price + (price * fees.GST) / 100);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 font-glancyr relative overflow-hidden">
      {/* Grid Background Overlay for Hero part */}
      <div className="absolute inset-0 top-0 h-[600px] pointer-events-none opacity-[0.15] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"></div>

      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Top Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 pt-16 md:pt-24 pb-20">
          <motion.div variants={fadeUp} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold uppercase font-asgard leading-[1.1] tracking-tight">
              DISRUPT{" "}
              <span className="text-primary">
                WITH
                <br />
                DISTINCTION
              </span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-white italic">
              Become a member, today!
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="space-y-6 text-sm sm:text-[15px] leading-[1.8] text-white/80 max-w-lg"
          >
            <p>
              With over{" "}
              <strong className="text-white">1,000+ dynamic voices</strong> and
              counting, Ad Club Madras unites every pulse of the advertising
              ecosystem. Be it clients and marketers to agencies, production
              houses, and media, we remain one of India&apos;s oldest and most
              influential creative institutions.
            </p>
            <p>
              For nearly seven decades, we&apos;ve been the epicenter of
              innovative disruption, the hub where advertising, media, and
              marketing professionals, students, and visionaries converge to
              shape the future of the craft.
            </p>
          </motion.div>
        </div>

        {/* Why Become a Member Section */}
        <motion.div variants={fadeUp} className="py-16">
          <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase font-asgard mb-10 tracking-[0.02em]">
            <span className="text-primary">WHY</span> BECOME A MEMBER?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[10px] p-6 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-bold mb-4 font-asgard tracking-wide">
                Connect &amp; <span className="text-primary">Collaborate</span>
              </h3>
              <p className="text-xs sm:text-[13.5px] leading-[1.8] text-white/70">
                Meet, mingle, and exchange ideas with advertising, media, and
                creative professionals who drive the industry forward.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[10px] p-6 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-bold mb-4 font-asgard tracking-wide">
                Learn &amp; <span className="text-primary">Lead</span>
              </h3>
              <p className="text-xs sm:text-[13.5px] leading-[1.8] text-white/70">
                Level up your skills through workshops, seminars, and
                masterclasses led by industry leaders who&apos;ve been there,
                done that.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[10px] p-6 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-bold mb-4 font-asgard tracking-wide">
                Gain <span className="text-primary">Exposure</span>
              </h3>
              <p className="text-xs sm:text-[13.5px] leading-[1.8] text-white/70">
                Access to top speakers and thought leaders from advertising,
                media, communications, PR, and beyond.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-[10px] p-6 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-bold mb-4 font-asgard tracking-wide">
                Exclusive <span className="text-primary">Access</span>
              </h3>
              <p className="text-xs sm:text-[13.5px] leading-[1.8] text-white/70">
                Enjoy free or discounted entry to Ad Club events, seminars, and
                signature programs that keep you plugged into what&apos;s next.
              </p>
            </div>
          </div>

          <div className="mt-12 text-sm sm:text-[15px] leading-[1.8] text-white/70 italic max-w-5xl">
            &ldquo;Membership isn&apos;t just about access, it&apos;s about
            belonging. It&apos;s about securing your place in Chennai&apos;s
            advertising story, joining a dynamic community of creative
            professionals, and positioning yourself at the heart of innovation,
            collaboration, and recognition.&rdquo;
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          variants={fadeUp}
          className="py-16 mt-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase font-asgard mb-12 tracking-wide">
            ANNUAL MEMBERSHIP{" "}
            <span className="text-primary">FEES (APRIL – MARCH)</span>
          </h2>

          <div className="space-y-6 text-[13px] sm:text-[15px] font-bold tracking-wider">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 border-b border-white/10 pb-5">
              <span className="font-asgard uppercase">CORPORATE MEMBERSHIP:</span>
              <span className="font-glancyr text-[15px] sm:text-[17px] tracking-normal">
                ₹{fees.corporate.toLocaleString()} + {fees.GST}% GST ={" "}
                <span className="text-primary">
                  ₹{priceWithGST(fees.corporate).toLocaleString()}
                </span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 border-b border-white/10 pb-5">
              <span className="font-asgard uppercase">INDIVIDUAL MEMBERSHIP:</span>
              <span className="font-glancyr text-[15px] sm:text-[17px] tracking-normal">
                ₹{fees.individual.toLocaleString()} + {fees.GST}% GST ={" "}
                <span className="text-primary">
                  ₹{priceWithGST(fees.individual).toLocaleString()}
                </span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 border-b border-white/10 pb-5">
              <span className="font-asgard uppercase">STUDENT MEMBERSHIP:</span>
              <span className="font-glancyr text-[15px] sm:text-[17px] tracking-normal">
                ₹{fees.student.toLocaleString()} + {fees.GST}% GST ={" "}
                <span className="text-primary">
                  ₹{priceWithGST(fees.student).toLocaleString()}
                </span>
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              navigate.push(
                isAuthenticated ? "/membership-application" : "/login",
              )
            }
            className="flex items-center group w-fit mx-auto mt-14"
          >
            <span className="px-6 py-3 text-sm md:text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300 block">
              JOIN NOW
            </span>
            <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center ml-[2px]">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        </motion.div>

        {/* Offline Forms Section */}
        {(files.uploadMembershipRegForm ||
          files.uploadMembershipRenewalForm) && (
          <motion.div
            variants={fadeUp}
            className="py-8 mt-10 border-t border-white/10 text-center"
          >
            <p className="text-xs sm:text-sm text-white/50 mb-6 font-asgard uppercase tracking-widest">
              Prefer to apply offline?
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {files.uploadMembershipRegForm && (
                <a
                  href={files.uploadMembershipRegForm}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline font-bold"
                >
                  <Download className="w-4 h-4" />
                  Application for Membership
                </a>
              )}
              {files.uploadMembershipRenewalForm && (
                <a
                  href={files.uploadMembershipRenewalForm}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline font-bold"
                >
                  <Download className="w-4 h-4" />
                  Application for Membership Renewal
                </a>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

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
    <motion.div
      className="min-h-screen bg-black text-white pt-28 px-4 mt-10 md:px-12 pb-12 font-glancyr"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <motion.aside className="md:col-span-1 space-y-8" variants={fadeUp}>
          <h2 className="text-4xl font-bold text-primary uppercase font-asgard leading-tight">
            Step In To Disrupt With Distinction
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-glancyr">
            Become a member, today!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            onClick={() =>
              navigate.push(isAuthenticated ? "/membership-application" : "/login")
            }
            className="flex items-center group w-fit"
          >
            <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
            Join Advertising Club Madras
            </span>
            <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>

          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="font-semibold text-white mb-4">Offline Application</h3>

            <div className="space-y-3">
              {files.uploadMembershipRegForm && (
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-primary" />
                  <a
                    href={files.uploadMembershipRegForm}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-sm text-primary"
                  >
                    Application for Membership
                  </a>
                </div>
              )}

              {files.uploadMembershipRenewalForm && (
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-primary" />
                  <a
                    href={files.uploadMembershipRenewalForm}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-sm text-primary"
                  >
                    Application for Membership Renewal
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.aside>

        <motion.main className="md:col-span-2 space-y-10" variants={fadeUp}>
          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            variants={fadeUp}
          >
            With over <strong className="text-primary">1,000+ dynamic voices</strong> and
            counting, Ad Club Madras unites every pulse of the advertising
            ecosystem. Be it clients and marketers to agencies, production
            houses, and media, we remain one of India&apos;s oldest and most
            influential creative institutions.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-white/85"
            variants={fadeUp}
          >
            For nearly seven decades, we&apos;ve been the epicenter of innovative
            disruption, the hub where advertising, media, and marketing
            professionals, students, and visionaries converge to shape the
            future of the craft.
          </motion.p>

          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-3 text-primary font-asgard">
              Why Become a Member?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <strong className="text-white">Connect &amp; Collaborate:</strong> Meet,
                mingle, and exchange ideas with advertising, media, and creative
                professionals who drive the industry forward.
              </li>
              <li>
                <strong className="text-white">Learn &amp; Lead:</strong> Level up your
                skills through workshops, seminars, and masterclasses led by
                industry leaders who&apos;ve been there, done that.
              </li>
              <li>
                <strong className="text-white">Gain Exposure:</strong> Access to top
                speakers and thought leaders from advertising, media,
                communications, PR, and beyond.
              </li>
              <li>
                <strong className="text-white">Exclusive Access:</strong> Enjoy free or
                discounted entry to Ad Club events, seminars, and signature
                programs that keep you plugged into what&apos;s next.
              </li>
            </ul>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-white/85"
            variants={fadeUp}
          >
            Membership isn&apos;t just about access, it&apos;s about belonging. It&apos;s
            about securing your place in Chennai&apos;s advertising story, joining a
            dynamic community of creative professionals, and positioning yourself
            at the heart of innovation, collaboration, and recognition.
          </motion.p>

          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-3 text-primary font-asgard">
              Annual Membership Fees (April – March)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                Corporate Membership: ₹5,000 + 18% GST = ₹5,900
              </li>

              <li>
                Individual Membership: ₹2,000 + 18% GST = ₹2,360
              </li>

              <li>
                Student Membership: ₹1,000 + 18% GST = ₹1,180
              </li>
            </ul>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base leading-relaxed text-white/90"
            variants={fadeUp}
          >
            Step into a legacy of excellence. Elevate your career. Connect with
            the community that defines what&apos;s next in the advertising industry
            of India.
          </motion.p>
        </motion.main>
      </div>
    </motion.div>
  );
}

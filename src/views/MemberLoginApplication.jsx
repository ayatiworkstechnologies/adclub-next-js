"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ------------------------ Validation Schema ------------------------ */
const schema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Min 6 characters").required("Password is required"),
});

export default function MemberLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.table(data); // Replace with login logic
    reset(); // clear form after submit
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8 md:px-20 mt-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold font-asgard text-center mb-14 uppercase tracking-wide">
        Application for Membership
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* === Login Form === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary p-10 rounded-2xl shadow-xl w-full text-black"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Email */}
            <div>
              <label className="block text-base uppercase font-bold font-asgard mb-3">
                Email ID
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className={`w-full font-glancyr text-lg rounded-lg px-5 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 ${
                  errors.email ? "ring-red-500 border-red-500" : "focus:ring-black"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-base uppercase font-bold font-asgard mb-3">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter password"
                className={`w-full font-glancyr text-lg rounded-lg px-5 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 ${
                  errors.password ? "ring-red-500 border-red-500" : "focus:ring-black"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm font-glancyr text-black underline hover:text-white transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="inline-flex items-center group"
              >
                <span className="px-7 py-3 text-lg bg-black text-white rounded-full font-bold font-asgard group-hover:bg-white group-hover:text-black transition duration-300">
                  SIGN IN
                </span>
                <span className="px-5 py-4 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition duration-300 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* === Membership Text === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-base sm:text-lg font-glancyr px-2 leading-relaxed mt-6 md:mt-10"
        >
          <p>
            We hereby apply for Membership to <br />
            <span className="italic text-primary font-asgard font-semibold uppercase">
              The Advertising Club Madras
            </span>
            . <br />
            If selected, we agree to be governed by the <br />
            by-laws, rules, and regulations of the Club.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

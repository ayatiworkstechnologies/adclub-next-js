"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

/* ------------------ Yup validation schema ------------------ */
const schema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Min 6 characters").required("Password is required"),
});

export default function LoginModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.table(data);   // 👉 replace with auth API call
    reset();
    onClose();             // close modal on success (optional)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="bg-primary text-black rounded-xl p-8 max-w-md w-full shadow-lg relative"
      >
        {/* close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-red-600"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-center mb-6 uppercase font-asgard">
          Member Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email --------------------------------------------------------- */}
          <div>
            <label className="block text-sm font-bold mb-1 font-asgard">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 ring-red-400"
                  : "border-gray-300 focus:ring-yellow-400"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password ------------------------------------------------------ */}
          <div>
            <label className="block text-sm font-bold mb-1 font-asgard">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter password"
              className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 ring-red-400"
                  : "border-gray-300 focus:ring-yellow-400"
              }`}
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot password link */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm underline hover:text-yellow-500"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button ----------------------------------------------- */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center group disabled:opacity-50"
            >
              <span className="px-5 py-3 text-lg bg-black text-white rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                {isSubmitting ? "Signing In…" : "SIGN IN"}
              </span>
              <span className="px-4 py-4 bg-black text-white rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

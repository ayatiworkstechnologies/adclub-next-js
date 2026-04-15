"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

import { memberLogin, memberRegister, forgotPassword } from "@/api/api" ;

/* ---------------- helpers to render API errors ---------------- */
// --- add these helpers near your imports ---
const humanizeKey = (k = "") =>
  k.replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const collectErrors = (errors) => {
  if (!errors) return [];
  return Object.entries(errors).flatMap(([field, msgs]) => {
    if (Array.isArray(msgs)) return msgs.map((m) => `${humanizeKey(field)}: ${m}`);
    if (typeof msgs === "string") return [`${humanizeKey(field)}: ${msgs}`];
    return [`${humanizeKey(field)}: ${JSON.stringify(msgs)}`];
  });
};


/* ---------------- Validation Schemas ---------------- */
const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const forgotSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function AuthForm() {
  const [mode, setMode] = useState("login"); // 'login' | 'register' | 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useRouter();

  // --- inside your component, change useForm to include setError ---
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  setError,          // <<— add this
} = useForm({
  resolver: yupResolver(
    mode === "register" ? registerSchema : mode === "forgot" ? forgotSchema : loginSchema
  ),
});


 // --- replace your onSubmit with this patched version ---
const onSubmit = async (data) => {
  try {
    if (mode === "login") {
      const res = await memberLogin(data);
      if (res?.status) {
        const userData = res.user;
        const token = res.token || res.user?.code || "dummy-token";
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("isAuthenticated", "true");

        Swal.fire({
          title: "Login Successful",
          text: `Welcome, ${userData?.firstName || "User"}!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        reset();
        navigate.push("/");
      } else {
        const lines = collectErrors(res?.errors);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          html: lines.length ? lines.join("<br/>") : (res?.message || "Login failed"),
        });
      }
    } else if (mode === "register") {
      const res = await memberRegister(data);

      if (res?.status) {
        Swal.fire({
          title: "Registered Successfully",
          text: "You can now login.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        reset();
        setMode("login");
      } else {
        // ✅ exact match for: {status:false, errors:{signUpEmail:["The sign up email has already been taken."]}}
        const takenMsg = res?.errors?.signUpEmail?.[0];
        if (takenMsg) {
          Swal.fire({
            icon: "error",
            title: "Email Already Taken",
            text: takenMsg,
          });
          // reflect under the Email input
          setError("email", { type: "server", message: takenMsg });
        } else {
          // generic fallback (handles other server-side field errors)
          const lines = collectErrors(res?.errors);
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            html: lines.length ? lines.join("<br/>") : (res?.message || "Registration failed"),
          });
        }
      }
    } else if (mode === "forgot") {
      const res = await forgotPassword(data.email);
      if (res?.status) {
        Swal.fire({
          title: "Email Sent",
          text: "Check your inbox for a reset link.",
          icon: "info",
          timer: 3000,
          showConfirmButton: false,
        });
        reset();
      } else {
        const lines = collectErrors(res?.errors);
        Swal.fire({
          icon: "error",
          title: "Request Failed",
          html: lines.length ? lines.join("<br/>") : (res?.message || "Failed to send reset email"),
        });
      }
    }
  } catch (error) {
    const api = error?.response?.data;
    const lines = collectErrors(api?.errors);
    const message =
      lines.length ? lines.join("<br/>") : (api?.message || error?.message || "Something went wrong. Please try again.");
    Swal.fire({ title: "Error", icon: "error", html: message });
  }
};

  const panelTitle =
    mode === "login" ? "Login" : mode === "register" ? "Register" : "Forgot Password";
  const fieldWrapClass = "space-y-2";
  const labelClass =
    "block font-asgard text-[18px] sm:text-[20px] uppercase tracking-wide text-black";
  const inputClass =
    "w-full h-[60px] rounded-[8px] border-0 bg-white px-6 text-[16px] font-glancyr text-black placeholder:text-[#8f98a8] outline-none ring-2 ring-transparent transition focus:ring-black";
  const errorInputClass = "ring-2 ring-red-500";
  const errorTextClass = "mt-2 text-sm font-glancyr text-red-700";
  const iconButtonClass =
    "absolute right-5 top-[48px] flex h-6 w-6 items-center justify-center text-black transition hover:opacity-70";

  return (
    <section className="bg-black px-4 py-16 text-white sm:px-8 md:px-20">
      <div className="mx-auto max-w-[920px] py-8 sm:py-14">
        <h2 className="mb-10 text-center font-asgard text-3xl font-bold uppercase tracking-wide md:text-4xl">
          {panelTitle}
        </h2>

        <div className="mx-auto max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[18px] bg-primary px-6 py-10 text-black shadow-xl sm:px-12 md:px-[50px] md:py-[55px]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {mode === "register" && (
                <div className={fieldWrapClass}>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Enter your name"
                    className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
                  />
                  {errors.name && <p className={errorTextClass}>{errors.name.message}</p>}
                </div>
              )}

              <div className={fieldWrapClass}>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                />
                {errors.email && <p className={errorTextClass}>{errors.email.message}</p>}
              </div>

              {(mode === "login" || mode === "register") && (
                <div className={`relative ${fieldWrapClass}`}>
                  <label className={labelClass}>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter password"
                    className={`${inputClass} pr-14 ${errors.password ? errorInputClass : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={iconButtonClass}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={25} strokeWidth={2.4} /> : <Eye size={25} strokeWidth={2.4} />}
                  </button>
                  {errors.password && <p className={errorTextClass}>{errors.password.message}</p>}
                </div>
              )}

              {mode === "register" && (
                <div className={`relative ${fieldWrapClass}`}>
                  <label className={labelClass}>Confirm Password</label>
                  <input
                    type={showConfirm ? "text" : "password"}
                    {...register("confirmPassword")}
                    placeholder="Confirm password"
                    className={`${inputClass} pr-14 ${errors.confirmPassword ? errorInputClass : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className={iconButtonClass}
                    aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirm ? <EyeOff size={25} strokeWidth={2.4} /> : <Eye size={25} strokeWidth={2.4} />}
                  </button>
                  {errors.confirmPassword && <p className={errorTextClass}>{errors.confirmPassword.message}</p>}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="flex items-center group w-fit"
              >
                <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                  {mode === "register" ? "CREATE ACCOUNT" : mode === "forgot" ? "SEND RESET LINK" : "LOGIN"}
                </span>
                <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </motion.button>
            </form>

            <div className="mt-10 space-y-6 text-center font-glancyr text-[16px] font-semibold text-black sm:text-[17px]">
              {mode !== "forgot" && (
                <button className="transition hover:underline" onClick={() => setMode("forgot")}>
                  Forgot your password?
                </button>
              )}
              {mode !== "forgot" && <div className="mx-auto h-px w-full max-w-[620px] bg-black" />}
              {mode === "login" && (
                <p>
                  Don’t have an account?{" "}
                  <button className="font-semibold text-[#0047ff] transition hover:underline" onClick={() => setMode("register")}>
                    Register here
                  </button>
                </p>
              )}
              {mode === "register" && (
                <p>
                  Already have an account?{" "}
                  <button className="font-semibold text-[#0047ff] transition hover:underline" onClick={() => setMode("login")}>
                    Login here
                  </button>
                </p>
              )}
              {mode === "forgot" && (
                <p>
                  Remembered your password?{" "}
                  <button className="font-semibold text-[#0047ff] transition hover:underline" onClick={() => setMode("login")}>
                    Back to Login
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

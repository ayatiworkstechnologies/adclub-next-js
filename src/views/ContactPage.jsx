"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { postContactForm } from "@/api/api"; // 👈 import the API call
import Swal from "sweetalert2"; // Optional for alerts

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.fullName,
        company_name: data.companyName,
        email: data.email,
        contact_number: data.contact,
        comments: data.message,
      };

      const res = await postContactForm(payload);

      if (res.id) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Message sent successfully!",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong",
      });
    }
  };

  const labelClass =
    "block font-asgard text-[16px] uppercase tracking-wide text-black sm:text-[18px]";
  const inputClass =
    "h-[60px] w-full rounded-[8px] border-0 bg-white px-6 font-glancyr text-[16px] text-black outline-none ring-2 ring-transparent transition placeholder:text-[#8f98a8] focus:ring-black";
  const textareaClass =
    "min-h-[140px] w-full resize-none rounded-[8px] border-0 bg-white px-6 py-4 font-glancyr text-[16px] text-black outline-none ring-2 ring-transparent transition placeholder:text-[#8f98a8] focus:ring-black";
  const errorTextClass = "mt-2 font-glancyr text-sm text-red-700";
  const errorInputClass = "ring-2 ring-red-500";

  return (
    <section className="mt-10 bg-black px-4 py-16 text-white sm:px-8 md:px-16">
      <h2 className="mb-10 text-center font-asgard text-2xl font-bold uppercase md:text-3xl">
        Contact Us
      </h2>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-[18px] bg-[#ffd91a] px-6 py-10 text-black shadow-xl sm:px-8 md:px-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClass}>
                  Full Name
                </label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  type="text"
                  placeholder="Enter your name"
                  className={`${inputClass} ${errors.fullName ? errorInputClass : ""}`}
                />
                {errors.fullName && (
                  <p className={errorTextClass}>
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  Company Name
                </label>
                <input
                  {...register("companyName")}
                  type="text"
                  placeholder="Enter your company"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  Email ID
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                />
                {errors.email && (
                  <p className={errorTextClass}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  Contact Number
                </label>
                <input
                  {...register("contact", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^\d{10}$/, // 10 digit validation
                      message: "Enter a valid 10-digit number",
                    },
                  })}
                  type="text"
                  placeholder="Enter your contact"
                  className={`${inputClass} ${errors.contact ? errorInputClass : ""}`}
                />
                {errors.contact && (
                  <p className={errorTextClass}>
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className={labelClass}>
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Enter your message"
                className={`${textareaClass} ${errors.message ? errorInputClass : ""}`}
              ></textarea>
              {errors.message && (
                <p className={errorTextClass}>
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center group w-fit"
              type="submit"
            >
              <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                SUBMIT
              </span>
              <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-sm sm:text-base leading-relaxed mt-20"
        >
          <h3 className="text-xl font-asgard uppercase font-bold">
            Advertising Club Madras
          </h3>
          <p className="font-glancyr">
            <a
              href="https://maps.app.goo.gl/RUgXTRGDZZdPHcqq9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              57, Bazullah Road,
              <br />
              T. Nagar, Chennai – 600 017
            </a>
          </p>

          <p>
            <strong className="font-asgard uppercase">Phone :</strong>{" "}
            <a href="tel:8248717152" className="hover:underline">
              8248717152
            </a>
            ,{" "}
            <a href="tel:04442694778" className="hover:underline">
              044 - 42694778
            </a>
          </p>

          <p className="font-glancyr">
            <strong className="font-asgard uppercase">Email :</strong>
            <br />
            <a href="mailto:admin@adclubmadras.com" className="hover:underline">
              admin@adclubmadras.com
            </a>
            <br />
            <a
              href="mailto:advertisingclubmadras@gmail.com"
              className="hover:underline"
            >
              advertisingclubmadras@gmail.com
            </a>
          </p>

          <p className="font-glancyr">
            <strong className="font-asgard uppercase">PAN No :</strong>{" "}
            AAAAA5944J
          </p>
          <p className="font-glancyr">
            <strong className="font-asgard uppercase">GST No :</strong>{" "}
            33AAAAA5944J1ZV
          </p>
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 border-4 border-primary rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          title="Advertising Club Madras Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.630971229051!2d80.22997817412154!3d13.047413913213534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526659e0fc5a8d%3A0x7e15da4d801abac8!2sAdvertising%20Club%20Madras!5e0!3m2!1sen!2sus!4v1749113955641!5m2!1sen!2sus"
          width="100%"
          height="400"
          className="w-full h-72 sm:h-96"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
}

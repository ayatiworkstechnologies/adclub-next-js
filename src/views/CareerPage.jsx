"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Building2, Upload } from "lucide-react";
import Swal from "sweetalert2";
import { postJobApplication } from "@/api/api";
import Loader from "@/components/Loader";

// 🔶 Validation Schema including logo
const schema = yup.object({
  email: yup.string().email().required("Company Email is required"),
  job_title: yup.string().required("Job Title is required"),
  location: yup.string().required("Location is required"),
  phoneNo: yup.string().required("Mobile No is required"),
  job_type: yup
    .string()
    .oneOf(["Full Time", "Part Time", "Internship"])
    .required("Job Type is required"),
  description: yup.string().required("Description is required"),
  application_email: yup
    .string()
    .email()
    .required("Application Email is required"),
  company_name: yup.string().required("Company Name is required"),
  website: yup
    .string()
    .url("Invalid URL")
    .nullable()
    .transform((v) => (v === "" ? null : v)),
  tagline: yup.string().nullable(),
  video: yup
    .string()
    .url("Invalid video URL")
    .nullable()
    .transform((v) => (v === "" ? null : v)),
  twitter_username: yup.string().nullable(),
  logo: yup
    .mixed()
    .required("Logo is required")
    .test(
      "fileExist",
      "Logo is required",
      (value) => value && value.length > 0
    ),
});

export default function JobApplicationPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // 🔸 Convert to FormData for file upload
      const formData = new FormData();
      for (const key in data) {
        if (key === "logo") {
          formData.append("logo", data.logo[0]); // single file
        } else {
          formData.append(key, data[key] ?? "");
        }
      }

      const res = await postJobApplication(formData);

      if (res.id) {
        Swal.fire("Success!", "Job submitted successfully!", "success");
        reset();
        document.querySelector('input[type="file"]').value = "";
      } else {
        Swal.fire("Failed", "Something went wrong.", "error");
      }
    } catch (err) {
      Swal.fire(
        "Error",
        err?.response?.data?.message || "Unexpected error",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const labelClass =
    "block font-asgard text-[15px] uppercase tracking-wide text-black sm:text-[16px]";
  const inputClass =
    "h-[58px] w-full rounded-[8px] border-0 bg-white px-5 font-glancyr text-[16px] text-black outline-none ring-2 ring-transparent transition placeholder:text-[#8f98a8] focus:ring-black";
  const textareaClass =
    "min-h-[150px] w-full resize-none rounded-[8px] border-0 bg-white px-5 py-4 font-glancyr text-[16px] text-black outline-none ring-2 ring-transparent transition placeholder:text-[#8f98a8] focus:ring-black";
  const selectClass =
    "h-[58px] w-full rounded-[8px] border-0 bg-white px-5 font-glancyr text-[16px] text-black outline-none ring-2 ring-transparent transition focus:ring-black";
  const errorTextClass = "mt-2 font-glancyr text-sm text-red-700";
  const errorInputClass = "ring-2 ring-red-500";

  return (
    <div className="mt-20 min-h-screen bg-black px-4 py-14 text-white sm:px-8 md:px-16">
      {loading && <Loader />}
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-asgard text-[15px] uppercase tracking-wide text-primary">
            Careers
          </p>
          <h1 className="font-asgard text-3xl font-bold uppercase leading-tight md:text-5xl">
            Connect talent with Chennai's advertising community
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-glancyr text-base leading-7 text-white/75">
            Share openings for creative, media, marketing, strategy, and brand communication roles with The Advertising Club Madras network.
          </p>
        </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.25fr]">
        {/* Job List */}
        <div className="space-y-6">
          <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6 shadow-xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
              <BriefcaseBusiness size={24} />
            </span>
            <div>
              <h2 className="font-asgard text-2xl font-bold uppercase text-primary">Latest Jobs</h2>
              <p className="font-glancyr text-sm text-white/60">Fresh opportunities from member companies</p>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              // Example: this array is empty or populated dynamically
            ].length === 0 ? (
              <li className="rounded-[14px] border border-dashed border-white/20 bg-black/35 p-6 text-center">
                <Building2 className="mx-auto mb-3 text-primary" size={32} />
                <p className="font-asgard text-lg uppercase text-white">No job postings yet.</p>
                <p className="mt-2 font-glancyr text-sm leading-6 text-white/60">
                  New career opportunities will appear here once they are published.
                </p>
              </li>
            ) : (
              [
                // if you have jobs, they will be mapped here
              ].map((job, index) => (
                <li
                  key={index}
                  className="rounded-[14px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <h3 className="font-asgard text-lg font-semibold uppercase">{job.title}</h3>
                  <p className="mt-2 font-glancyr text-sm text-white/60">
                    {job.location} · {job.type}
                  </p>
                </li>
              ))
            )}
          </ul>
          </div>
        </div>

        {/* Job Form */}
        <div className="rounded-[18px] bg-primary px-6 py-10 text-black shadow-xl sm:px-8 md:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <ArrowRight size={24} />
            </span>
            <div>
              <h2 className="font-asgard text-2xl font-bold uppercase">Post a Job</h2>
              <p className="font-glancyr text-sm text-black/60">Fill the role details below</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
            encType="multipart/form-data"
          >
            {/* Required Fields */}
            {[
              {
                name: "email",
                label: "Your Email *",
                type: "email",
                placeholder: "hr@company.com",
              },
              {
                name: "job_title",
                label: "Job Title *",
                type: "text",
                placeholder: "Frontend Developer",
              },
              {
                name: "location",
                label: "Location *",
                type: "text",
                placeholder: "Chennai",
              },

              {
                name: "phoneNo",
                label: "Mobile No *",
                type: "text",
                placeholder: "9876543211",
              },
              {
                name: "application_email",
                label: "Application Email *",
                type: "email",
                placeholder: "apply@company.com",
              },
              {
                name: "company_name",
                label: "Company Name *",
                type: "text",
                placeholder: "TechCorp Pvt Ltd",
              },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} className="space-y-2">
                <label className={labelClass}>{label}</label>
                <input
                  {...register(name)}
                  type={type}
                  placeholder={placeholder}
                  className={`${inputClass} ${errors[name] ? errorInputClass : ""}`}
                />
                {errors[name] && (
                  <p className={errorTextClass}>{errors[name].message}</p>
                )}
              </div>
            ))}

            {/* Job Type */}
            <div className="space-y-2">
              <label className={labelClass}>Job Type *</label>
              <select
                {...register("job_type")}
                className={`${selectClass} ${errors.job_type ? errorInputClass : ""}`}
              >
                <option value="">-- Select --</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.job_type && (
                <p className={errorTextClass}>
                  {errors.job_type.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className={labelClass}>Description *</label>
              <textarea
                {...register("description")}
                rows={4}
                placeholder="Describe the role"
                className={`${textareaClass} ${errors.description ? errorInputClass : ""}`}
              ></textarea>
              {errors.description && (
                <p className={errorTextClass}>
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Optional Fields */}
            {[
              {
                name: "website",
                label: "Website",
                type: "url",
                placeholder: "https://company.com",
              },
              {
                name: "tagline",
                label: "Tagline",
                type: "text",
                placeholder: "We build the future",
              },
              {
                name: "video",
                label: "Video URL",
                type: "url",
                placeholder: "https://youtu.be/...",
              },
              {
                name: "twitter_username",
                label: "Twitter Username",
                type: "text",
                placeholder: "@companyjobs",
              },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} className="space-y-2">
                <label className={labelClass}>{label}</label>
                <input
                  {...register(name)}
                  type={type}
                  placeholder={placeholder}
                  className={`${inputClass} ${errors[name] ? errorInputClass : ""}`}
                />
                {errors[name] && (
                  <p className={errorTextClass}>{errors[name].message}</p>
                )}
              </div>
            ))}

            {/* Logo Upload */}
            <div className="space-y-2">
              <label className={labelClass}>Company Logo *</label>
              <label
                className={`flex min-h-[76px] cursor-pointer items-center justify-between gap-4 rounded-[8px] bg-white px-5 font-glancyr text-black ring-2 ring-transparent transition hover:ring-black ${
                  errors.logo ? errorInputClass : ""
                }`}
              >
                <span className="text-[#8f98a8]">Upload company logo</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Upload size={20} />
                </span>
                <input className="sr-only" type="file" accept="image/*" {...register("logo")} />
              </label>
              {errors.logo && (
                <p className={errorTextClass}>{errors.logo.message}</p>
              )}
            </div>

            {/* Submit Button */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center group w-fit"
              type="submit"
            >
              <span className="px-6 py-3 text-base bg-white hover:bg-primary text-black rounded-full font-bold font-asgard group-hover:bg-primary group-hover:text-black transition duration-300">
                {loading ? "Submitting..." : "Submit Job"}
              </span>
              <span className="px-4 py-3 bg-white hover:bg-primary text-black rounded-full group-hover:bg-primary group-hover:text-black transition duration-300 flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

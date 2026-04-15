"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { postCourseEnquiry } from "@/api/api";

export default function CourseEnquiryForm({ setCursorHover }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm();

    // Auto-calculate age from DOB
    const dobValue = watch("dob");
    useEffect(() => {
        if (dobValue) {
            const birth = new Date(dobValue);
            const today = new Date();
            let age = today.getFullYear() - birth.getFullYear();
            const m = today.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
            setValue("age", age > 0 ? age : "");
        }
    }, [dobValue, setValue]);

    const onSubmit = async (data) => {
        try {
            const payload = {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                contact_number: data.phone,
                qualification: data.qualification,
                address: data.address,
                date_of_birth: data.dob,
                age: data.age,
                message: data.whyCourse,
                role: data.role,
                referral_source: data.referralSource,
            };

            const res = await postCourseEnquiry(payload);

            if (res.id) {
                Swal.fire({
                    icon: "success",
                    title: "Application Submitted!",
                    text: "We'll get back to you shortly.",
                    background: "#111",
                    color: "#fff",
                    confirmButtonColor: "#D4AF37",
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

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 relative z-10"
        >
            {/* First Name / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative">
                    <input
                        {...register("firstName", { required: "Required" })}
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="First name"
                    />
                    {errors.firstName && (
                        <span className="absolute right-3 top-4 text-xs text-red-500">{errors.firstName.message}</span>
                    )}
                </div>
                <div className="group relative">
                    <input
                        {...register("lastName", { required: "Required" })}
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Last name"
                    />
                    {errors.lastName && (
                        <span className="absolute right-3 top-4 text-xs text-red-500">{errors.lastName.message}</span>
                    )}
                </div>
            </div>

            {/* Email */}
            <div className="group relative">
                <input
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email",
                        },
                    })}
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Email"
                />
                {errors.email && (
                    <span className="absolute right-3 top-4 text-xs text-red-500">{errors.email.message}</span>
                )}
            </div>

            {/* Phone Number */}
            <div className="group relative">
                <input
                    {...register("phone", {
                        required: "Required",
                        pattern: {
                            value: /^\d{10}$/,
                            message: "10 digits required",
                        },
                    })}
                    type="tel"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Phone Number"
                />
                {errors.phone && (
                    <span className="absolute right-3 top-4 text-xs text-red-500">{errors.phone.message}</span>
                )}
            </div>

            {/* Qualification */}
            <div className="group relative">
                <input
                    {...register("qualification", { required: "Required" })}
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Please enter your Qualification"
                />
                {errors.qualification && (
                    <span className="absolute right-3 top-4 text-xs text-red-500">{errors.qualification.message}</span>
                )}
            </div>

            {/* Address */}
            <div className="group relative">
                <textarea
                    {...register("address", { required: "Required" })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none h-28"
                    placeholder="Address"
                ></textarea>
                {errors.address && (
                    <span className="absolute right-3 top-4 text-xs text-red-500">{errors.address.message}</span>
                )}
            </div>

            {/* Date of Birth / Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative">
                    <input
                        {...register("dob", { required: "Required" })}
                        type="date"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                        placeholder="Date of Birth"
                    />
                    {errors.dob && (
                        <span className="absolute right-3 top-4 text-xs text-red-500">{errors.dob.message}</span>
                    )}
                </div>
                <div className="group relative">
                    <input
                        {...register("age")}
                        type="number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Age"
                    />
                </div>
            </div>

            {/* Why did you choose this course */}
            <div className="group relative">
                <input
                    {...register("whyCourse")}
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Why did you choose this course?"
                />
            </div>

            {/* Role / How did you hear */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                    <select
                        {...register("role", { required: "Required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-black text-gray-400">Are you a student, employee, or freelancer?</option>
                        <option value="Student" className="bg-black">Student</option>
                        <option value="Employee" className="bg-black">Employee</option>
                        <option value="Freelancer" className="bg-black">Freelancer</option>
                        <option value="Other" className="bg-black">Other</option>
                    </select>
                </div>
                <div className="relative">
                    <select
                        {...register("referralSource", { required: "Required" })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-glancyr text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-black text-gray-400">How did you hear about the course?</option>
                        <option value="Social Media" className="bg-black">Social Media</option>
                        <option value="Friend/Colleague" className="bg-black">Friend / Colleague</option>
                        <option value="Website" className="bg-black">Website</option>
                        <option value="Other" className="bg-black">Other</option>
                    </select>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                onMouseEnter={() => setCursorHover && setCursorHover(true)}
                onMouseLeave={() => setCursorHover && setCursorHover(false)}
                className="w-full relative overflow-hidden rounded-xl font-asgard uppercase font-bold text-black bg-primary py-5 px-8 mt-4 group"
            >
                <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Application{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </motion.button>
        </form>
    );
}

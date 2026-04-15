"use client";
import { useRouter } from 'next/navigation';
import React from "react";

const img404 = "/assets/404.svg";


const NotFoundPage = () => {
  const navigate = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Illustration */}
      <img
        src={img404} // Replace with another if needed
        alt="404 illustration"
        className="w-full max-w-md mb-8"
      />
      

      {/* Heading */}
      {/* <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 text-center">
        404
      </h1> */}
      <p className="text-xl md:text-2xl mb-4 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate.push("/")}
        className="mt-6 px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:bg-yellow-300 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;

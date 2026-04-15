"use client";
// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-backend-url.com/api", // replace this
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

"use client";
// Image Imports
import image1 from "@/assets/gallary/img.png";
import image2 from "@/assets/gallary/img1.jpg";
import image3 from "@/assets/gallary/img2.jpg";
import image4 from "@/assets/gallary/img3.jpg";

import pic1 from "@/assets/gallary/gallery-2.png";
import pic2 from "@/assets/gallary/gallery-3.png";
import pic3 from "@/assets/gallary/gallery-4.png";
import pic4 from "@/assets/gallary/gallery-5.png";
import pic5 from "@/assets/gallary/gallery-6.png";
import pic6 from "@/assets/gallary/gallery-7.png";
import pic7 from "@/assets/gallary/gallery-8.png";
import pic8 from "@/assets/gallary/gallery-1.png";

import image18 from "@/assets/gallary/gallery-9.jpg";
import image19 from "@/assets/gallary/gallery-10.jpg";
import image20 from "@/assets/gallary/gallery-11.jpg";
import image21 from "@/assets/gallary/gallery-12.jpg";
import image5 from "@/assets/gallary/gallery-13.jpg";
import image6 from "@/assets/gallary/gallery-14.jpg";
import image7 from "@/assets/gallary/gallery-15.jpg";
import image8 from "@/assets/gallary/gallery-16.jpg";
import image9 from "@/assets/gallary/gallery-17.jpg";
import image10 from "@/assets/gallary/gallery-18.jpg";
import image11 from "@/assets/gallary/gallery-19.jpg";
import image12 from "@/assets/gallary/gallery-20.jpg";
import image13 from "@/assets/gallary/gallery-21.jpg";
import image14 from "@/assets/gallary/gallery-22.jpg";
import image15 from "@/assets/gallary/gallery-23.jpg";
import image16 from "@/assets/gallary/gallery-24.jpg";
import image17 from "@/assets/gallary/gallery-25.jpg";

const images = [
  image18, image19, image20, image21, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17,
];

// Category Tabs
export const categories = [
  "All",
  "Gyan Series",
  "Sports",
  "Awards",
  "Workshops",
  "Quiz",
  "Tech",
  "News",
  "Spotlight",
];

// Common Data
const commonGuestList = [
  { role: "CHAIRMAN", org: "Kasturi & Sons Ltd", name: "Mr. N Murali" },
  { role: "CHAIRMAN", org: "Sri Krishna Sweets", name: "K. Sweetswamy" },
  { role: "CHAIRMAN & WORLD PRESIDENT", org: "International Advertising Association", name: "R. S. Suresh Hanna" },
  { role: "PAST PRESIDENT", org: "IAA India", name: "Mr. N Murali" },
];

const commonImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

const commonGuestList1 = [
  { role: "CHAIRMAN", org: "Kasturi & Sons Ltd", name: "Mr. N Murali" },
  { role: "CHAIRMAN", org: "Sri Krishna Sweets", name: "K. Sweetswamy" },
  { role: "CHAIRMAN & WORLD PRESIDENT", org: "International Advertising Association", name: "R. S. Suresh Hanna" },
  { role: "PAST PRESIDENT", org: "IAA India", name: "Mr. N Murali" },
];

const commonImages1 = [image18, image19, image20, image21, image5, image6, image7, image8, image9,];

const commonGuestList2 = [
  { role: "CHAIRMAN", org: "Kasturi & Sons Ltd", name: "Mr. N Murali" },
  { role: "CHAIRMAN", org: "Sri Krishna Sweets", name: "K. Sweetswamy" },
  { role: "CHAIRMAN & WORLD PRESIDENT", org: "International Advertising Association", name: "R. S. Suresh Hanna" },
  { role: "PAST PRESIDENT", org: "IAA India", name: "Mr. N Murali" },
];

const commonImages2 = [image10, image11, image12, image13, image14, image15, image16, image17,];

// Event Data
export const eventData = [
  {
    id: 1,
    title: "AD Ventures Book Launch",
    date: "August 01, 2018",
    description: "Advertising Club Madras/Head of School & PG Director – Mr. Suman James",
    location: "Madras Management Association",
    image: image1,
    category: "Gyan Series",
    eventOrganizer: "Launch of the Book AD VENTURES Authored by Dr. T.S. Nagarajan",
    guestLabel: "Guests of Honour",
    guestList: commonGuestList,
    images: commonImages,
  },
  {
    id: 2,
    title: "REGIONALISATION OF DIGITAL MEDIA DRIVE REVENUE GROWTH.",
    date: "December 13, 2018",
    description: "Advertising Club Madras",
    location: "Ad Club Convention Centre",
    image: image2,
    category: "Gyan Series",
    eventOrganizer: "Panel on Digital Media Trends",
    guestLabel: "Panel Guests",
    guestList: commonGuestList1,
    images: commonImages1,
  },
  {
    id: 3,
    title: "LIST OF PREVIOUS GYAN SERIES",
    date: "March 01, 2018",
    description: "",
    location: "",
    image: image3,
    category: "Gyan Series",
    eventOrganizer: "Archived Sessions Overview",
    guestLabel: "Guests",
    guestList: commonGuestList2,
    images: commonImages2,
  },
  {
    id: 4,
    title: "DIGITAL AUDIENCE MEASUREMENT",
    date: "June 06, 2017",
    description: "Anand Ramaswamy",
    location: "MMA Convention Centre",
    image: image4,
    category: "Gyan Series",
    eventOrganizer: "Digital Metrics Talk by Anand Ramaswamy",
    guestLabel: "Keynote Guest",
    guestList: commonGuestList,
    images: commonImages,
  },
  {
    id: 5,
    title: "Intercollege Football Finals",
    date: "October 10, 2022",
    description: "Championship between top 4 colleges",
    location: "Main Ground",
    image: image1,
    category: "Sports",
    eventOrganizer: "Student Sports Council",
    guestLabel: "Chief Guests",
    guestList: commonGuestList1,
    images: commonImages1,
  },
  {
    id: 6,
    title: "Annual Cricket Match",
    date: "September 05, 2022",
    description: "Faculty vs Students friendly",
    location: "Campus Stadium",
    image: image2,
    category: "Sports",
    eventOrganizer: "Department of Sports",
    guestLabel: "Special Guests",
    guestList: commonGuestList2,
    images: commonImages2,
  },
  {
    id: 7,
    title: "Best Innovator Award",
    date: "January 15, 2023",
    description: "Awarded to the top innovator of the year",
    location: "Auditorium Hall A",
    image: image3,
    category: "Awards",
    eventOrganizer: "Innovation Club",
    guestLabel: "Award Presenters",
    guestList: commonGuestList,
    images: commonImages,
  },
  {
    id: 8,
    title: "Young Achievers' Award",
    date: "February 12, 2023",
    description: "Celebrating young student achievers",
    location: "Seminar Hall",
    image: image4,
    category: "Awards",
    eventOrganizer: "Academic Excellence Board",
    guestLabel: "Guests",
    guestList: commonGuestList1,
    images: commonImages1,
  },
  {
    id: 9,
    title: "React Workshop",
    date: "March 22, 2023",
    description: "Introductory ReactJS development session",
    location: "Lab 3 - IT Block",
    image: image2,
    category: "Workshops",
    eventOrganizer: "IT Department",
    guestLabel: "Mentors",
    guestList: commonGuestList2,
    images: commonImages2,
  },
  {
    id: 10,
    title: "AI and Ethics Talk",
    date: "April 10, 2023",
    description: "Panel discussion on AI safety and ethics",
    location: "Conference Room 2",
    image: image4,
    category: "Tech",
    eventOrganizer: "Ethics & Technology Forum",
    guestLabel: "Speakers",
    guestList: commonGuestList,
    images: commonImages,
  },
  {
    id: 11,
    title: "Weekly Tech Quiz",
    date: "Every Friday",
    description: "Test your knowledge in tech!",
    location: "Online",
    image: image3,
    category: "Quiz",
    eventOrganizer: "Tech Club",
    guestLabel: "Quiz Masters",
    guestList: commonGuestList1,
    images: commonImages1,
  },
  {
    id: 12,
    title: "Newsletter Launch",
    date: "June 01, 2023",
    description: "Monthly student newsletter",
    location: "Library Foyer",
    image: image2,
    category: "News",
    eventOrganizer: "Editorial Committee",
    guestLabel: "Editorial Guests",
    guestList: commonGuestList2,
    images: commonImages2,
  },
  {
    id: 13,
    title: "Spotlight - Women in Media",
    date: "March 08, 2023",
    description: "Celebrating International Women's Day",
    location: "Main Auditorium",
    image: image1,
    category: "Spotlight",
    eventOrganizer: "Diversity Council",
    guestLabel: "Honourable Guests",
    guestList: commonGuestList,
    images: commonImages,
  },
];

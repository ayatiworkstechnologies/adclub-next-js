"use client";
// data/Gallary.js

const EventBanner1 = "/events/eventbanner.jpg";
const EventBanner2 = "/events/eventbanner2.jpeg";
const EventBanner3 = "/events/eventbanner3.jpg";
const EventBanner4 = "/events/eventbanner4.png";

export const categories = [
  "All",
  "GYAN Series",
  "Open Series",
  "Sports",
  "Workshop",
  "Quiz",
  "News",
  "Awards",
  "ADTalks",
  "INSIGHTVIEW SERIES",
];

export const eventData = [
  // 🟡 Open Series
  {
    id: 1,
    date: "27",
    month: "JAN",
    year: "24",
    day: "SUN",
    title: "Webinar On Resetting Advertiser And Advertising Expectations",
    tag: "Open Series",
    time: "04:00 PM - 08:00 PM",
    venue: "Open Series",
    fullDate: "January 27, 2024",
    description:
      "A Roundtable discussion on the key learnings of 2020 and understanding how brands are preparing to align their ad spends to a new normal in 2021",
    image: EventBanner1,
    category: "Open Series",
  },

  // 🟢 Sports
  {
    id: 2,
    date: "01",
    month: "FEB",
    year: "24",
    day: "TUE",
    title: "8th AdClub T10 Tennis Ball Cricket Tournament 2024",
    tag: "Sports",
    time: "04:00 PM - 08:00 PM",
    venue: "Sports Arena",
    fullDate: "February 1, 2024",
    description:
      "Exciting cricket tournament to promote team spirit and engagement.",
    image: EventBanner2,
    category: "Sports",
  },

  // 🧠 Workshop
  {
    id: 3,
    date: "15",
    month: "MAR",
    year: "24",
    day: "FRI",
    title: "Workshop On How To Create A Cool Brand Name",
    tag: "Workshop",
    time: "10:00 AM - 01:00 PM",
    venue: "Hall A",
    fullDate: "March 15, 2024",
    description: "Interactive branding session with leading creative minds.",
    image: EventBanner3,
    category: "Workshop",
  },

  // ❓ Quiz
  {
    id: 4,
    date: "27",
    month: "JAN",
    year: "24",
    day: "SUN",
    title: "TOI And Adclub Madras Present An Exclusive Brand Quiz",
    tag: "Quiz",
    time: "02:00 PM - 05:00 PM",
    venue: "Main Hall",
    fullDate: "January 27, 2024",
    description: "A fun and engaging quiz to test your brand knowledge.",
    image: EventBanner4,
    category: "Quiz",
  },

  // 📰 News
  {
    id: 5,
    date: "05",
    month: "APR",
    year: "24",
    day: "FRI",
    title: "Media Buzz 2024 – Latest Industry Updates",
    tag: "News",
    time: "Online",
    venue: "Online",
    fullDate: "April 5, 2024",
    description: "Quarterly release of the latest media trends and reports.",
    image: EventBanner1,
    category: "News",
  },

  // 🏆 Awards
  {
    id: 6,
    date: "20",
    month: "MAY",
    year: "24",
    day: "MON",
    title: "AdClub Creative Excellence Awards 2024",
    tag: "Awards",
    time: "06:00 PM - 09:00 PM",
    venue: "Grand Auditorium",
    fullDate: "May 20, 2024",
    description: "Celebrating the most innovative campaigns and creators.",
    image: EventBanner2,
    category: "Awards",
  },

  // 🎙️ ADTalks
  {
    id: 7,
    date: "10",
    month: "JUN",
    year: "24",
    day: "MON",
    title: "ADTalks: Shaping the Future of Indian Advertising",
    tag: "ADTalks",
    time: "11:00 AM - 01:00 PM",
    venue: "Hall B",
    fullDate: "June 10, 2024",
    description: "A thought leadership panel featuring top media executives.",
    image: EventBanner3,
    category: "ADTalks",
  },

  // 🔍 Insightview Series
  {
    id: 8,
    date: "30",
    month: "JUN",
    year: "24",
    day: "SUN",
    title: "InsightView: Decoding the Indian Youth Market",
    tag: "INSIGHTVIEW SERIES",
    time: "03:00 PM - 06:00 PM",
    venue: "Online",
    fullDate: "June 30, 2024",
    description: "Exclusive research findings and Q&A with marketers.",
    image: EventBanner4,
    category: "INSIGHTVIEW SERIES",
  },
  {
    id: 9,
    date: "30",
    month: "JUN",
    year: "24",
    day: "SUN",
    title: "InsightView: Decoding the Indian Youth Market",
    tag: "GYAN Series",
    time: "03:00 PM - 06:00 PM",
    venue: "Online",
    fullDate: "June 30, 2024",
    description: "Exclusive research findings and Q&A with marketers.",
    image: EventBanner1,
    category: "GYAN Series",
  },
];

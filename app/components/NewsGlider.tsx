"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuDot } from "react-icons/lu";

export default function NewsGlider() {
  const newsHeadlines = [
    {
      title: "Breaking: New Tech Trends in 2025",
      link: "/news/tech-trends-2025",
    },
    {
      title: "Economy: Inflation Drops by 2% in the US",
      link: "/news/inflation-update",
    },
    {
      title: "Sports: Nigeria Wins AFCON 2025",
      link: "/news/nigeria-afcon-2025",
    },
    {
      title: "Music: Rema's new song declared potential jam of the year",
      link: "/news/rema's new hit",
    },
    {
      title:
        "Breaking: D.O.G.E discovers tax payer money used to fund terrorist groups",
      link: "/news/terrorist-funding-by-the-us",
    },
  ];

  return (
    <div className="md:mx-20 mx-2 py-2">
      <div className="relative w-full border border-gray-200 text-white overflow-hidden flex items-center h-12">
        {/* Sliding News Headlines */}
        <motion.div
          className="flex space-x-10"
          initial={{ x: "10%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
          }}
          whileHover={{ x: 0 }}
        >
          {newsHeadlines.map((news, index) => (
            <Link
              key={index}
              href={news.link}
              className="text-black flex items-center text-sm font-medium hover:underline whitespace-nowrap overflow-hidden"
            >
              <LuDot size={25} />
              {news.title}
            </Link>
          ))}
        </motion.div>

        {/* Fixed News Bar Text */}
        <div className="absolute uppercase font-heading left-0 top-0 h-full flex items-center px-4 bg-red-700 font-bold text-sm">
          News Bar
        </div>
      </div>
    </div>
  );
}

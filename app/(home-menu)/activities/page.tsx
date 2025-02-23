import HomeFooter from "@/app/components/HomeFooter";
import HomeNav from "@/app/components/HomeNav";
import YoutubeVideo from "@/app/components/YoutubeVideo";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <HomeNav />
      <div>
        <h1 className="text-2xl md:text-4xl text-center md:pt-12 pt-10 font-semibold">
          LJE Activities
        </h1>
        <div>
          <YoutubeVideo link="https://www.youtube.com/embed/Cf4mFgqgDBg?si=P0cOx5FYRdhwDyvR" />
          <YoutubeVideo link="https://www.youtube.com/embed/-oFSSbdHLTU?si=4qbPAzVV6UzSsWAq" />
          <YoutubeVideo link="https://www.youtube.com/embed/JsaWLfKqTJc?si=rubxOFdQTEUSYVWy" />
          <YoutubeVideo link="https://www.youtube.com/embed/M-VZdVsqD6I?si=E1bilcJvxbYk3xJw" />
        </div>
      </div>
      <Link
        href="https://www.youtube.com/@Ljenigeria/videos"
        className="btn px-24 text-white bg-green-700 hover:bg-gray-900 mx-[30%] mt-6 mb-16 flex items-center gap-2"
      >
        See our youtube
      </Link>
      <HomeFooter />
    </div>
  );
}

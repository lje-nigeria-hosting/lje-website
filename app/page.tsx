import React from "react";
import HomeNav from "./components/HomeNav";
import Image from "next/image";
import NewsGlider from "./components/NewsGlider";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaCircleUser,
  FaIdCardClip,
} from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import HomeFooter from "./components/HomeFooter";
import YoutubeVideo from "./components/YoutubeVideo";
import prisma from "@/utils/db";

export default async function HomePage() {
  const newsList = await prisma.announcement.findMany({
    where: { membersOnly: "NO" },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <div>
      <HomeNav />
      <div className="relative w-full h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-600 bg-[url('/homeFiles/header-image2.jpeg')] bg-cover bg-center bg-blend-multiply backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 px-10 md:px-20 text-left">
          <h1 className="text-base text-green-700 md:text-lg font-semibold tracking-wider">
            LJE NIGERIA
          </h1>
          <p className="mt-4 text-4xl md:text-6xl text-white leading-tight">
            Leadership Hub, Justice & <br /> Economic Advancement
          </p>
          <div className="block">
            <Link
              href="/signup"
              className="btn text-white bg-green-700 mt-5 md:mt-8 md:px-10 px-6 border-none hover:bg-gray-900"
            >
              Sign Up <FaCircleUser size={20} className="inline-block" />
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="btn text-white bg-green-700 mt-3 md:px-10 px-7 border-none hover:bg-gray-900"
            >
              Sign In <FaLongArrowAltRight size={20} className="inline-block" />
            </Link>
          </div>
        </div>
      </div>
      <NewsGlider newsHeadlines={newsList} />

      {/* // Next Section */}
      <div>
        <div className="w-full bg-green-900 md:py-20 md:px-36 py-10 px-4 gap-40 md:flex items-center">
          <div>
            <Image
              src="/homeFiles/header-logo.png"
              alt="header-logo"
              width={500}
              height={500}
              className="hidden md:block"
            />
            <Image
              src="/homeFiles/header-logo.png"
              alt="header-logo"
              className="md:hidden mx-auto pb-2"
              width={150}
              height={150}
            />
          </div>
          <div>
            <p className="leading-[22px] md:text-xl text-white gap-3">
              The Leadership Hub, Justice and Economic Advancement is a radical
              leadership, justice and economic emancipation movement formed in
              the year 2023 with the aim of bringing together revolutionary,
              activists community-based organizations as well as lobby groups
              under the umbrella of the organization for the purpose of pursuing
              the struggle for economic emancipation.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <Link
            href="/message-from-the-president"
            className="btn text-white bg-green-700 hover:bg-gray-900"
          >
            Message from the President
          </Link>
        </div>
      </div>

      {/* // Youtube Intro Video Section */}
      <div>
        <YoutubeVideo link="https://www.youtube.com/embed/5I6ZyArRXng?si=L39u_sqNiqlGHfPI" />
        <div className="flex justify-center py-5">
          <Link
            href="/membership-payment"
            className="btn px-24 text-white bg-green-700 hover:bg-gray-900 flex items-center gap-2"
          >
            <FaIdCardClip size={18} /> Get Membership
          </Link>
        </div>
      </div>
      <hr className="border-2 border-green-700 w-[90%] mx-auto mt-12" />
      <div>
        <h1 className="text-2xl md:text-4xl text-center pt-8 md:pb-5 text-black font-medium underline">
          LATEST NEWS
        </h1>
        {newsList.map((news) => {
          return (
            <div key={news.permalink} className="py-4 md:mx-16 mx-2">
              <div className="bg-white md:rounded-2xl rounded-xl shadow-md overflow-hidden w-full md:flex md:space-x-12 space-x-2">
                {/* News Image */}
                <div className="relative md:w-[40%] w-full mx-auto md:h-48 h-32">
                  <Image
                    src={news.displayImage}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                {/* News Content */}
                <div className="md:p-5 p-2 md:w-[60%] w-full">
                  <span className="text-sm text-green-600 font-semibold">
                    {news.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mt-1">
                    {news.title}
                  </h2>

                  {/* Author & Date */}
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>By {news.author}</span>
                    <span className="md:pr-10 pr-4">
                      {news.createdAt.getFullYear()}-
                      {news.createdAt.getMonth() + 1}-{news.createdAt.getDate()}
                    </span>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/news/${news.permalink}`}
                    className="text-green-700 font-semibold text-sm mt-3 inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="border-2 border-green-700 w-[90%] mx-auto mt-12" />
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl text-center pt-8 text-black font-medium underline">
          CATEGORIES
        </h1>
        <div className="md:flex md:justify-between mx-auto py-5 space-y-4 md:space-y-0 w-[90%]">
          <div className="bg-[url(/homeFiles/newspaper.jpg)] bg-cover bg-gray-700 bg-blend-overlay md:w-[32%] w-full h-[250px] md:h-[300px] flex items-center justify-center">
            <Link href="/news">
              <h1 className="text-center text-4xl text-white">NEWS</h1>
            </Link>
          </div>
          <div className="bg-[url(/homeFiles/students.jpg)] bg-cover bg-gray-700 bg-blend-overlay md:w-[32%] w-full h-[250px] md:h-[300px] flex items-center justify-center">
            <Link href="/opportunities/advanced-blogging-masterclass">
              <h1 className="text-center text-4xl text-white">OPPORTUNITIES</h1>
            </Link>
          </div>
          <div className="bg-[url(/homeFiles/protesters.jpg)] bg-cover bg-gray-700 bg-blend-overlay md:w-[32%] w-full h-[250px] md:h-[300px] flex items-center justify-center">
            <Link href="/activities">
              <h1 className="text-center text-4xl text-white">ACTIVITIES</h1>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-2 border-green-700 w-[90%] mx-auto mt-12" />
      <div className="items-center justify-center w-[40%] mx-auto">
        <h1 className="text-2xl md:text-4xl text-center pt-5 text-black font-medium underline">
          STAY CONNECTED
        </h1>
        <div className="pt-10">
          <div className="gap-12 flex items-center justify-center">
            <Link href="https://www.facebook.com/profile.php?id=61565053989658&mibextid=LQQJ4d">
              <FaSquareFacebook className="text-blue-700" size={35} />
            </Link>
            <Link href="http://x.com/ljenigeria">
              <FaSquareXTwitter className="text-black" size={35} />
            </Link>
            <Link href="https://www.youtube.com/@Ljenigeriatv">
              <FaSquareYoutube className="text-red-700" size={35} />
            </Link>
          </div>
          <Link
            href="/signup"
            className="btn text-white bg-green-700 w-full mt-2 hover:bg-gray-900"
          >
            Subscribe to LJE
          </Link>
        </div>
      </div>
      <hr className="border-2 border-green-700 w-[90%] mx-auto my-6" />

      <HomeFooter />
    </div>
  );
}

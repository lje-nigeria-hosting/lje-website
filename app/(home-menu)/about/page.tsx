import HomeNav from "@/app/components/HomeNav";
import React from "react";
import Image from "next/image";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import HomeFooter from "@/app/components/HomeFooter";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <HomeNav />
      <div>
        <div className="text-center">
          <div className="md:py-12 py-8">
            <h1>Our Mission</h1>
            <p className="md:px-48 md:pt-5 leading-5 md:text-center text-justify px-6">
              LJE is a Nigerian movement with a progressive internationalist
              outlook, committed to engaging with global progressive movements.
              We believe our most significant contribution lies in the national
              and international struggle against global imperialism, leadership
              deficits, justice system reforms, and economic advancement
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-300 via-green-700 to-green-900 py-12">
            <h1 className="text-white">Our Vision</h1>
            <p className="text-white md:px-48 md:pt-5 leading-5 md:text-center text-justify px-6">
              The LJE will, with determination and consistency associate with
              the protest movement in Nigeria and will also join in struggles
              that defy the unjust laws, leadership deficits and economic
              freedom.
            </p>
          </div>
        </div>
        <div className="w-full md:py-20 py-5 md:px-16 px-4 md:gap-20 md:flex md:items-center">
          <div className="md:w-[50%]">
            <Image
              src="/homeFiles/header-logo.png"
              alt="header-logo"
              className="hidden md:block"
              width={1500}
              height={500}
            />
            <Image
              src="/homeFiles/header-logo.png"
              alt="header-logo"
              className="md:hidden mx-auto"
              width={150}
              height={150}
            />
          </div>
          <div className="md:w-[50%]">
            <h1 className="md:pb-4 pb-1 text-center md:text-left pt-5 md:pt-0">
              The LJE Background
            </h1>
            <p className="text-base text-justify md:text-left px-2 md:px-0 md:text-xl md:gap-3">
              The Leadership Hub, Justice and Economic Advancement (LJE) is a
              radical, leadership, Justice and Economic emancipation movement,
              formed in the year 2023 with the aim of bringing together
              revolutionaries, activists, community-based organizations as well
              as lobby groups under the umbrella of the organization pursuing
              the struggle of economic emancipation.
              <br />
              <br />
              The LJE is an anti-imperialist and leftist movement with an
              internationalist outlook anchored by popular grassroots’
              formations and struggles.
              <br />
              <br />
              The organization has thus drawn inspiration from the broad
              Marxist-Leninist tradition school of thought in their analysis of
              the state, leadership gap, Justice system, economic advancement,
              imperialism, culture and class contradictions in every society.
            </p>
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
          <button className="btn text-white bg-green-700 w-full mt-2 hover:bg-gray-900">
            Subscribe to LJE
          </button>
        </div>
      </div>
      <hr className="border-2 border-green-700 w-[90%] mx-auto my-6" />

      <HomeFooter />
    </div>
  );
}

import HomeNav from "@/app/components/HomeNav";
import React from "react";
import Image from "next/image";
import { ImLoop } from "react-icons/im";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import HomeFooter from "@/app/components/HomeFooter";

export default function page() {
  return (
    <div>
      <HomeNav />
      <div className="md:px-20 px-5 pt-12">
        <h1 className="text-2xl md:text-4xl leading-[26px] text-center font-semibold">
          Exciting Opportunity: Advanced Professional Blogging Masterclass for
          Nigerian Youths!
        </h1>
        <div className="hidden md:flex justify-center items-center pt-5">
          <Image
            src="/homeFiles/blogging4.jpg"
            alt="blogging"
            width={300}
            height={300}
          />
          <ImLoop className="mx-2" size={30} />
          <Image
            src="/homeFiles/header-logo.png"
            alt="logo"
            width={270}
            height={270}
          />
        </div>
        <div className="md:hidden flex justify-center items-center pt-5">
          <Image
            src="/homeFiles/blogging4.jpg"
            alt="blogging"
            width={150}
            height={150}
          />
          <ImLoop className="mx-2" size={20} />
          <Image
            src="/homeFiles/header-logo.png"
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <p className="md:px-16 px-4 pt-4 md:pt-0 text-justify leading-5 md:text-left">
          Are you ready to transform your passion for writing into a powerful
          online presence? We are thrilled to announce an Advanced Masterclass
          designed to equip Nigerian youths with the skills and knowledge needed
          to create and manage a professional blog that not only showcases your
          voice but also opens doors to earning online!
        </p>
      </div>
      <div className="md:px-20 pt-12">
        <h2 className="pl-5 text-xl md:text-2xl">What you will learn:</h2>
        <ul className="md:px-16 px-5 pt-3 space-y-2">
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">
              Master the Art of Content Creation:
            </span>
            Craft compelling, high-quality content that captivates your
            audience.
          </li>
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">
              Build a Professional Blog:
            </span>
            A completely built professional blog for you for free.
          </li>
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">Monetize Your Blog:</span>
            Discover strategies to generate income through various online
            channels.
          </li>
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">
              SEO and Marketing Techniques:
            </span>
            Learn how to drive traffic and grow your blog’s audience.
          </li>
        </ul>
      </div>
      <div className="md:px-20 md:pt-12 pt-5">
        <h2 className="pl-5 text-xl md:text-2xl">Why Apply:</h2>
        <ul className="md:px-16 px-5 pt-3 space-y-2">
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">Expert Guidance:</span>
            Learn from industry professionals with real-world experience.
          </li>
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">Hands-on Training:</span>
            Practical sessions to help you apply what you learn immediately.
          </li>
          <li className="text-base md:flex px-4 md:px-0 items-center">
            <GoDotFill size={15} className="mr-1 hidden md:inline" />
            <GoDotFill size={10} className="mr-1 md:hidden inline" />
            <span className="font-semibold pr-1">Network Opportunities:</span>
            Connect with like-minded individuals and build a supportive
            community.
          </li>
        </ul>
      </div>
      <div className="md:px-20 md:pt-12 pt-5 pb-20">
        <h2 className="pl-5 text-xl md:text-2xl">How to Apply:</h2>
        <p className="md:px-16 px-10 leading-5 text-justify md:text-left pt-3 text-base">
          Spaces are limited, so act fast! Apply now to secure your spot.{" "}
          <Link
            href="https://forms.gle/6aDinGQjmVWhcCiS8"
            className="text-green-700 font-semibold"
          >
            Click here to apply now!
          </Link>{" "}
          (please complete on Google Chrome) Don’t miss this chance to turn your
          blogging aspirations into reality. Join us and take the first step
          towards building a successful online presence
        </p>
      </div>
      <HomeFooter />
    </div>
  );
}

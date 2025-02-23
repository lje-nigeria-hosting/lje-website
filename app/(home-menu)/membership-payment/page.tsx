import HomeFooter from "@/app/components/HomeFooter";
import HomeNav from "@/app/components/HomeNav";
import React from "react";
import { GoDotFill } from "react-icons/go";
import {
  PiNumberOneDuotone,
  PiNumberThreeDuotone,
  PiNumberTwoDuotone,
} from "react-icons/pi";

export default function page() {
  return (
    <div>
      <HomeNav />
      <div className="md:px-20 px-5 pt-12">
        <h1 className="text-2xl md:text-4xl text-center pb-4 font-semibold">
          Join LJE Nigeria – Become a Member Today!
        </h1>
        <p className="md:px-6 leading-5 text-justify md:text-left">
          At Leadership Hub, Justice, and Economic Advancement (LJE Nigeria), we
          are building a movement for leadership transformation, economic
          development, and justice. Join us today and be part of a progressive
          force shaping Nigeria’s future.
        </p>
      </div>
      <div className="md:px-20 px-5 pt-12">
        <h2 className="pl-5">Membership Levels</h2>
        <ul className="md:px-16 pt-3 space-y-2">
          <li className="text-base md:flex items-center">
            <GoDotFill size={15} className="mr-1 inline" />
            <span className="font-semibold pr-1">Volunteer Membership –</span>
            Free (For individuals passionate about our cause and willing to
            support our movement)
          </li>
          <li className="text-base flex items-center">
            <GoDotFill size={15} className="mr-1" />
            <span className="font-semibold pr-1">Standard Membership –</span>
            ₦10,500
          </li>
          <li className="text-base flex items-center">
            <GoDotFill size={15} className="mr-1" />
            <span className="font-semibold pr-1">Executive Membership –</span>
            ₦50,500
          </li>
        </ul>
      </div>
      <div className="md:px-20 px-5 pt-12">
        <h2 className="pl-5">Payment details</h2>
        <ul className="md:px-16 pt-3 space-y-2">
          <li className="text-base md:flex items-center">
            <PiNumberOneDuotone size={25} className="mr-2" />
            Make Payment to the bank account above.
          </li>
          <li className="text-base md:flex items-center">
            <PiNumberTwoDuotone size={25} className="mr-2" /> Send Proof of
            Payment via WhatsApp via
            <strong className="md:pl-1"> 07052368821 or 07052453714.</strong> Or
            on Email via
            <strong className="md:pl-1"> admin@ljenigeria.org</strong>
          </li>
          <li className="text-base md:flex items-center">
            <PiNumberThreeDuotone size={25} className="mr-2" />
            Receive Your Membership ID and welcome package.
          </li>
        </ul>
      </div>
      <p className="text-gray-500 text-center font-heading italic font-semibold pt-10 pb-20">
        Join us today and take a stand for leadership, justice, and economic
        empowerment in Nigeria
      </p>
      <HomeFooter />
    </div>
  );
}

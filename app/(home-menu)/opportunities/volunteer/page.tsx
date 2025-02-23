import HomeNav from "@/app/components/HomeNav";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeFooter from "@/app/components/HomeFooter";

export default function page() {
  return (
    <div>
      <HomeNav />
      <div>
        <div className="bg-[#F6B821] w-full">
          <div className="flex justify-center">
            <Image
              src="/homeFiles/volunteer.png"
              alt="volunteer"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full md:pt-16 pt-8 md:px-16 px-5 md:gap-20 md:flex items-center">
          <div className="md:w-[50%] hidden md:flex">
            <Image
              src="/homeFiles/volunteer2.jpg"
              alt="volunteer2"
              width={1500}
              height={500}
            />
          </div>
          <div className="md:w-[50%]">
            <h1 className="md:pb-4">Become an L.J.E Volunteer</h1>
            <p className="text-base md:text-xl gap-3 pt-1 leading-6 md:pt-0">
              Unlock the power of your skills and expertise by contributing
              virtually or physically to support development and humanitarian
              initiatives. Through LJE Nigeria’s Volunteering program, you can
              connect with Nigerian communities, government agencies, public
              institutions, and civil society organizations
              <br />
              <br />
              Join a global network of volunteers working to address today’s
              pressing economic challenges in Nigeria—all from the comfort of
              your device, anywhere in the world.
              <br />
              <br />
              Learn how you can make a difference as an Online Volunteer with
              LJE Nigeria and be part of a transformative movement.
            </p>
          </div>
          <div className="md:hidden block">
            <Image
              src="/homeFiles/volunteer2.jpg"
              alt="volunteer2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="md:px-36 px-8 md:pt-6 pt-12 pb-16 text-center">
          Whether you have skills to share or just a passion to help, your
          contribution can change lives.
          <br />
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9hkxZdSgJm1BQXQ0YvKdxLAk4padY4njqdEBk_VLL5owI2A/viewform?usp=sf_link"
            className="text-green-700 font-semibold"
          >
            Click here to volunteer now!
          </Link>{" "}
          (please complete on Google Chrome)
        </p>
      </div>
      <HomeFooter />
    </div>
  );
}

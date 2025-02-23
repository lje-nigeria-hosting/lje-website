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
        <div className="text-center">
          <h1 className="pt-12 pb-4">Message from the President</h1>
          <Image
            src="/homeFiles/barr-sam.jpg"
            alt="the president"
            className="mx-auto"
            width={400}
            height={400}
          />
        </div>
        <p className="md:px-20 px-5 pt-10 text-justify">
          Ladies and gentlemen, esteemed members of LJE Nigeria, both old and
          new, and those aspiring to join our noble cause.
          <br />
          <br />
          It is with great pleasure and a sense of profound purpose that I
          welcome you all to this prestigious gathering of change-makers and
          visionaries. As we stand here today, united by a common goal of youth
          empowerment, social justice, and civic engagement, I am filled with
          admiration for the dedication and passion that each one of you brings
          to our organization.
          <br />
          <br />
          To our longstanding members, your unwavering commitment and tireless
          efforts have been the foundation upon which LJE Nigeria has
          flourished. Your wisdom, experience, and leadership have paved the way
          for our successes and inspired countless others to join our ranks.
          <br />
          <br />
          To our new members, welcome to a community that thrives on innovation,
          compassion, and a relentless pursuit of positive change. Your fresh
          perspectives, energy, and enthusiasm are invaluable assets that will
          propel us forward towards even greater achievements.
          <br />
          <br />
          And to those who aspire to be part of our journey, I encourage you to
          embrace the spirit of service and advocacy that defines LJE Nigeria.
          Your passion and determination are the driving forces behind our
          collective impact, and we eagerly anticipate the contributions you
          will make to our shared mission.
          <br />
          <br />
          At LJE Nigeria, we are not just an organization; we are a movement. We
          stand for the empowerment of youth, the protection of the less
          privileged, the pursuit of justice for all, and the accountability of
          our political leaders. We do not shy away from difficult conversations
          or shy away from demanding answers when they are needed most.
          <br />
          <br />
          Together, we have the power to effect meaningful change, to uplift
          communities, and to create a brighter future for generations to come.
          Let us work hand in hand, shoulder to shoulder, with unwavering
          determination and a steadfast belief in our ability to make a
          difference.
          <br />
          <br />
          Welcome to LJE Nigeria, where passion meets purpose, and together, we
          transform lives and build a better tomorrow.
        </p>
        <p className="md:justify-end justify-start flex italic md:px-24 px-5 md:pt-12 pt-4 font-semibold text-green-700">
          Memeh M Samuel Esq.
        </p>
        <p className="md:justify-end justify-start flex italic md:px-24 px-5 pb-5 font-semibold">
          The President (L.J.E Nigeria)
        </p>
        <div className="flex justify-center items-center pb-20">
          <Link
            href="/signup"
            className="btn text-white bg-green-700 w-[30%] mt-2 hover:bg-gray-900"
          >
            Join Us
          </Link>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

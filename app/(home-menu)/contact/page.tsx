import Toast from "@/app/admin/Toast";
import HomeFooter from "@/app/components/HomeFooter";
import HomeNav from "@/app/components/HomeNav";
import { createContactMessage } from "@/utils/homeAction/actions";
import Link from "next/link";
import React from "react";
import {
  FaSquarePhone,
  FaEnvelope,
  FaLocationArrow,
  FaLocationDot,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

export default function page({
  searchParams,
}: {
  searchParams: { contactsuccess?: string | undefined };
}) {
  return (
    <div>
      <HomeNav />
      <div>
        <section className="bg-white text-black md:py-16 py-8 px-6">
          <div className="w-full md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-5 items-start">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold md:text-left text-center">
                Get in Touch
              </h2>
              <p className="text-gray-600 md:mt-4 leading-5">
                Thank you for your interest in The Leadership Hub, Justice and
                Economic Advancement. We welcome inquiries, feedback, and
                collaboration opportunities from individuals and organizations
                who share our commitment to radical leadership, justice, and
                economic advancement.
              </p>
              <div className="mt-6">
                <p className="leading-5">
                  <span className="font-semibold">General inquires: </span>For
                  general inquiries or information about our organization,
                  please contact us at{" "}
                  <span className="text-green-700 font-semibold">
                    info@ljenigeria.org
                  </span>
                </p>
              </div>
              <div className="mt-3">
                <p className="leading-5">
                  <span className="font-semibold">Media inquires: </span>Members
                  of the media seeking interviews, statements, or other
                  press-related matters can reach out to our Media Relations
                  team at{" "}
                  <span className="text-green-700 font-semibold">
                    info@ljenigeria.org
                  </span>
                </p>
              </div>
              <div className="mt-3">
                <p className="leading-5">
                  <span className="font-semibold">
                    Collaboration opportunities:{" "}
                  </span>{" "}
                  We are always open to collaborating with like-minded
                  individuals and organizations. If you have an idea for
                  collaboration or partnership, please email us at{" "}
                  <span className="text-green-700 font-semibold">
                    admin@ljenigeria.org
                  </span>
                </p>
              </div>
              <div className="mt-3">
                <p className="leading-5">
                  <span className="font-semibold">
                    Membership and Participation:{" "}
                  </span>{" "}
                  To learn more about becoming a member or participating in our
                  activities and initiatives, please reach out to our Membership
                  team at{" "}
                  <span className="text-green-700 font-semibold">
                    members@ljenigeria.org
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gray-100 md:p-6 p-3 pt-4 rounded-2xl shadow-md">
              <form
                action={createContactMessage}
                className="md:space-y-4 space-y-2"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <textarea
                  rows={8}
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="md:flex md:justify-between w-full md:px-20 md:space-x-4">
        <div className="justify-center text-center pt-12 md:pt-0 md:w-[25%]">
          <FaSquarePhone
            size={40}
            className="text-green-700 w-full md:hidden mx-auto"
          />
          <FaSquarePhone
            size={50}
            className="text-green-700 w-full hidden md:block mx-auto"
          />
          <p className="font-heading">Phone Number</p>
          <p className="md:pt-4 pt-1 font-semibold text-base">
            +234 705-236-8821
          </p>
        </div>
        <div className="justify-center text-center pt-6 md:pt-0 md:w-[25%]">
          <FaEnvelope
            size={40}
            className="text-green-700 md:hidden w-full mx-auto"
          />
          <FaEnvelope
            size={50}
            className="text-green-700 hidden md:block w-full mx-auto"
          />
          <p className="font-heading">Email Address</p>
          <p className="md:pt-4 pt-1 font-semibold text-base">
            admin@ljenigeria.org
          </p>
        </div>
        <div className="justify-center text-center pt-6 md:pt-0 md:w-[25%]">
          <FaLocationArrow
            size={40}
            className="text-green-700 w-full md:hidden  mx-auto"
          />
          <FaLocationArrow
            size={50}
            className="text-green-700 w-full md:block hidden  mx-auto"
          />
          <p className="font-heading">Address Line 1</p>
          <p className="md:pt-4 pt-1 px-10 md:px-0 font-semibold text-base">
            25 Niger Crescent, Sun City Estate,Galadimawa,FCT Abuja, Nigeria
          </p>
        </div>
        <div className="justify-center text-center pt-6 md:pt-0 md:w-[25%]">
          <FaLocationDot
            size={40}
            className="text-green-700 md:hidden w-full mx-auto"
          />
          <FaLocationDot
            size={50}
            className="text-green-700 md:block hidden w-full mx-auto"
          />
          <p className="font-heading">Address Line 2</p>
          <p className="md:pt-4 pt-1 px-10 md:px-0 font-semibold text-base">
            2 Aboh Ezimonye Street, Off Ibusa Road, Asaba, Delta State
          </p>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7763376447283!2d7.430976273995802!3d8.992717289557913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e732fe619b43b%3A0xf13c9da970bff742!2sSun%20City%20Estate%2C%20Galadimawa!5e0!3m2!1sen!2sng!4v1739651930438!5m2!1sen!2sng"
          height="350"
          className="border-none w-full my-6"
          loading="lazy"
        ></iframe>
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
      {searchParams?.contactsuccess && (
        <Toast message="We have received your message, we will get back to you via Email" />
      )}
      <HomeFooter />
    </div>
  );
}

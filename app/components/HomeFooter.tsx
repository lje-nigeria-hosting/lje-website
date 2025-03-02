import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export default function HomeFooter() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-6 w-[100%]">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-[25%_50%_25%] md:gap-16 gap-4 items-start justify-center">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* About Us Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm leading-relaxed pt-2">
              The Leadership Hub, Justice and Economic advancement announced its
              formation on 1st, October 2023 in Asaba. The organization
              describes itself as a radical and leadership movement, Justice
              system and economic advancement, calling for 'leadership freedom
              in our lifetime'.
            </p>
          </div>

          {/* Menu Section */}
          <div className="text-center md:text-left">
            <ul className="md:space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-500 text-green-700 text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/report-a-violation"
                  className="hover:text-green-500 text-green-700 text-base"
                >
                  Report a Violation
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-green-500 text-green-700 text-base"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-green-500 text-green-700 text-base"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-500 text-green-700 text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} LJE Nigeria. All rights reserved.
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send?phone=2347052368821&text=Hello%20LJE%20Nigeria,%0AI%20am" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-8 bg-green-700 text-white p-3 rounded-full shadow-lg 
                 hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center 
                 w-12 h-12 sm:w-14 sm:h-14"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}

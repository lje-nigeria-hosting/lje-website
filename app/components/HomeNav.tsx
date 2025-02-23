"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeNav() {
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpportunityOpen, setIsOpportunityOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null) as any;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpportunityOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      id: "1",
      label: "HOME",
      path: "/",
    },
    {
      id: "3",
      label: "ACTIVITIES",
      path: "/activities",
    },
    {
      id: "4",
      label: "NEWS",
      path: "/news",
    },
    {
      id: "5",
      label: "ABOUT",
      path: "/about",
    },
    {
      id: "6",
      label: "CONTACT",
      path: "/contact",
    },
    {
      id: "7",
      label: "REPORT A VIOLATION",
      path: "/report-a-violation",
    },
    {
      id: "8",
      label: "DONATE",
      path: "/donate",
    },
  ];

  const opportunityLinks = [
    {
      id: "op1",
      label: "Advanced Blogging Masterclass",
      path: "/opportunities/advanced-blogging-masterclass",
    },
    { id: "op2", label: "Volunteer", path: "/opportunities/volunteer" },
    { id: "op3", label: "Vacancy", path: "/opportunities/vacancy" },
  ];

  return (
    <div>
      <div className="hidden md:block isolation-auto">
        <div className="px-24 py-5 relative z-50 border-b border-gray-200 bg-[#f1f6f7] w-full justify-between items-center flex">
          <div className="flex items-center gap-6">
            <Link href="https://www.facebook.com/profile.php?id=61565053989658&mibextid=LQQJ4d">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://x.com/ljenigeria">
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://instagram.com/ljenigeria">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://linkedin.com/ljenigeria">
              <FaLinkedin size={20} />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Image
                src="/homeFiles/header-logo.png"
                alt="header-logo"
                width={65}
                height={65}
              />
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="btn text-green-700 rounded-[20px] px-6"
            >
              REACH US
            </Link>
          </div>
        </div>
        <ul className="w-full flex justify-center space-x-8 py-8 bg-[#f1f6f7] font-medium">
          {navItems.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className={
                  isActive(link.path)
                    ? "text-green-700"
                    : "hover:text-green-700"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Opportunities Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpportunityOpen(!isOpportunityOpen)}
              className="hover:text-green-700 text-lg"
            >
              OPPORTUNITIES ▾
            </button>

            {/* Dropdown Menu */}
            {isOpportunityOpen && (
              <ul className="absolute left-0 whitespace-nowrap z-50 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-md">
                {opportunityLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsOpportunityOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="py-3 md:hidden px-4 border-b border-gray-200 bg-[#f1f6f7] w-full justify-between items-center flex">
        <Link href="/">
          <Image
            src="/homeFiles/header-logo.png"
            alt="logo"
            width={45}
            height={50}
          />
        </Link>
        <div>
          {isModalOpen ? (
            <IoClose onClick={() => setIsModalOpen(!isModalOpen)} size={30} />
          ) : (
            <RxHamburgerMenu
              onClick={() => setIsModalOpen(!isModalOpen)}
              size={30}
            />
          )}
        </div>
      </div>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-transparent absolute w-full z-50 mt-2 mx-auto"
        >
          <div className="bg-gray-100 rounded-[40px] text-white border border-gray-600 p-4 mx-5">
            <ul className="space-y-4 z-50 text-center font-medium">
              {navItems.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className={
                      isActive(link.path)
                        ? "text-green-700"
                        : "hover:text-green-700"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Opportunities Dropdown */}
              <li className="md:z-50 relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpportunityOpen(!isOpportunityOpen)}
                  className="hover:text-green-700 text-base"
                >
                  OPPORTUNITIES ▾
                </button>

                {/* Dropdown Menu */}
                {isOpportunityOpen && (
                  <ul className="absolute left-0 md:z-50 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-md">
                    {opportunityLinks.map((link) => (
                      <Link
                        key={link.id}
                        href={link.path}
                        className="block px-4 py-1 hover:bg-gray-100"
                        onClick={() => setIsOpportunityOpen(false)}
                      >
                        <li className="text-base" key={link.id}>
                          {link.label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            <div className="flex items-center justify-center pt-16 pb-5 gap-6">
              <Link href="https://www.facebook.com/profile.php?id=61565053989658&mibextid=LQQJ4d">
                <FaFacebook className="text-blue-600" size={25} />
              </Link>
              <Link href="https://x.com/ljenigeria">
                <FaXTwitter className="text-black" size={25} />
              </Link>
              <Link href="https://instagram.com/ljenigeria">
                <FaInstagram className="text-[#bb3266]" size={25} />
              </Link>
              <Link href="https://linkedin.com/ljenigeria">
                <FaLinkedin className="text-blue-600" size={25} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

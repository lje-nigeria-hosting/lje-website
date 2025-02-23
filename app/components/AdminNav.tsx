"use client";
import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const AdminNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // This is the admin Side navigation for admin privilages and options
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-[#F9F9F9]">
        <div>
          <Image src="/logo.png" alt="logo" width={45} height={45} />
        </div>
        <div>
          <button
            onClick={handleNavbar}
            className="p-4 bg-transparent text-black relative right-4 z-50"
          >
            {isNavOpen ? <IoClose /> : <FaGripLines />}
          </button>

          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white text-white transition-transform transform ${
              isNavOpen ? "translate-x-0 overflow-y-hidden" : "translate-x-full"
            } z-40`}
          >
            <div className="p-4">
              <button onClick={handleNavbar} className="text-2xl">
                &times;
              </button>
              <div className="mt-4">
                <Link href="/admin">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Admin Home
                  </p>
                </Link>
                <Link href="/admin/manage-users">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Manage Users
                  </p>
                </Link>
                <Link href="/admin/create-user">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Create User
                  </p>
                </Link>
                <Link href="/admin/create-announcement">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Create Announcement
                  </p>
                </Link>
                <Link href="/admin/edit-announcement">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Edit Announcement
                  </p>
                </Link>
                <Link href="/admin/create-vacancy">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Create/Delete Vacancy
                  </p>
                </Link>
                <Link href="/admin/state-reps">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Set State Reps
                  </p>
                </Link>
                <Link href="/admin/contact-forms">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Contact Forms
                  </p>
                </Link>
                <Link href="/admin/violations">
                  <p
                    onClick={handleNavbar}
                    className="font-semibold font-heading py-4 hover:underline"
                  >
                    Violation Reports
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`inset-0 opacity-50 transition-opacity ${
              isNavOpen && "fixed opacity-100 bg-gray-600"
            } z-30`}
          />
        </div>
      </div>
    </>
  );
};

export default AdminNav;

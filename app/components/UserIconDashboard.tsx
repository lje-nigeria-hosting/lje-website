"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbHome, TbInfoCircle, TbNews } from "react-icons/tb";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";

interface UserDashboardNavbarProps {
  displayPhoto: string;
}

const UserIconDashboard: React.FC<UserDashboardNavbarProps> = ({
  displayPhoto,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // This is the component at the top right corner of the user dashboard
  return (
    <>
      <div
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="flex items-end"
      >
        <Image src={displayPhoto} alt="avatar" width={40} height={40} />
        <MdOutlineArrowDropDown size={25} className="inline ml-1 mb-1" />
      </div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute md:right-16 right-7 md:mt-[20%] mt-60 py-5 w-auto px-4 bg-white border border-gray-200 shadow-lg rounded-md"
        >
          <ul className="space-y-4">
            <li onClick={() => setIsModalOpen(false)}>
              <Link className="flex items-center gap-2" href="/dashboard">
                <TbNews size={25} />
                <p className="text-base font-medium">Dashboard</p>
              </Link>
            </li>
            <li onClick={() => setIsModalOpen(false)}>
              <Link
                className="flex items-center gap-2"
                href="https://ljenigeria.org"
              >
                <TbHome size={25} />
                <p className="text-base font-medium">HomePage</p>
              </Link>
            </li>
            <li onClick={() => setIsModalOpen(false)}>
              <Link
                className="flex items-center gap-2"
                href="/dashboard/account-details"
              >
                <TbInfoCircle size={25} />
                <p className="text-base font-medium">More info</p>
              </Link>
            </li>
            <li
              className="flex pl-1 items-center gap-2"
              onClick={() => {
                signOut();
                redirect("/login");
              }}
            >
              <FaArrowUpRightFromSquare size={18} />
              <p className="text-base font-medium">Log Out</p>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default UserIconDashboard;

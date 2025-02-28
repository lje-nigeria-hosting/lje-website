import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import DobLabel from "@/app/components/ui/DobLabel";
import { createUser } from "@/utils/actions";
import { getSession } from "@/utils/getSession";
import { redirect } from "next/navigation";
import React from "react";
import { HiKey, HiMail, HiUser } from "react-icons/hi";
import { MdLocalPhone, MdLocationPin, MdWork } from "react-icons/md";

const CreateUser = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user?.role === "USER") {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
        <div className="md:bg-white pt-10 px-4 md:px-6">
          <h1 className="text-center text-2xl pb-6">Create New User</h1>
          <RegistrationForm />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CreateUser;

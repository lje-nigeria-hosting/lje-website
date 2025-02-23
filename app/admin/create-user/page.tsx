import Footer from "@/app/components/Footer";
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
  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  return (
    <>
      <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
        <div className="md:bg-white pt-10 px-4 md:px-6">
          <h1 className="text-center text-2xl pb-6">Create New User</h1>
          <form className="space-y-4" action={createUser}>
            <div className="flex space-x-3 items-center justify-center w-full">
              <label className="input input-bordered w-[48%] flex items-center gap-2">
                <input type="text" name="firstname" placeholder="First Name" />
              </label>
              <label className="input input-bordered w-[48%] flex items-center gap-2">
                <input type="text" name="lastname" placeholder="Last Name" />
              </label>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <HiMail className="inline" />
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <HiUser className="inline" />
              <input
                type="text"
                name="username"
                className="grow"
                placeholder="Username"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <HiKey size={15} className="inline" />
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="******"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <HiKey size={15} className="inline" />
              <input
                type="password"
                name="confirmpassword"
                className="grow"
                placeholder="Confirm password"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <MdLocationPin className="inline" />
              <input
                type="text"
                name="address"
                className="grow"
                placeholder="Address"
              />
            </label>
            <div className="flex justify-center items-center space-x-3">
              <select
                name="state"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  State
                </option>
                {states.map((state) => {
                  return <option key={state}>{state}</option>;
                })}
              </select>
              <select
                name="gender"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <MdLocalPhone className="inline" />
              <input
                type="text"
                name="phone"
                className="grow"
                placeholder="Phone number"
              />
            </label>
            <div className="flex justify-center items-center space-x-3">
              <label className="input input-bordered flex items-center w-full gap-2">
                <MdWork className="inline" />
                <input
                  type="text"
                  name="occupation"
                  className="grow"
                  placeholder="Occupation"
                />
              </label>
              <DobLabel />
            </div>
            <div className="flex justify-center items-center space-x-3">
              <select
                name="maritalstatus"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Marital Status
                </option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
              <select
                name="education"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Level of Education
                </option>
                <option>WAEC</option>
                <option>BSC</option>
                <option>MSC</option>
              </select>
            </div>
            <div className="py-5">
              <button
                type="submit"
                className="btn w-full text-white bg-[#0C9F0A]"
              >
                Create User
              </button>
            </div>
          </form>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CreateUser;

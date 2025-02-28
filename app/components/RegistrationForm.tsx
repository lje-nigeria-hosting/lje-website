"use client";
import React from "react";
import { HiMail, HiUser } from "react-icons/hi";
import { HiKey } from "react-icons/hi2";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdLocationPin, MdLocalPhone, MdWork } from "react-icons/md";
import DobLabel from "./ui/DobLabel";
import { createUser } from "@/utils/actions";

export default function RegistrationForm() {
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await createUser(formData);
    if (response === "User already exists") {
      alert("User already exists");
    } else if (response === "Invalid email") {
      alert("Invalid email");
    } else if (response === "Passwords do not match") {
      alert("Passwords do not match");
    } else if (response === "Please fill the form details correctly") {
      alert("Please fill the form details correctly");
    } else if (response === "User not found") {
      alert("User not found");
    } else if (response === "Invalid Credentials") {
      alert("Invalid Credentials");
    }
  };

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
    <form className="space-y-4" onSubmit={handleRegister}>
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
        <input type="text" name="email" className="grow" placeholder="Email" />
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
        <select name="state" className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            State of origin
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
        <label className="input input-bordered flex items-center w-[50%] gap-2">
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
        <p className="text-[13px] pb-2">
          By signing up, you accept LJE's{" "}
          <span className="bg-gradient-to-br from-[#0C9F0A] to-[#61CE70] bg-clip-text text-transparent">
            terms and conditions.
          </span>
        </p>
        <button type="submit" className="btn w-full text-white bg-[#0C9F0A]">
          Create Account{" "}
          <IoArrowForwardCircleOutline size={20} className="inline mr-3" />
        </button>
      </div>
    </form>
  );
}

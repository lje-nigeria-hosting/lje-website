"use client";
import React from "react";
import { HiLocationMarker, HiMail, HiPhone, HiUser } from "react-icons/hi";
import { createStateRep } from "@/utils/actions";

export default function StateRepsForm() {
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

  const handleStateRep = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await createStateRep(formData);
    if (response === "Please fill the form details correctly") {
      alert("Please fill the form details correctly");
    } else if (response === "State Rep with this email already exists") {
      alert("State Rep with this email already exists");
    } else if (response === "User not found") {
      alert("User not found");
    } else if (response === "Invalid Credentials") {
      alert("Invalid Credentials");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleStateRep}>
      <label className="input input-bordered flex items-center gap-2">
        <HiUser />
        <input
          type="text"
          name="fullname"
          className="grow"
          placeholder="Full Name"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <HiMail className="inline" />
        <input type="email" name="email" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <HiPhone size={15} className="inline" />
        <input
          type="text"
          name="phone"
          className="grow"
          placeholder="08144....."
        />
      </label>
      <div className="flex justify-center items-center space-x-3">
        <select name="state" className="select select-bordered w-full max-w-xs">
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
        <HiLocationMarker className="inline" />
        <input type="text" name="LGA" className="grow" placeholder="LGA" />
      </label>
      <div className="py-5">
        <button type="submit" className="btn w-full text-white bg-[#0C9F0A]">
          Create State Rep
        </button>
      </div>
    </form>
  );
}

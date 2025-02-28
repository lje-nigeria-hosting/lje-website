import Footer from "@/app/components/Footer";
import { createStateRep } from "@/utils/actions";
import prisma from "@/utils/db";
import { getSession } from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";
import { HiLocationMarker, HiMail, HiPhone, HiUser } from "react-icons/hi";

const StateReps = async () => {
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

  const stateReps = await prisma.stateRep.findMany();

  return (
    <>
      <div>
        <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
          <div className="md:bg-white pt-10 px-4 md:px-6">
            <h1 className="text-center text-2xl pb-6">Create New State Rep</h1>
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
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="Email"
                />
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
                <HiLocationMarker className="inline" />
                <input
                  type="text"
                  name="LGA"
                  className="grow"
                  placeholder="LGA"
                />
              </label>
              <div className="py-5">
                <button
                  type="submit"
                  className="btn w-full text-white bg-[#0C9F0A]"
                >
                  Create State Rep
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl text-center font-bold">State Reps</h1>
        <div className="w-full overflow-x-auto mb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>State</th>
                <th>Gender</th>
                <th>LGA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stateReps.map((stateRep) => {
                return (
                  <tr key={stateRep.id}>
                    <td>{stateRep.name}</td>
                    <td>{stateRep.email}</td>
                    <td>{stateRep.phoneNumber}</td>
                    <td>{stateRep.state}</td>
                    <td>{stateRep.gender}</td>
                    <td>{stateRep.LGA}</td>
                    <td>
                      <form
                        action={async () => {
                          "use server";
                          await prisma.stateRep.delete({
                            where: { email: stateRep.email },
                          });
                          revalidatePath("/");
                        }}
                      >
                        <button className="bg-red-500 rounded-xl text-white px-4 py-1">
                          Delete State Rep
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StateReps;

import Footer from "@/app/components/Footer";
import prisma from "@/utils/db";
import { getSession } from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

import StateRepsForm from "./StateRepsForm";

const StateReps = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user?.role === "USER") {
    redirect("/dashboard");
  }

  const stateReps = await prisma.stateRep.findMany();

  return (
    <>
      <div>
        <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
          <div className="md:bg-white pt-10 px-4 md:px-6">
            <h1 className="text-center text-2xl pb-6">Create New State Rep</h1>
            <StateRepsForm />
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

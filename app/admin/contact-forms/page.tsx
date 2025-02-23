import prisma from "@/utils/db";
import React from "react";

export default async function page() {
  const forms = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="text-center pt-12">
      <h1>Contact Forms</h1>
      {forms.map((form) => (
        <div
          className="text-left w-[90%] md:w-[75%] mx-auto bg-gray-200 p-6 rounded-lg shadow-md mt-5"
          key={form.id}
        >
          <p>
            <span className="font-heading font-semibold text-xl">
              First Name:{" "}
            </span>
            {form.firstName}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">
              Last Name:{" "}
            </span>
            {form.firstName}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">
              Email Address:{" "}
            </span>
            {form.email}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">Date: </span>
            {form.createdAt.getFullYear()}-{form.createdAt.getMonth() + 1}-
            {form.createdAt.getDate()}
          </p>
          <p className="">
            <span className="font-heading font-semibold text-xl">
              Message:{" "}
            </span>
            {form.message}
          </p>
        </div>
      ))}
    </div>
  );
}

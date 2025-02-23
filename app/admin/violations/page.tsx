import prisma from "@/utils/db";
import React from "react";

export default async function page() {
  const violations = await prisma.violation.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="text-center pt-12">
      <h1>Violations</h1>
      {violations.map((violation) => (
        <div
          className="text-left w-[90%] md:w-[75%] mx-auto bg-gray-200 p-6 rounded-lg shadow-md mt-5"
          key={violation.id}
        >
          <p>
            <span className="font-heading font-semibold text-xl">
              Full Name:{" "}
            </span>
            {violation.fullName}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">
              Phone Number:{" "}
            </span>
            {violation.phone}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">
              Location:{" "}
            </span>
            {violation.location}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">
              Right/Freedom violated:{" "}
            </span>
            {violation.rightsViolated}
          </p>
          <p>
            <span className="font-heading font-semibold text-xl">Date: </span>
            {violation.createdAt.getFullYear()}-
            {violation.createdAt.getMonth() + 1}-{violation.createdAt.getDate()}
          </p>
          <p className="">
            <span className="font-heading font-semibold text-xl">
              What Really happened:{" "}
            </span>
            {violation.whatHappened}
          </p>
        </div>
      ))}
    </div>
  );
}

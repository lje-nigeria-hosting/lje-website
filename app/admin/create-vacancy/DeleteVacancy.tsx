"use client";
import React from "react";
import { useTransition } from "react";
import { deleteVacancy } from "@/utils/homeAction/actions";

interface DeleteVacancyProps {
  vacancy: any;
}

export default function DeleteVacancy({ vacancy }: DeleteVacancyProps) {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      key={vacancy.id}
      className="bg-gray-100 py-4 mt-5 md:px-16 md:mx-20 mx-3 text-center md:text-left md:flex md:justify-between md:items-end"
    >
      <div className="space-y-2 md:space-y-0">
        <p>
          <span className="font-semibold font-heading pr-1">Job Title:</span>
          {vacancy.title}
        </p>
        <p>
          <span className="font-semibold font-heading pr-1">Location:</span>
          {vacancy.location}
        </p>
        <p>
          <span className="font-semibold font-heading pr-1">
            Employment Type:
          </span>
          {vacancy.employmentType}
        </p>
        <p>
          <span className="font-semibold font-heading pr-1">
            Application Deadline:
          </span>
          {vacancy.deadline}
        </p>
      </div>
      <button
        onClick={() =>
          startTransition(async () => {
            await deleteVacancy(vacancy.id);
          })
        }
        className={`btn px-24 text-white bg-red-600 hover:bg-red-800 flex mx-auto md:mx-0 mt-6 md:mt-0 items-center gap-2 ${
          isPending ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isPending}
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}

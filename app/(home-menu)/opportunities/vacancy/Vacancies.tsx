"use client";
import HomeFooter from "@/app/components/HomeFooter";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

interface VacancyProps {
  vacancy: any;
}

export default function Vacancy({ vacancy }: VacancyProps) {
  const [selectedJob, setSelectedJob] = useState(false);

  return (
    <div>
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
          onClick={() => setSelectedJob(true)}
          className="btn px-24 text-white bg-green-700 hover:bg-gray-900 flex mx-auto md:mx-0 mt-6 md:mt-0 items-center gap-2"
        >
          Details
        </button>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-[75%] w-[90%] max-h-screen overflow-y-auto">
            <h2 className="md:text-2xl text-xl font-bold text-center">
              Opening for {vacancy.title}
            </h2>
            <div className="space-y-4">
              {/* Responsibilities */}
              <div>
                <h2 className="md:text-xl text-lg font-bold">
                  Key Responsibilities
                </h2>
                <ul>
                  {vacancy.responsibilities.map((responsibility: string) => {
                    return (
                      <li
                        key={responsibility}
                        className="text-base pl-4 md:flex items-center"
                      >
                        <GoDotFill size={10} className="mr-1 inline" />
                        {responsibility}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-xl font-bold">Qualifications</h2>
                <ul>
                  {vacancy.qualifications.map((qualification: string) => {
                    return (
                      <li
                        key={qualification}
                        className="text-base pl-4 md:flex items-center"
                      >
                        <GoDotFill size={10} className="mr-1 inline" />
                        {qualification}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Requirements */}
              {vacancy.requirements.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold">Requirements</h2>
                  <ul>
                    {vacancy.requirements.map((requirement: string) => {
                      return (
                        <li
                          key={requirement}
                          className="text-base pl-4 md:flex items-center"
                        >
                          <GoDotFill size={10} className="mr-1 inline" />
                          {requirement}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {vacancy.instructions.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold">Instructions</h2>
                  <ul>
                    {vacancy.instructions.map((instruction: string) => {
                      return (
                        <li
                          key={instruction}
                          className="text-base pl-4 md:flex items-center"
                        >
                          <GoDotFill size={10} className="mr-1 inline" />
                          {instruction}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* What we offer */}
              {/* <div>
                <h2 className="text-xl font-bold">What we offer</h2>
                <ul>
                  {selectedJob.qualifications.map((qualification) => {
                    return (
                      <li className="text-base pl-4 flex items-center">
                        <GoDotFill size={10} className="mr-1" />
                        {qualification}
                      </li>
                    );
                  })}
                </ul>
              </div> */}
            </div>

            <h2 className="text-xl pt-4">How to Apply</h2>
            <p className="md:text-base text-md pl-2">
              Interested candidates should send their resume and cover letter to{" "}
              <strong className="text-green-700">
                ljenigeriajobs@gmail.com.
              </strong>{" "}
              Please use <strong>“{vacancy.title}”</strong> as the subject line.
            </p>

            <button
              onClick={() => setSelectedJob(false)}
              className="mt-4 bg-red-500 text-white px-16 py-2 rounded-lg"
            >
              Close
            </button>

            <h2 className="md:text-xl text-base px-3 md:px-0 leading-4 md:leading-6 pt-6 text-gray-700 text-center font-semibold">
              LJE Nigeria is an equal opportunity employer. We celebrate
              diversity and are committed to creating an inclusive environment
              for all employees.
            </h2>
          </div>
        </div>
      )}
      <div className="mt-16">
        <HomeFooter />
      </div>
    </div>
  );
}

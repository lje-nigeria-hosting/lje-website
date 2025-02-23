"use client";

import { useFormState } from "react-dom";
import { useState } from "react";
import { createVacancy } from "@/utils/homeAction/actions";

export default function VacancyForm() {
  const initialState = { success: false, error: undefined };
  const [formState, action] = useFormState(createVacancy, initialState);
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [newResponsibility, setNewResponsibility] = useState("");
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [newQualification, setNewQualification] = useState("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [newInstruction, setNewInstruction] = useState("");

  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      setResponsibilities([...responsibilities, newResponsibility.trim()]);
      setNewResponsibility("");
    }
  };

  const removeResponsibility = (index: number) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };
  const addQualification = () => {
    if (newQualification.trim()) {
      setQualifications([...qualifications, newQualification.trim()]);
      setNewQualification("");
    }
  };

  const removeQualification = (index: number) => {
    setQualifications(qualifications.filter((_, i) => i !== index));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement("");
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const addInstruction = () => {
    if (newInstruction.trim()) {
      setInstructions([...instructions, newInstruction.trim()]);
      setNewInstruction("");
    }
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-center">Create Vacancy</h1>
      <div className="bg-gray-100 md:p-6 w-[90%] md:w-[80%] mx-auto pt-4 rounded-2xl shadow-md">
        <form action={action} className="md:space-y-4 space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="employmentType"
              placeholder="Employment Type"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              name="deadline"
              placeholder="Deadline"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Responsibilities Input */}
          <div>
            <input
              type="text"
              placeholder="Add Responsibility"
              value={newResponsibility}
              onChange={(e) => setNewResponsibility(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={addResponsibility}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>

          {/* List of Responsibilities */}
          <ul>
            {responsibilities.map((res, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 mt-2"
              >
                {res}
                <button
                  type="button"
                  onClick={() => removeResponsibility(index)}
                  className="text-red-600"
                >
                  ✖
                </button>
                <input type="hidden" name="responsibilities" value={res} />
              </li>
            ))}
          </ul>

          {/* Qualifications Input */}
          <div>
            <input
              type="text"
              placeholder="Add Qualification"
              value={newQualification}
              onChange={(e) => setNewQualification(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={addQualification}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>

          {/* List of Qualifications */}
          <ul>
            {qualifications.map((res, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 mt-2"
              >
                {res}
                <button
                  type="button"
                  onClick={() => removeQualification(index)}
                  className="text-red-600"
                >
                  ✖
                </button>
                <input type="hidden" name="qualifications" value={res} />
              </li>
            ))}
          </ul>

          {/* Requirements Input */}
          <div>
            <input
              type="text"
              placeholder="Add Requirement"
              value={newRequirement}
              onChange={(e) => setNewRequirement(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={addRequirement}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>

          {/* List of Requirements */}
          <ul>
            {requirements.map((res, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 mt-2"
              >
                {res}
                <button
                  type="button"
                  onClick={() => removeRequirement(index)}
                  className="text-red-600"
                >
                  ✖
                </button>
                <input type="hidden" name="requirements" value={res} />
              </li>
            ))}
          </ul>

          {/* Instructions Input */}
          <div>
            <input
              type="text"
              placeholder="Add Instruction"
              value={newInstruction}
              onChange={(e) => setNewInstruction(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={addInstruction}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>

          <ul>
            {instructions.map((res, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 mt-2"
              >
                {res}
                <button
                  type="button"
                  onClick={() => removeInstruction(index)}
                  className="text-red-600"
                >
                  ✖
                </button>
                <input type="hidden" name="requirements" value={res} />
              </li>
            ))}
          </ul>

          {formState?.error && (
            <p className="text-red-500">{formState.error}</p>
          )}

          {/* Display success message */}
          {formState?.success && (
            <p className="text-green-500">Job created successfully!</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-all"
          >
            Create Vacancy
          </button>
        </form>
      </div>
    </div>
  );
}

import Toast from "@/app/admin/Toast";
import HomeFooter from "@/app/components/HomeFooter";
import HomeNav from "@/app/components/HomeNav";
import { createViolation } from "@/utils/homeAction/actions";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { success?: string | undefined };
}) {
  const handleViolation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await createViolation(formData);
    if (response === "Missing required fields") {
      alert("Missing required fields");
    }
  };

  return (
    <div>
      <HomeNav />
      <h1 className="text-2xl md:text-4xl pt-12 px-6 leading-6 text-black text-center font-semibold">
        Welcome to the Human Rights Complaints and Documentation Centre
      </h1>
      <div className="md:mx-36 mx-5 pt-4">
        <p className="md:text-center text-justify">
          The Human Rights Complaints and Documentation Centre diligently
          monitors and documents incidents of human rights violations throughout
          Nigeria.
          <br />
          <br /> Our mandate extends to receiving and addressing complaints and
          cases, with a primary focus on facilitating access to justice and
          effective remedies for victims and their families.
          <br />
          <br /> We ensure absolute anonymity for victims and witnesses, and
          uphold strict confidentiality in handling all information received, in
          accordance with our commitment to transparency and respect for
          privacy.
        </p>
      </div>
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-3xl mx-auto bg-gray-100 md:p-6 p-2 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Report an issue
          </h2>

          <form onSubmit={handleViolation} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            {/* Location */}
            <input
              type="text"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            {/* Right/Freedom Violated (Dropdown) */}
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700">
              <option disabled selected>
                Right/Freedom Violated
              </option>
              <option>Police Brutality</option>
              <option>Illegal Detention</option>
              <option>Freedom of Expression</option>
              <option>Right to Life</option>
              <option>Access to Information</option>
              <option>Data Rights</option>
              <option>Freedom of Association</option>
              <option>Others</option>
            </select>

            {/* What Really Happened (Textarea) */}
            <textarea
              rows={5}
              placeholder="What really happened?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-all"
            >
              Submit Report
            </button>
          </form>
        </div>
      </section>
      {searchParams?.success && (
        <Toast message="We have received your complaint, we will get back to you ASAP via Email" />
      )}
      <HomeFooter />
    </div>
  );
}

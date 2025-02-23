import React from "react";
import HomeNav from "@/app/components/HomeNav";
import HomeFooter from "../../components/HomeFooter";

export default function page() {
  return (
    <div>
      <HomeNav />
      <h1 className="text-2xl md:text-4xl pt-12 text-black text-center font-semibold">
        Help Increase Our Reach
      </h1>
      <div className="md:mx-36 mx-5 pt-4">
        <p className="md:text-center text-justify">
          <a href="/signup" className="text-green-700 font-medium">
            Join us
          </a>{" "}
          in our bold mission for economic liberation!
          <br />
          <br /> The Leadership Hub, Justice and Economic Advancement, began
          operations in 2023, unites passionate activists, grassroots
          organizations, and advocacy groups in a relentless pursuit of justice
          and equity.
          <br />
          <br /> Your donation fuels our fight against economic oppression,
          empowering marginalized communities, amplifying voices, and driving
          systemic change. With your support, we can break barriers, dismantle
          injustice, and pave the way for a future where everyone thrives. Every
          contribution matters—donate now and be a catalyst for a lasting
          transformation in Nigeria.
        </p>
      </div>
      <div className="text-center mx-auto pt-12">
        <h2>Account Details</h2>
        <p className="font-medium">
          Account Name:
          <span className="font-heading pl-2">
            LEADERSHIP HUB, JUSTICE AND ECONOMIC ADVANCEMENT
          </span>
        </p>
        <p className="font-medium">
          Account Number: <span className="font-heading pl-2">1312761159</span>
        </p>
        <p className="font-medium">
          Bank Name: <span className="font-heading pl-2">Zenith Bank Plc</span>
        </p>
      </div>
      <div className="flex justify-center items-center min-h-[30vh] md:min-h-[50vh] px-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Stay updated with the latest news and exclusive insights.
          </p>

          {/* Subscription Form */}
          <div className="mt-5">
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

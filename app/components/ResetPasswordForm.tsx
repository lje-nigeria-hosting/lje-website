"use client";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import Footer from "./Footer";
import { resetPassword } from "@/utils/actions";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const message = await resetPassword(email);
    setMessage(message);
  };

  return (
    <div>
      <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
        <div className="md:bg-white min-h-screen flex flex-col">
          <div className="text-center py-10">
            <h1>Reset Password</h1>
          </div>
          <div className="mx-12 space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <HiMail className="inline" />
              <input
                type="text"
                className="grow"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder="Email"
              />
            </label>

            <div className="pt-5">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn w-full text-white bg-[#0C9F0A]"
              >
                {isSubmitting ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
            <p className="pt-2 mx-auto w-full">{message}</p>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

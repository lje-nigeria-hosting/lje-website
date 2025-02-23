"use client";
import React, { useState } from "react";
import { HiKey } from "react-icons/hi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Footer from "./Footer";
import { changePasswordOnReset } from "@/utils/actions";
import { redirect, useRouter } from "next/navigation";

interface ChangePasswordFormProps {
  resetPasswordToken: string;
}

const ChangePasswordForm = ({
  resetPasswordToken,
}: ChangePasswordFormProps) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    const message = await changePasswordOnReset(resetPasswordToken, password);
    setMessage(message + ". Proceed to login");
    router.push("/login");
  };

  return (
    <div>
      <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
        <div className="md:bg-white min-h-screen flex flex-col">
          <div className="text-center py-10">
            <h1>Change password</h1>
          </div>
          <div className="mx-12">
            <label className="input input-bordered flex mb-2 items-center gap-2">
              <HiKey size={15} className="inline" />
              <input
                type={isVisible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="grow"
                placeholder="password"
              />
              {isVisible ? (
                <IoMdEyeOff
                  onClick={handleVisibility}
                  size={15}
                  className="inline"
                />
              ) : (
                <IoMdEye
                  onClick={handleVisibility}
                  size={15}
                  className="inline"
                />
              )}
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <HiKey size={15} className="inline" />
              <input
                type={isVisible ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="grow"
                placeholder="Confirm Password"
              />
              {isVisible ? (
                <IoMdEyeOff
                  onClick={handleVisibility}
                  size={15}
                  className="inline"
                />
              ) : (
                <IoMdEye
                  onClick={handleVisibility}
                  size={15}
                  className="inline"
                />
              )}
            </label>
            <div className="py-5">
              <button
                onClick={handleSubmit}
                className="btn w-full text-white bg-[#0C9F0A]"
              >
                {isSubmitting ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Change Password"
                )}
              </button>
            </div>
            <p>{message}</p>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;

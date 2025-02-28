"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { HiMail, HiKey } from "react-icons/hi";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useState } from "react";
import { login } from "@/utils/actions";
import Toast from "../admin/Toast";
import { redirect } from "next/navigation";

export default function Login({
  searchParams,
}: {
  searchParams: { signupsucess?: string | undefined };
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeButtonText = () => {
    setIsSubmitting(true);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await login(formData);
    setIsSubmitting(false);
    if (response === "Invalid Credentials") {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
        <div className="md:bg-white min-h-screen flex flex-col">
          <div className="text-center py-10">
            <div className="flex justify-center pb-2">
              <Link href="https://ljenigeria.org">
                <Image src="/logo.png" alt="logo" width={65} height={65} />
              </Link>
            </div>
            <h1>Welcome back!</h1>
            <p className="text-[14px]">
              <Link href="/signup">
                <span className="text-[#0C9F0A] text-[14px]">
                  Create an account
                </span>
              </Link>{" "}
              if you don't have one
            </p>
          </div>
          <div className="mx-12">
            <form className="space-y-4" onSubmit={handleLogin}>
              <label className="input input-bordered flex items-center gap-2">
                <HiMail className="inline" />
                <input
                  type="text"
                  className="grow"
                  name="email"
                  placeholder="Email"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <HiKey size={15} className="inline" />
                <input
                  type={isVisible ? "text" : "password"}
                  name="password"
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
              <div className="py-5">
                <button
                  type="submit"
                  onClick={changeButtonText}
                  className={
                    isSubmitting
                      ? "btn w-full text-white bg-gray-300"
                      : "btn w-full text-white bg-[#0C9F0A]"
                  }
                >
                  {isSubmitting ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Proceed to login"
                  )}
                </button>

                <p className="py-1 tracking-tighter">
                  Forgot Password?{" "}
                  <Link href="/reset-password">
                    <span className="text-red-500 underline tracking-tighter text-[14px]">
                      click here
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
      {searchParams?.signupsucess && (
        <Toast message="Sign up success!! We sent you an email" />
      )}
    </>
  );
}

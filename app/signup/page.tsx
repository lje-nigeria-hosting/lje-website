import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

import { redirect } from "next/navigation";
import { getSession } from "@/utils/getSession";

import RegistrationForm from "../components/RegistrationForm";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="md:bg-[url('/logo.png')] md:bg-no-repeat md:bg-center md:bg-cover md:px-[30%] md:bg-blend-overlay md:bg-gray-200">
        <div className="md:bg-white min-h-screen">
          <div className="text-center py-10">
            <div className="flex justify-center pb-2">
              <Link href="https://ljenigeria.org">
                <Image src="/logo.png" alt="logo" width={65} height={65} />
              </Link>
            </div>
            <h1>Create Account</h1>
            <p className="text-[14px]">
              <Link href="/login">
                <span className="text-[#0C9F0A] text-[14px]">Log in here</span>
              </Link>{" "}
              if you already have an account
            </p>
          </div>
          <div className="mx-12">
            <RegistrationForm />
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

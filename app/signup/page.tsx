import Image from "next/image";
import Link from "next/link";
import { HiMail, HiUser } from "react-icons/hi";
import { HiKey } from "react-icons/hi2";
import Footer from "../components/Footer";
import { createUser } from "@/utils/actions";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { redirect } from "next/navigation";
import { getSession } from "@/utils/getSession";
import { MdLocationPin, MdLocalPhone, MdWork } from "react-icons/md";
import DobLabel from "../components/ui/DobLabel";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    redirect("/dashboard");
  }

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

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
            <form className="space-y-4" action={createUser}>
              <div className="flex space-x-3 items-center justify-center w-full">
                <label className="input input-bordered w-[48%] flex items-center gap-2">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                </label>
                <label className="input input-bordered w-[48%] flex items-center gap-2">
                  <input type="text" name="lastname" placeholder="Last Name" />
                </label>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <HiMail className="inline" />
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <HiUser className="inline" />
                <input
                  type="text"
                  name="username"
                  className="grow"
                  placeholder="Username"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <HiKey size={15} className="inline" />
                <input
                  type="password"
                  name="password"
                  className="grow"
                  placeholder="******"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <HiKey size={15} className="inline" />
                <input
                  type="password"
                  name="confirmpassword"
                  className="grow"
                  placeholder="Confirm password"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <MdLocationPin className="inline" />
                <input
                  type="text"
                  name="address"
                  className="grow"
                  placeholder="Address"
                />
              </label>
              <div className="flex justify-center items-center space-x-3">
                <select
                  name="state"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    State of origin
                  </option>
                  {states.map((state) => {
                    return <option key={state}>{state}</option>;
                  })}
                </select>
                <select
                  name="gender"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <MdLocalPhone className="inline" />
                <input
                  type="text"
                  name="phone"
                  className="grow"
                  placeholder="Phone number"
                />
              </label>
              <div className="flex justify-center items-center space-x-3">
                <label className="input input-bordered flex items-center w-[50%] gap-2">
                  <MdWork className="inline" />
                  <input
                    type="text"
                    name="occupation"
                    className="grow"
                    placeholder="Occupation"
                  />
                </label>
                <DobLabel />
              </div>
              <div className="flex justify-center items-center space-x-3">
                <select
                  name="maritalstatus"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Marital Status
                  </option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
                <select
                  name="education"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Level of Education
                  </option>
                  <option>WAEC</option>
                  <option>BSC</option>
                  <option>MSC</option>
                </select>
              </div>
              <div className="py-5">
                <p className="text-[13px] pb-2">
                  By signing up, you accept LJE's{" "}
                  <span className="bg-gradient-to-br from-[#0C9F0A] to-[#61CE70] bg-clip-text text-transparent">
                    terms and conditions.
                  </span>
                </p>
                <button
                  type="submit"
                  className="btn w-full text-white bg-[#0C9F0A]"
                >
                  Sign Up{" "}
                  <IoArrowForwardCircleOutline
                    size={20}
                    className="inline mr-3"
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

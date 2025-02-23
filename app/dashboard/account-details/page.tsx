import DashboardFooter from "@/app/components/DashboardFooter";
import ProfilePictureUploadForm from "@/app/components/ProfilePictureUploadForm";
import prisma from "@/utils/db";
import { getSession } from "@/utils/getSession";
import Image from "next/image";
import React from "react";

const AccountDetails = async () => {
  const session = await getSession();
  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });

  const stateRep = await prisma.stateRep.findFirst({
    where: { state: user?.state },
  });

  console.log(user?.image);

  return (
    <>
      <div className="py-6">
        <h1 className="text-xl md:text-2xl text-center text-[#0C9F0A]">
          USER DETAILS
        </h1>
        <div className="rounded-full my-4 flex justify-center">
          <Image
            priority
            src={user?.image as string}
            alt="display-photo"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
        <ProfilePictureUploadForm />
      </div>
      <div className="space-y-2 mb-10 md:mx-[30%]">
        <div className="flex gap-2 items-center mx-10">
          <h2 className="text-lg">First Name:</h2>
          <p>{user?.firstName}</p>
        </div>
        <div className="flex gap-2 items-center mx-10">
          <h2 className="text-lg">Last Name:</h2>
          <p>{user?.lastName}</p>
        </div>
        <div className="flex gap-2 items-center mx-10">
          <h2 className="text-lg">Email address:</h2>
          <p>{user?.email}</p>
        </div>
        <div className="flex gap-2 items-center mx-10">
          <h2 className="text-lg">Gender:</h2>
          <p>{user?.gender}</p>
        </div>
        <div className="flex gap-2 items-center mx-10">
          <h2 className="text-lg">State:</h2>
          <p>{user?.state}</p>
        </div>
      </div>
      <div>
        <div className="space-y-2 mb-16 md:mx-[30%]">
          <h1 className="text-xl md:text-2xl text-[#0C9F0A] underline mx-10 py-2">
            STATE REPRESENTATIVE
          </h1>
          <div className="flex gap-2 items-center mx-10">
            <h2 className="text-lg">Name:</h2>
            <p>{stateRep?.name}</p>
          </div>
          <div className="flex gap-2 items-center mx-10">
            <h2 className="text-lg">Email:</h2>
            <p>{stateRep?.email}</p>
          </div>
          <div className="flex gap-2 items-center mx-10">
            <h2 className="text-lg">Phone Number:</h2>
            <p>{stateRep?.phoneNumber}</p>
          </div>
          <div className="flex gap-2 items-center mx-10">
            <h2 className="text-lg">LGA:</h2>
            <p>{stateRep?.LGA}</p>
          </div>
          <div className="flex gap-2 items-center mx-10">
            <h2 className="text-lg">Gender:</h2>
            <p>{stateRep?.gender}</p>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default AccountDetails;

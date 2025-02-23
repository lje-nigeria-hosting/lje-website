import DashboardFooter from "@/app/components/DashboardFooter";
import prisma from "@/utils/db";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface AnnouncementPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const AnnouncementPage = async ({ searchParams }: AnnouncementPageProps) => {
  console.log(searchParams.permalink);

  const announcement = await prisma.announcement.findFirst({
    where: { permalink: searchParams.permalink as string },
  });

  return (
    <>
      <div className="md:px-[20%] px-6">
        <h1 className="text-center py-10">{announcement?.title}</h1>
        <div className="mx-[20%]">
          <Image
            src={announcement?.displayImage as string | StaticImport}
            alt="news-image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p className="text-justify leading-6 py-10 text-lg">
          {announcement?.content}
        </p>
      </div>
      <div className="w-full">
        <DashboardFooter />
      </div>
    </>
  );
};

export default AnnouncementPage;

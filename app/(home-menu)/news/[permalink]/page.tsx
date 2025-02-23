import HomeFooter from "@/app/components/HomeFooter";
import HomeNav from "@/app/components/HomeNav";
import prisma from "@/utils/db";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { marked } from "marked";
import MarkupRenderer from "./MarkUpRenderer";

export default async function AnnouncementPage({
  params,
}: {
  params: { permalink: string };
}) {
  const announcement = await prisma.announcement.findFirst({
    where: { permalink: params.permalink as string },
  });

  const markupContent = marked(announcement?.content as string);

  return (
    <>
      <HomeNav />
      <div className="md:px-36 text-justify pb-12 px-5">
        <h1 className="text-center py-10">{announcement?.title}</h1>
        <div className="mx-[20%]">
          <Image
            src={announcement?.displayImage as string | StaticImport}
            alt="news-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[50%] h-auto mx-auto"
          />
        </div>
        <MarkupRenderer markupContent={markupContent} />
        {/* <div
          className="text-justify leading-6 tracking-wide py-10 text-base"
          dangerouslySetInnerHTML={{ __html: markupContent }}
        /> */}
      </div>
      <div className="w-full">
        <HomeFooter />
      </div>
    </>
  );
}

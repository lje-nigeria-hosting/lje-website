import React from "react";
import prisma from "@/utils/db";
import AnnouncementForm from "./AnnouncementForm";
import Toast from ".././Toast";

export default async function EditAnnouncement({
  searchParams,
}: {
  searchParams: { success?: string | undefined };
}) {
  const announcements = await prisma.announcement.findMany();
  return (
    <div>
      <h1 className="text-center pt-12 pb-5">Edit Announcement</h1>
      <div>
        {announcements.map((announcement) => {
          return (
            <AnnouncementForm
              key={announcement.id}
              announcement={announcement}
            />
          );
        })}
      </div>
      {searchParams?.success && <Toast message="Edited successfully" />}
    </div>
  );
}

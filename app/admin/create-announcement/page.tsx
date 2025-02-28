import Footer from "@/app/components/Footer";
import { getSession } from "@/utils/getSession";
import { redirect } from "next/navigation";
import React from "react";
import CreateAnnouncementForm from "./CreateAnnouncementForm";

const CreateAnnouncement = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user?.role === "USER") {
    redirect("/dashboard");
  }

  return (
    <>
      <div>
        <h2 className="text-center pt-6 px-6">
          Create new announcement by filling this form correctly
        </h2>
        <CreateAnnouncementForm />
        <Footer />
      </div>
    </>
  );
};

export default CreateAnnouncement;

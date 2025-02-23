import { getSession } from "@/utils/getSession";
import { redirect } from "next/navigation";
import Toast from "./Toast";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { announcementsuccess?: string | undefined };
}) {
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
        <h1 className="text-center my-5">Welcome to admin</h1>
      </div>
      {searchParams?.announcementsuccess && (
        <Toast message="Announcement created successfully" />
      )}
    </>
  );
}

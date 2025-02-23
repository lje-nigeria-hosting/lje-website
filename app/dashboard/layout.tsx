import { getSession } from "@/utils/getSession";
import UserDashboardNavbar from "../components/UserDashboardNavbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user.role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <html lang="en">
      <body>
        <main>
          <UserDashboardNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}

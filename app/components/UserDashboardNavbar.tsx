import Link from "next/link";
import Image from "next/image";
import UserIconDashboard from "./UserIconDashboard";
import { getSession } from "@/utils/getSession";
import prisma from "@/utils/db";

const UserDashboardNavbar: React.FC = async () => {
  const session = await getSession();
  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });
  return (
    <div>
      <div className="flex justify-between items-center px-4 md:px-12 py-3 md:py-5 bg-[#F9F9F9]">
        <Link href="https://ljenigeria.org">
          <Image
            src="/logo.png"
            alt="logo"
            className="md:hidden flex"
            width={40}
            height={40}
          />
          <Image
            src="/logo.png"
            alt="logo"
            className="hidden md:flex"
            width={65}
            height={65}
          />
        </Link>
        <UserIconDashboard displayPhoto={user?.image as string} />
      </div>
    </div>
  );
};

export default UserDashboardNavbar;

import AnnouncementCard from "../components/AnnouncementCard";
import DashboardFooter from "../components/DashboardFooter";
import prisma from "@/utils/db";

interface DashboardPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Dashboard = async ({ searchParams }: DashboardPageProps) => {
  const announcements = await prisma.announcement.findMany();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const showedAnnouncements = announcements.slice(start, end);

  return (
    <>
      <div className="px-4 pt-8 pb-0 min-h-screen">
        <h1 className="text-center text-xl tracking-wide underline">
          ANNOUNCEMENTS
        </h1>
        {announcements.map((announcement) => {
          return (
            <AnnouncementCard
              key={announcement.id}
              permalink={announcement.permalink}
              category={announcement.category}
              author={announcement.author}
              title={announcement.title}
              displayImage={announcement.displayImage}
              date={announcement.createdAt}
            />
          );
        })}
      </div>
      {/* <PaginationButton currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              window.location.href = `/news?page=${page}`;
            }} /> */}
      <div className="w-full mt-10">
        <DashboardFooter />
      </div>
    </>
  );
};

export default Dashboard;

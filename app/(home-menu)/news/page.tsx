import HomeNav from "@/app/components/HomeNav";
import PaginationButton from "@/app/components/PaginationButton";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeFooter from "@/app/components/HomeFooter";
import prisma from "@/utils/db";

async function getNews(page: number, itemsPerPage: number) {
  const allNews = await prisma.announcement.findMany({
    where: { membersOnly: "NO" },
    orderBy: { createdAt: "desc" },
  });

  const totalPages = Math.ceil(allNews.length / itemsPerPage);

  // Get news items for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage);

  return { currentNews, totalPages };
}

export default async function page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const ITEMS_PER_PAGE = 10;
  const currentPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1;

  // Fetch news items for the current page
  const { currentNews, totalPages } = await getNews(
    currentPage,
    ITEMS_PER_PAGE
  );

  return (
    <div>
      <HomeNav />
      <h1 className="md:hidden text-center pt-12 underline">News Update</h1>
      <div className="pb-16">
        <section className="mx-auto md:py-10 pb-10 px-4">
          <ul className="md:space-y-4">
            {currentNews.map((news) => (
              <div key={news.permalink} className="py-4 md:mx-16 mx-4">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full md:flex md:space-x-12">
                  <div className="relative md:w-[40%] md:h-auto h-[150px]">
                    <Image
                      src={news.displayImage}
                      alt={news.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-2xl"
                    />
                  </div>

                  {/* Category and Title */}
                  <div className="md:p-5 p-3 md:w-[60%]">
                    <span className="text-sm text-green-600 font-semibold">
                      {news.category}
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 mt-1">
                      {news.title}
                    </h2>

                    {/* Author & Date */}
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>By {news.author}</span>
                      <span className="md:pr-10 pr-2">
                        {news.createdAt.getFullYear()}-
                        {news.createdAt.getMonth() + 1}-
                        {news.createdAt.getDate()}
                      </span>
                    </div>

                    <p className="md:text-base text-[15px] leading-5 pt-5">
                      {news.content.substring(0, 180)}...
                    </p>
                    <Link
                      href={`/news/${news.permalink}`}
                      className="text-green-700 font-semibold text-sm mt-3 inline-block"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ul>

          <PaginationButton currentPage={currentPage} totalPages={totalPages} />
        </section>
      </div>
      <HomeFooter />
    </div>
  );
}

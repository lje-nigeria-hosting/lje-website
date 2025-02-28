import HomeNav from "@/app/components/HomeNav";
import prisma from "@/utils/db";
import React from "react";
import Vacancy from "./Vacancies";
import HomeFooter from "@/app/components/HomeFooter";

export default async function VacancyPage() {
  const vacancies = await prisma.jobVacancy.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <HomeNav />
      <div className="py-12">
        <h1 className="text-2xl md:text-4xl text-center md:pb-6 pb-2 font-semibold">
          LJE Vacancies
        </h1>
        {vacancies.map((vacancy) => {
          return <Vacancy key={vacancy.id} vacancy={vacancy} />;
        })}
      </div>
    </div>
  );
}

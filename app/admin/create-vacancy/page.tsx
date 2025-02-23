import React from "react";
import VacancyForm from "./VacancyForm";
import prisma from "@/utils/db";
import DeleteVacancy from "./DeleteVacancy";

export default async function page() {
  const vacancies = await prisma.jobVacancy.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="py-20">
        <h1 className="text-center">Delete Vacancies</h1>
        {vacancies.map((vacancy) => {
          return <DeleteVacancy key={vacancy.id} vacancy={vacancy} />;
        })}
      </div>
      <VacancyForm />
    </div>
  );
}

"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db";
import { redirect } from "next/navigation";

export const createContactMessage = async (formData: FormData) => {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!firstName || !lastName || !email || !message) {
    throw new Error("Missing required fields");
  }

  await prisma.contactMessage.create({
    data: {
      firstName,
      lastName,
      email,
      message,
    },
  });

  redirect("/contact?contactsuccess=true");
};

export const createViolation = async (formData: FormData) => {
  const fullName = formData.get("fullname") as string;
  const location = formData.get("location") as string;
  const phone = formData.get("phone") as string;
  const rightsViolated = formData.get("rightsviolated") as string;
  const whatHappened = formData.get("whathappened") as string;

  if (!fullName || !location || !phone || !rightsViolated || !whatHappened) {
    throw new Error("Missing required fields");
  }

  await prisma.violation.create({
    data: {
      fullName,
      location,
      phone,
      rightsViolated,
      whatHappened,
    },
  });

  redirect("/report-a-violation?success=true");
};

export const createVacancy = async (
  prevState: { success: boolean; error?: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const employmentType = formData.get("employmentType") as string;
    const deadline = formData.get("deadline") as string;
    const responsibilities = formData.getAll("responsibilities") as string[];
    const qualifications = formData.getAll("qualifications") as string[];
    const requirements = formData.getAll("requirements") as string[];
    const instructions = formData.getAll("instructions") as string[];

    if (!title || !employmentType || responsibilities.length === 0) {
      throw new Error("Missing required fields");
    }

    await prisma.jobVacancy.create({
      data: {
        title,
        location,
        employmentType,
        deadline,
        responsibilities,
        qualifications,
        requirements,
        instructions,
      },
    });

    return { success: true, error: undefined };
  } catch (error) {
    return { success: false, error: "Something went wrong." };
  }
};

export async function deleteVacancy(vacancyId: string) {
  try {
    await prisma.jobVacancy.delete({
      where: { id: vacancyId },
    });

    revalidatePath("/admin/create-vacancy");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete vacancy." };
  }
}

// export const editAnnouncement = async (formData: FormData) => {
//   const id = formData.get("id") as string;
//   const title = formData.get("title") as string;
//   const category = formData.get("category") as string;
//   const permalink = formData.get("link") as string;
//   const content = formData.get("content") as string;

//   if (!id || !title || !category || !content) {
//     throw new Error("Missing required fields");
//   }

//   try {
//     await prisma.announcement.update({
//       where: { id },
//       data: { title, category, permalink, content },
//     });
//   } catch (error) {
//     throw new Error("Failed to edit announcement");
//   }

//   return { success: true };
// };

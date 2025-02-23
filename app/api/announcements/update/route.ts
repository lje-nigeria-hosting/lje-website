import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, title, category, link, content } = await req.json();

    // Ensure all required fields are provided
    if (!id || !title || !category || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update announcement in the database
    const updatedAnnouncement = await prisma.announcement.update({
      where: { id },
      data: { title, category, permalink: link, content },
    });

    return NextResponse.json(updatedAnnouncement, { status: 200 });
  } catch (error) {
    console.error("Error updating announcement:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

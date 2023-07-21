"use server";
import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { revalidatePath } from "next/cache";

export async function createTask(data) {
  const session = await getServerSession(options);

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.task.create({
    data: { title, complete: false, userId: session.user.id },
  });

  revalidatePath(`/tasks}`);
}

export async function getTasks() {
  const session = await getServerSession(options);
  console.log("my session", session);
  return await prisma.task.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

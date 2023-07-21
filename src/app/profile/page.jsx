import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getTasks } from "@/actions/tasks";
import Link from "next/link";
const page = async () => {
  const tasks = await getTasks();
  const session = await getServerSession(options);
  const tasksLeftToComplete = tasks.filter((task) => task.complete === false);
  return (
    <div>
      <h1>{`Hi ${session?.user?.name}`}</h1>
      <p className="mb-8">{`You have ${tasksLeftToComplete.length} left to complete`}</p>
      <Link
        className="bg-slate-800 border border-white rounded-md px-4 py-2 my-6"
        href={"/tasks"}
      >
        Back to Tasks
      </Link>
    </div>
  );
};

export default page;

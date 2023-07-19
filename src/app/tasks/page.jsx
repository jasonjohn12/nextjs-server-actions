import { prisma } from "@/db";

import { TodoItem } from "@/components/TodoItem";
import { redirect, useServerInsertedHTML } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import TaskForm from "@/components/TaskForm";
import { getTasks } from "@/actions/tasks";
// function getTodos(userId) {
//   return prisma.task.findMany({
//     where: {
//       userId: userId,
//     },
//   });
// }

async function toggleTodo(id, complete) {
  "use server";
  await prisma.task.update({ where: { id }, data: { complete } });
}
export default async function Home() {
  // const session = await getServerSession(options);
  // const todos = await getTodos(session?.user?.id);
  const todos = await getTasks();
  return (
    <Suspense fallback={<Loading />}>
      <TaskForm />
      {/* </header> */}
      <ul className="pl-4 container mx-auto flex flex-col w-full justify-center items-center gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </Suspense>
  );
}

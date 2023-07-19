// import Image from "next/image";
// import Link from "next/link";
// import { prisma } from "@/db";
// import { TodoItem } from "@/components/TodoItem";

// function getTodos() {
//   return prisma.todo.findMany();
// }

// async function toggleTodo(id: string, complete: boolean) {
//   "use server";
//   await prisma.todo.update({ where: { id }, data: { complete } });
// }
export default async function Home() {
  // const todos = await getTodos();
  return (
    <div className="flex justify-center items-center container mx-auto max-w-2xl h-96 gap-8">
      <div className="flex flex-col">
        <h1 className="text-5xl text-bold mb-8">Simple Task App</h1>
        <p className="text-lg">
          Easily stay on top of your tasks you want to accomplish
        </p>
      </div>
      <div className="flex text-xl px-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        ratione ducimus
      </div>
    </div>
  );
}

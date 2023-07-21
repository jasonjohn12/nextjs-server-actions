import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  // const session = await getServerSession(options);
  // if (session?.user) {
  //   redirect("/tasks");
  // }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center container mx-auto max-w-2xl h-96 gap-8">
      <div className="flex flex-col">
        <h1 className="text-5xl text-bold mb-8">Simple Task App</h1>
        <p className="text-lg">
          Easily stay on top of your tasks you want to accomplish
        </p>
      </div>
      <div className="flex text-xl px-8">
        <Image
          className="rounded-md w-full h-auto"
          height={850}
          width={1200}
          src={"/images/checklist.jpg"}
          alt="Checklist"
          sizes="(min-width: 2040px) calc(3.13vw + 330px), (min-width: 820px) calc(10.42vw + 183px), (min-width: 780px) calc(20vw + 203px), (min-width: 680px) 544px, calc(94.44vw - 79px)"
        />
      </div>
    </div>
  );
}

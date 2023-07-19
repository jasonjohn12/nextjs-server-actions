import Link from "next/link";
import Profile from "./Profile";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="flex justify-between items-center mb-12">
      <h1 className="text-2xl">
        <Link className=" text-slate-300 px-2 py-1" href={"/"}>
          TODOS
        </Link>
      </h1>
      <Profile />
    </header>
  );
};

export default Navbar;

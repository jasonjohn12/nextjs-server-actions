"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignOutButton from "./SignOutButton";

const ProfileImage = ({ height, width, src, alt }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <Image
        onClick={() => setToggle((prevstate) => !prevstate)}
        className="rounded-full cursor-pointer"
        {...{
          height,
          width,
          src,
          alt,
        }}
      />
      {toggle && (
        <div className="toggle absolute right-0 top-24 w-full h-full bg-transparent sm:hidden  items-center text-center rounded-lg  bg-slate-600 flex flex-col p-6 leading-24 text-2xl gap-6">
          <Link
            onClick={() => setToggle((prevState) => !prevState)}
            href="/profile"
          >
            Profile
          </Link>
          <SignOutButton callbackUrl="http://localhost:3000/">
            Sign Out
          </SignOutButton>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;

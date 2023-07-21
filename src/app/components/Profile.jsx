// "use client";

import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import ProfileImage from "./ProfileImage";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
const Profile = async () => {
  const session = await getServerSession(options);

  return (
    <div>
      {session?.user?.image && (
        <div className="flex items-center justify-center gap-4">
          <div className="hidden sm:flex gap-4">
            <Link href={"/profile"}>Profile</Link>

            <SignOutButton
              className=""
              // onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
              callbackUrl="http://localhost:3000/"
            >
              Sign out
            </SignOutButton>
          </div>

          <ProfileImage
            height={40}
            width={40}
            src={session.user.image}
            alt="profile pic"
          />
        </div>
      )}
      {!session?.user && (
        <SignInButton callbackUrl="http://localhost:3000/tasks">
          Sign In
        </SignInButton>
      )}
    </div>
  );
};

export default Profile;

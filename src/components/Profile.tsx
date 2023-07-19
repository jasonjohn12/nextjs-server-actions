"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {session?.user?.image && (
        <div className="flex items-center justify-center gap-4">
          <Image
            className="cursor-pointer rounded-full"
            height={40}
            width={40}
            src={session.user.image}
            alt="profile pic"
          />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
      {!session?.user && (
        <button onClick={() => signIn("github")}>Sign In</button>
      )}
    </div>
  );
};

export default Profile;

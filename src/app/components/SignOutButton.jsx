"use client";
import { signOut } from "next-auth/react";
// type SignInProps = {
//   callbackUrl: string;
// };

const SignOutButton = ({ callbackUrl }) => {
  return (
    <button onClick={() => signOut({ callbackUrl: callbackUrl })}>
      Sign Out
    </button>
  );
};

export default SignOutButton;

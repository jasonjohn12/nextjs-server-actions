"use client";
import { signIn } from "next-auth/react";
// type SignInProps = {
//   callbackUrl: string;
// };

const SignInButton = ({ callbackUrl }) => {
  return (
    <button onClick={() => signIn("github", { callbackUrl: callbackUrl })}>
      Sign In
    </button>
  );
};

export default SignInButton;

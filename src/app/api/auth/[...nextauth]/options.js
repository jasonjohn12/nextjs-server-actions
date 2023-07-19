import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
export const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    //   async signIn({ user, account, profile, email, credentials }) {
    //     console.log("user", user);
    //     console.log("account", account);
    //     console.log("profile", profile);
    //     return true;
    //     // const isAllowedToSignIn = true
    //     // if (isAllowedToSignIn) {
    //     // return true
    //     // } else {
    //     // Return false to display a default error message
    //     // return false
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   },
    // },
    session: async ({ session, token, user }) => {
      console.log("user", user);
      if (session?.user) {
        session.user.id = user.id;
      }

      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
};

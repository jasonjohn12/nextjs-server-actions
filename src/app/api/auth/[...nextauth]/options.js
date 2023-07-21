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
    session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

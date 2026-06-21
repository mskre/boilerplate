import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { ROUTES } from "@/lib/routes";

const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;
const githubProvider =
  githubClientId && githubClientSecret
    ? GitHubProvider({
        clientId: githubClientId,
        clientSecret: githubClientSecret,
      })
    : null;

export const isGitHubAuthConfigured = githubProvider !== null;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: ROUTES.login,
  },
  providers: githubProvider ? [githubProvider] : [],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

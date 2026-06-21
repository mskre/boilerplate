import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { authEnv, isAuthRuntimeConfigured } from "@/lib/auth-env";
import { ROUTES } from "@/lib/routes";

const githubProvider =
  authEnv.githubClientId && authEnv.githubClientSecret
    ? GitHubProvider({
        clientId: authEnv.githubClientId,
        clientSecret: authEnv.githubClientSecret,
      })
    : null;

export const isAuthConfigured = isAuthRuntimeConfigured && githubProvider !== null;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: ROUTES.login,
  },
  providers: isAuthConfigured && githubProvider ? [githubProvider] : [],
  session: {
    strategy: "jwt",
  },
  secret: authEnv.nextAuthSecret,
};

export async function getOptionalServerSession() {
  if (!isAuthConfigured) {
    return null;
  }

  return getServerSession(authOptions);
}

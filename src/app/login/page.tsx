import Link from "next/link";
import { getServerSession } from "next-auth";
import { AuthActions } from "@/components/auth-actions";
import { SiteNav } from "@/components/site-nav";
import { authOptions, isGitHubAuthConfigured } from "@/lib/auth";
import { ROUTES } from "@/lib/routes";
import { getUserDisplayName } from "@/lib/user";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="page-stage auth-stage">
      <SiteNav action={{ href: ROUTES.home, label: "back" }} />

      <section className="auth-shell" aria-labelledby="login-title">
        <p className="eyebrow">access gate</p>
        <h1 id="login-title">login</h1>
        {session?.user && (
          <p>Signed in as {getUserDisplayName(session.user)}.</p>
        )}
        <AuthActions
          canSignIn={isGitHubAuthConfigured}
          isSignedIn={Boolean(session?.user)}
        />
        <Link className="text-link" href={ROUTES.home}>
          return to the sea
        </Link>
      </section>
    </main>
  );
}

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { authOptions } from "@/lib/auth";
import { ROUTES } from "@/lib/routes";
import { getUserDisplayName } from "@/lib/user";

export const dynamic = "force-dynamic";

export default async function ProtectedAppPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(ROUTES.login);
  }

  return (
    <main className="page-stage auth-stage">
      <SiteNav action={{ href: ROUTES.login, label: "account" }} />

      <section className="auth-shell" aria-labelledby="app-title">
        <p className="eyebrow">protected</p>
        <h1 id="app-title">app</h1>
        <p>
          You are signed in as {getUserDisplayName(session.user)}.
          This is the route to build the real product on top of.
        </p>
      </section>
    </main>
  );
}

# Authentication Plan

Implemented library: **NextAuth.js** (`next-auth@4`).

Why Auth.js:
- Open-source and self-hostable, with no vendor lock-in.
- Works directly with Next.js App Router.
- Supports OAuth/OIDC providers such as GitHub, Google, Authentik, Keycloak, or Zitadel.
- Supports middleware-based route gates for future protected app sections.
- Keeps secrets in runtime environment variables or k3s Secrets, not in this public repo.

Current shape:
- Public routes: `/`, `/login`.
- Protected route: `/app`.
- Login page calls `signIn("github")` when GitHub OAuth env vars are configured.
- The GitHub button remains disabled when provider env vars are missing.
- Middleware gates `/app/:path*` and `/app` also checks the server session before rendering.

Required runtime secrets later:
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GITHUB_ID`
- `GITHUB_SECRET`

OAuth callback URLs:
- Local: `http://localhost:3000/api/auth/callback/github`
- Production: `https://loading.mskre.no/api/auth/callback/github`

k3s handling:
- Create a Kubernetes Secret such as `boilerplate-auth-env` manually or through sealed/external secrets.
- Mount it into `deployment/boilerplate` with `envFrom`.
- Do not commit provider credentials, session secrets, tokens, or kubeconfig files.

Production setup:
- Create the GitHub OAuth application.
- Store `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `GITHUB_ID`, and `GITHUB_SECRET` in a k3s Secret.
- Add k3s Secret references in `home-gitops` without storing secret values.
- Extend `src/middleware.ts` if more private route prefixes need protection.

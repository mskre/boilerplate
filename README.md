# mskre boilerplate

Next.js boilerplate with a compact landing page, GitHub OAuth login, and a
protected starter route.

This project uses Bun for package management and script execution. Next.js still
handles the app bundling pipeline internally, with Turbopack enabled for dev and
build scripts.

## Scripts

- `bun run dev` starts the local development server.
- `bun run build` creates a production build.
- `bun run check` runs type checking and a production build.
- `bun run typecheck` generates Next.js route types, then runs TypeScript without emitting files.

## Structure

- `src/app` contains App Router routes.
- `src/components` contains reusable UI pieces.
- `src/lib` contains shared auth, route, and user helpers.
- `docs/auth-plan.md` documents production auth handling.

## Authentication

The `/login` route uses NextAuth.js with GitHub OAuth. Copy `.env.example` to
`.env.local`, fill in the GitHub OAuth values, and use this callback URL locally:

`http://localhost:3000/api/auth/callback/github`

For production on `loading.mskre.no`, keep the same values in k3s Secrets instead
of committing them to this public repo.

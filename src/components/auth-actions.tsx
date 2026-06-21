"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { ROUTES } from "@/lib/routes";

type AuthActionsProps = {
  canSignIn: boolean;
  isSignedIn: boolean;
};

export function AuthActions({ canSignIn, isSignedIn }: AuthActionsProps) {
  if (isSignedIn) {
    return (
      <div className="auth-actions">
        <Link className="button" href={ROUTES.app}>
          open app
        </Link>
        <button
          className="button button--secondary"
          onClick={() => signOut({ callbackUrl: ROUTES.login })}
          type="button"
        >
          sign out
        </button>
      </div>
    );
  }

  return (
    <div className="auth-actions">
      <button
        className="button"
        disabled={!canSignIn}
        onClick={() => signIn("github", { callbackUrl: ROUTES.app })}
        type="button"
      >
        continue with GitHub
      </button>
    </div>
  );
}

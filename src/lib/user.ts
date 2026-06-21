import type { Session } from "next-auth";

export function getUserDisplayName(user: Session["user"]) {
  return user?.name ?? user?.email ?? "user";
}

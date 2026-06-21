import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authOptions, isAuthConfigured } from "@/lib/auth";

function authNotConfigured() {
  return NextResponse.json(
    { error: "Authentication is not configured." },
    { status: 503 },
  );
}

const handler = isAuthConfigured ? NextAuth(authOptions) : authNotConfigured;

export { handler as GET, handler as POST };

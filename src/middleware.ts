import { withAuth } from "next-auth/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { isAuthRuntimeConfigured } from "@/lib/auth-env";
import { ROUTES } from "@/lib/routes";

function redirectToLogin(request: NextRequest) {
  return NextResponse.redirect(new URL(ROUTES.login, request.url));
}

const requireAuth = withAuth({
  pages: {
    signIn: ROUTES.login,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export default isAuthRuntimeConfigured ? requireAuth : redirectToLogin;

export const config = {
  matcher: ["/app/:path*"],
};

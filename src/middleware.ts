import { withAuth } from "next-auth/middleware";
import { ROUTES } from "@/lib/routes";

export default withAuth({
  pages: {
    signIn: ROUTES.login,
  },
});

export const config = {
  matcher: ["/app/:path*"],
};

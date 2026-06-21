import Link from "next/link";
import { ROUTES } from "@/lib/routes";

type SiteNavAction = {
  href: string;
  label: string;
};

type SiteNavProps = {
  action?: SiteNavAction;
};

export function SiteNav({
  action = { href: ROUTES.login, label: "login" },
}: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link className="site-nav__brand" href={ROUTES.home} aria-label="mskre home">
        mskre
      </Link>
      <Link className="site-nav__link" href={action.href}>
        {action.label}
      </Link>
    </nav>
  );
}

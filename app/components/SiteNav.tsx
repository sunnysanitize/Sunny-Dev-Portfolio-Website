"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { gaegu } from "../fonts";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="-mx-3 flex w-auto items-center justify-between py-2"
      aria-label="Primary"
    >
      <Link
        href="/"
        className={`${gaegu.className} text-[26px] leading-none text-foreground transition-opacity hover:opacity-70 sm:text-[30px]`}
      >
        Sunny
      </Link>

      <div className="flex items-center gap-5 sm:gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`nav-link text-[15px] font-medium transition-colors sm:text-base ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

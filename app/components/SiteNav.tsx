"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function SiteNav({
  className,
}: Readonly<{
  className?: string;
}>) {
  const pathname = usePathname();

  return (
    <nav
      className={`${className ?? ""} flex items-center gap-2 border-2 border-[#0f0f0f] bg-[#f6eddc] px-2 py-2 [box-shadow:3px_3px_0_#0f0f0f] sm:border-4 sm:px-3 sm:py-3 sm:[box-shadow:4px_4px_0_#0f0f0f]`}
      aria-label="Primary"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative"
          >
            <motion.span
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97, y: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`relative flex items-center overflow-hidden border-2 border-transparent px-3 py-1.5 text-[13px] font-extrabold uppercase tracking-wide sm:px-4 sm:text-[15px] ${
                isActive ? "text-[#2f2519]" : "text-[#5a4f40] hover:text-[#2f2519]"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 border-2 border-[#0f0f0f] bg-[#efe3cd] [box-shadow:2px_2px_0_#0f0f0f]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
              {!isActive ? (
                <motion.span
                  className="pointer-events-none absolute inset-x-2 bottom-0 h-[2px] origin-left bg-[#2f2519]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              ) : null}
            </motion.span>
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={`${pathname}-bar`}
          className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,#d7b65a_0%,#fff3c9_45%,#8d6b1f_100%)] shadow-[0_0_16px_rgba(215,182,90,0.6)]"
          initial={{ scaleX: 0, opacity: 0.95 }}
          animate={{ scaleX: 1, opacity: [0.95, 1, 0] }}
          transition={{
            duration: 0.65,
            times: [0, 0.7, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <motion.div
          key={`${pathname}-wipe`}
          className="pointer-events-none fixed inset-0 z-20 bg-[linear-gradient(110deg,transparent_0%,rgba(255,248,223,0.06)_30%,rgba(255,241,182,0.18)_48%,rgba(255,248,223,0.06)_66%,transparent_100%)]"
          initial={{ x: "-115%", opacity: 0 }}
          animate={{ x: "115%", opacity: [0, 1, 0] }}
          transition={{
            duration: 0.6,
            times: [0, 0.45, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>

      <div className="relative mt-5 z-10">
        <div key={pathname} className="relative">
          {children}
        </div>
      </div>
    </>
  );
}

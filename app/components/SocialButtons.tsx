"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13L2 4" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.path
        d="M5 12l5 5L20 7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.svg>
  );
}

const socialLinkClass = "route-link inline-flex items-center gap-1.5 rounded-md text-[13px] font-semibold text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline";

export default function SocialButtons() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const linkedInUrl = "https://www.linkedin.com/in/sunny-zhang-413902297/";
  const emailAddress = "ssunny.zhang@mail.utoronto.ca";

  // Defer portal rendering until mounted on the client (document.body is unavailable during SSR).
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const openEmailModal = () => {
    setCopyStatus("idle");
    setIsEmailModalOpen(true);
  };

  useEffect(() => {
    if (!isEmailModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsEmailModalOpen(false);
    };

    const trigger = triggerRef.current;
    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isEmailModalOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href="https://github.com/sunnysanitize"
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkClass}
        >
          <GithubIcon className="h-4 w-4 shrink-0" />
          GitHub
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkClass}
        >
          <LinkedInIcon className="h-4 w-4 shrink-0" />
          LinkedIn
        </a>
        <button
          ref={triggerRef}
          type="button"
          onClick={openEmailModal}
          className={socialLinkClass}
        >
          <EmailIcon className="h-4 w-4 shrink-0" />
          Email Me
        </button>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {isEmailModalOpen ? (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-foreground/15"
              onClick={() => setIsEmailModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="email-modal-title"
              tabIndex={-1}
              className="shadow-soft relative w-full max-w-md rounded-2xl border border-line bg-popover p-5 outline-none"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <p id="email-modal-title" className="text-[20px] font-bold text-foreground sm:text-[22px]">Email Me</p>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Click the address to copy it, or draft an email directly.
              </p>
              <motion.button
                type="button"
                onClick={handleCopyEmail}
                whileTap={{ scale: 0.98 }}
                className="btn-soft mt-3 flex w-full items-center justify-between gap-2 rounded-lg border border-line bg-card px-3 py-2 text-left text-[13px] font-medium leading-snug text-foreground [overflow-wrap:anywhere] hover:bg-secondary sm:text-[14px]"
                aria-label="Copy email address"
              >
                <span className="[overflow-wrap:anywhere]">{emailAddress}</span>
                {copyStatus === "copied" ? (
                  <span className="flex shrink-0 items-center gap-1 text-[12px] font-semibold text-primary">
                    <CheckIcon className="h-3.5 w-3.5" />
                    Copied!
                  </span>
                ) : null}
              </motion.button>
              <div className="mt-4 flex gap-2">
                <motion.a
                  href={`mailto:${emailAddress}`}
                  className="btn-soft flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-[13px] font-semibold text-primary-foreground shadow-soft-sm hover:brightness-105"
                  whileTap={{ scale: 0.95 }}
                >
                  <EmailIcon className="h-4 w-4" />
                  Draft Email
                </motion.a>
                <motion.button
                  type="button"
                  onClick={() => setIsEmailModalOpen(false)}
                  className="btn-soft flex-1 rounded-lg border border-line bg-card px-3 py-2 text-[13px] font-semibold text-foreground shadow-soft-sm hover:bg-secondary"
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
              {copyStatus === "error" ? (
                <motion.p
                  className="mt-3 text-[12px] text-[#b3261e]"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Could not copy automatically. Select and copy manually.
                </motion.p>
              ) : null}
            </motion.div>
          </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Nunito } from "next/font/google";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const readableFont = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
});

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

const socialBtnClass = "btn-retro flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-[#f6eddc] p-0 text-[13px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] dark:border-[#101428] dark:bg-[#2c3455] dark:text-[#d0d4e0] dark:[box-shadow:3px_3px_0_#101428] sm:border-4 sm:[box-shadow:4px_4px_0_#0f0f0f] dark:sm:[box-shadow:4px_4px_0_#101428] lg:h-auto lg:w-full lg:justify-start lg:rounded-none lg:px-4 lg:py-2.5 lg:text-[12px]";

export default function SocialButtons() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const linkedInUrl = "https://www.linkedin.com/in/sunny-zhang-413902297/";
  const emailAddress = "ssunny.zhang@mail.utoronto.ca";

  const openEmailModal = () => {
    setCopyStatus("idle");
    setIsEmailModalOpen(true);
  };

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
      <div className={`${readableFont.className} fixed bottom-4 left-1/2 z-30 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 flex-row justify-center gap-2 font-bold sm:bottom-6 sm:w-[calc(100%-2rem)] lg:bottom-6 lg:left-auto lg:right-6 lg:w-56 lg:max-w-none lg:-translate-x-0 lg:translate-y-0 lg:flex-col lg:gap-3 xl:right-[max(1rem,calc((100vw-108rem)/4))]`}>
        <a
          href="https://github.com/sunnysanitize"
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBtnClass} hover:bg-[#dfd2af] dark:hover:bg-[#354060]`}
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <GithubIcon className="h-5 w-5 shrink-0" />
            <span className="hidden lg:inline">GitHub</span>
          </span>
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBtnClass} hover:bg-[#d6caab] dark:hover:bg-[#354060]`}
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <LinkedInIcon className="h-5 w-5 shrink-0" />
            <span className="hidden lg:inline">LinkedIn</span>
          </span>
        </a>
        <button
          type="button"
          onClick={openEmailModal}
          className={`${socialBtnClass} hover:bg-[#cfc3a4] dark:hover:bg-[#354060]`}
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <EmailIcon className="h-5 w-5 shrink-0" />
            <span className="hidden lg:inline">Email</span>
          </span>
        </button>
        <ThemeToggle
          className={`${socialBtnClass} hover:bg-[#cfc3a4] dark:hover:bg-[#354060]`}
        />
      </div>

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
              className="absolute inset-0 bg-black/40 dark:bg-black/60"
              onClick={() => setIsEmailModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={`${readableFont.className} relative w-full max-w-md border-4 border-[#0f0f0f] bg-[#fff8e8] p-5 font-bold [box-shadow:8px_8px_0_#0f0f0f] dark:border-[#101428] dark:bg-[#202845] dark:[box-shadow:8px_8px_0_#101428]`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <p className="text-[20px] font-extrabold uppercase text-[#2f2519] dark:text-[#d0d4e0] sm:text-[22px]">Copy Email</p>
              <p className="mt-2 text-[13px] text-[#4a3e2f] dark:text-[#8088a8]">
                This is my email:
              </p>
              <div className="mt-3 border-2 border-[#0f0f0f] bg-white px-3 py-2 text-[12px] font-bold leading-snug text-[#2a241c] [overflow-wrap:anywhere] dark:border-[#101428] dark:bg-[#1e2440] dark:text-[#d0d4e0] sm:text-[14px]">
                {emailAddress}
              </div>
              <div className="mt-4 flex gap-2">
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-retro flex flex-1 items-center justify-center gap-2 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-2 text-[12px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] hover:bg-[#ece0bf] dark:border-[#101428] dark:bg-[#2c3455] dark:text-[#d0d4e0] dark:[box-shadow:3px_3px_0_#101428] dark:hover:bg-[#354060]"
                  whileTap={{ scale: 0.95 }}
                >
                  {copyStatus === "copied" ? (
                    <>
                      <CheckIcon className="h-4 w-4 text-[#2f6c2f] dark:text-[#5aab5a]" />
                      Copied!
                    </>
                  ) : (
                    "Copy"
                  )}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setIsEmailModalOpen(false)}
                  className="btn-retro flex-1 border-2 border-[#0f0f0f] bg-[#f3e6c8] px-3 py-2 text-[12px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] hover:bg-[#e6d8b8] dark:border-[#101428] dark:bg-[#2c3455] dark:text-[#d0d4e0] dark:[box-shadow:3px_3px_0_#101428] dark:hover:bg-[#354060]"
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
              {copyStatus === "error" ? (
                <motion.p
                  className="mt-3 text-[12px] text-[#8a2b2b] dark:text-[#e06060]"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Could not copy automatically. Select and copy manually.
                </motion.p>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

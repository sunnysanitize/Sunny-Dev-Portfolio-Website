"use client";

import { motion, type Variants } from "framer-motion";
import { Nunito, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/projects";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const readableFont = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
});

const retroEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: retroEase },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: retroEase },
  },
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DevpostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export default function Home() {
  const bio =
    "Hello, I'm Sunny, first-year student at the University of Toronto. This is my portfolio website.";

  const activities = [
    {
      title: "Studying at University of Toronto",
      detail: "GPA 4.0/4.0",
      icon: <GraduationCapIcon className="h-5 w-5 text-[#3a3126]" />,
    },
    {
      title: "Building full-stack products",
      detail: "Next.js, HTML, Python, and C++ backends",
      icon: <CodeIcon className="h-5 w-5 text-[#3a3126]" />,
    },
  ];

  const featuredProjects = projects.slice(0, 2);

  return (
    <motion.div
      className={`${pixelFont.className} text-[#2a241c]`}
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <motion.header
        variants={sectionVariants}
        className="border-2 border-[#0f0f0f] bg-[#f6eddc] p-3 text-center [box-shadow:3px_3px_0_#0f0f0f] sm:border-4 sm:p-4 sm:[box-shadow:4px_4px_0_#0f0f0f]"
      >
        <p className={`${readableFont.className} text-[30px] font-extrabold uppercase leading-relaxed text-[#3a3126] sm:text-[42px]`}>
          Sunny Zhang
        </p>
        <div className={`${readableFont.className} mt-0.5 flex flex-col items-center justify-center text-[10px] uppercase text-[#4a3e2f] sm:text-[14px]`}>
          <span className="-mt-1.1 text-[11px] font-extrabold sm:text-[16px]">University of Toronto</span>
          <Image
            src="/UTLogo2.png"
            alt="University of Toronto logo"
            width={56}
            height={56}
            className="mt-2 h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </div>
      </motion.header>

      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} mt-5 border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
            Personal Bio
          </h2>
        </header>
        <p className="mt-3 text-[12px] leading-relaxed text-[#2f281f] sm:text-[14px]">
          {bio}
        </p>
      </motion.article>

      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} mt-4 border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
            Current Activities
          </h2>
        </header>
        <motion.div
          className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
          variants={listVariants}
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={itemVariants}
              className="flex items-start gap-3 border-2 border-[#0f0f0f] bg-[#fff9eb] p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#0f0f0f] bg-[#fff2cc]">
                {activity.icon}
              </div>
              <div className="pt-0.5">
                <p className="text-[13px] text-[#3a3126] sm:text-[15px]">
                  {activity.title}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#5a4f40] sm:text-[12px]">
                  {activity.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>

      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} mt-4 border-4 border-[#0f0f0f] bg-[#f7efdf] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
            Featured Projects
          </h2>
        </header>
        <motion.div
          className="mt-3 space-y-4"
          variants={listVariants}
        >
          {featuredProjects.map((project, index) => {
            const hasSourceLink = project.sourceUrl.trim().length > 0;
            const hasProjectLink = project.projectUrl.trim().length > 0;

            return (
              <motion.div
                key={`${project.name}-${index}`}
                variants={itemVariants}
                className="group border-3 border-[#0f0f0f] bg-[#fff9eb] p-3 [box-shadow:4px_4px_0_#0f0f0f] transition hover:-translate-y-1 hover:[box-shadow:6px_8px_0_#0f0f0f] sm:p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <div className="relative h-44 w-full shrink-0 overflow-hidden border-3 border-[#0f0f0f] bg-white sm:h-auto sm:w-72">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="mb-1.5 inline-block self-start border-2 border-[#0f0f0f] bg-[#efe3cd] px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#2f2519] sm:text-[10px]">
                      Featured #{index + 1}
                    </span>
                    <p className="text-[16px] leading-snug text-[#3a3126] sm:text-[20px]">
                      {project.name}
                    </p>
                    <p className="mt-2 text-[12px] font-semibold leading-relaxed text-[#4a3e2f] sm:text-[13px]">
                      {project.shortDescription}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {hasProjectLink ? (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro inline-flex items-center gap-1.5 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] sm:text-[11px]"
                        >
                          <GlobeIcon className="h-3 w-3" />
                          Website
                        </a>
                      ) : null}
                      {hasSourceLink ? (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro inline-flex items-center gap-1.5 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] sm:text-[11px]"
                        >
                          <GithubIcon className="h-3 w-3" />
                          Source
                        </a>
                      ) : null}
                      {"devpostUrl" in project && project.devpostUrl ? (
                        <a
                          href={project.devpostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro inline-flex items-center gap-1.5 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] sm:text-[11px]"
                        >
                          <DevpostIcon className="h-3 w-3" />
                          Devpost
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <Link
          href="/projects"
          className="btn-retro route-link mt-4 flex items-center justify-center border-3 border-[#0f0f0f] bg-[#efe3cd] px-4 py-3 text-[12px] font-extrabold uppercase tracking-wider text-[#2f2519] [box-shadow:4px_4px_0_#0f0f0f] hover:bg-[#e6d8b8] sm:text-[14px]"
        >
          View All Projects →
        </Link>
      </motion.article>
    </motion.div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import { Nunito, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import { projects } from "../data/projects";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const readableFont = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
});

const retroEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: retroEase },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: retroEase },
  },
};

function DevpostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
    </svg>
  );
}

export default function ProjectsPage() {
  const actionClass =
    "btn-retro inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] sm:text-[12px]";

  return (
    <motion.div
      className={`${pixelFont.className} text-[#2a241c]`}
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#f7efdf] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
            All Projects
          </h2>
        </header>
        <motion.div
          className="mt-4 space-y-6"
          variants={listVariants}
        >
          {projects.map((project, index) => {
            const hasProjectLink = project.projectUrl.trim().length > 0;
            const hasSourceLink = project.sourceUrl.trim().length > 0;
            const hasDevpostLink = (project.devpostUrl?.trim().length ?? 0) > 0;
            const showWebsiteButton = project.showWebsiteButton !== false;

            return (
              <motion.div
                key={`${project.name}-${index}`}
                variants={cardVariants}
                className="border-3 border-[#0f0f0f] bg-[#fff9eb] p-3 text-[13px] text-[#2f281f] [box-shadow:5px_5px_0_#0f0f0f] transition-[box-shadow] duration-150 hover:-translate-y-0.5 hover:[box-shadow:6px_7px_0_#0f0f0f] sm:p-4 sm:text-[15px]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-3 border-[#0f0f0f] bg-white sm:w-[20rem] md:w-[24rem]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-[20px] text-[#3a3126] sm:text-[24px]">
                      {project.name}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[12px] leading-relaxed sm:text-[14px]">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 border border-[#0f0f0f] bg-[#d4c9b0]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {showWebsiteButton ? (
                        hasProjectLink ? (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={actionClass}
                          >
                            <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                              <Image
                                src="/globe.svg"
                                alt="Website icon"
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 object-contain"
                              />
                            </span>
                            Website
                          </a>
                        ) : (
                          <span className="inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#f3ead5] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#6e614d] [box-shadow:2px_2px_0_#0f0f0f] sm:text-[12px]">
                            <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                              <Image
                                src="/globe.svg"
                                alt="Website icon"
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 object-contain opacity-60"
                              />
                            </span>
                            Website
                          </span>
                        )
                      ) : null}
                      {hasSourceLink ? (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={actionClass}
                        >
                          <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                            <Image
                              src="/GithubLogo.svg"
                              alt="GitHub icon"
                              width={14}
                              height={14}
                              className="h-3.5 w-3.5 object-contain"
                            />
                          </span>
                          Source
                        </a>
                      ) : (
                        <span className="inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#f3ead5] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#6e614d] [box-shadow:2px_2px_0_#0f0f0f] sm:text-[12px]">
                          <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                            <Image
                              src="/GithubLogo.svg"
                              alt="GitHub icon"
                              width={14}
                              height={14}
                              className="h-3.5 w-3.5 object-contain opacity-60"
                            />
                          </span>
                          Source
                        </span>
                      )}
                      {hasDevpostLink ? (
                        <a
                          href={project.devpostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={actionClass}
                        >
                          <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                            <DevpostIcon className="h-3.5 w-3.5" />
                          </span>
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
      </motion.article>
    </motion.div>
  );
}

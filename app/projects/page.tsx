"use client";

import { Nunito, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const readableFont = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
});

export default function ProjectsPage() {
  const actionClass =
    "btn-retro inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] sm:text-[12px]";

  return (
    <main
      className={`${pixelFont.className} relative min-h-screen overflow-x-hidden px-3 pb-20 pt-8 text-[#2a241c] sm:px-5 sm:pb-40 sm:pt-12`}
    >
      <section className="relative mx-auto w-full max-w-5xl border-2 border-[#0f0f0f] bg-[#fffaf0]/95 p-3 [box-shadow:4px_4px_0_#0f0f0f] sm:border-4 sm:p-7 sm:[box-shadow:8px_8px_0_#0f0f0f]">
        <nav
          className={`${readableFont.className} flex items-center gap-4 border-2 border-[#0f0f0f] bg-[#f6eddc] px-4 py-2.5 [box-shadow:3px_3px_0_#0f0f0f] sm:border-4 sm:py-3 sm:[box-shadow:4px_4px_0_#0f0f0f]`}
        >
          <Link
            href="/"
            className="nav-link text-[13px] font-extrabold uppercase tracking-wide text-[#5a4f40] transition hover:text-[#2f2519] sm:text-[15px]"
          >
            Home
          </Link>
          <span className="text-[#c4b697]">|</span>
          <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#2f2519] underline decoration-[#2f2519] decoration-2 underline-offset-4 sm:text-[15px]">
            Projects
          </span>
        </nav>

        <div className="mt-5">
          <article
            className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#f7efdf] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}
          >
            <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
              <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
                All Projects
              </h2>
            </header>
            <div className="mt-4 space-y-6">
              {projects.map((project, index) => {
                const hasProjectLink =
                  project.projectUrl.trim().length > 0;
                const hasSourceLink =
                  project.sourceUrl.trim().length > 0;
                const showWebsiteButton =
                  project.showWebsiteButton !== false;

                return (
                  <div
                    key={`${project.name}-${index}`}
                    className="border-3 border-[#0f0f0f] bg-[#fff9eb] p-3 text-[13px] text-[#2f281f] [box-shadow:5px_5px_0_#0f0f0f] transition hover:-translate-y-0.5 hover:[box-shadow:6px_7px_0_#0f0f0f] sm:p-4 sm:text-[15px]"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                      <div className="relative h-44 w-full shrink-0 overflow-hidden border-3 border-[#0f0f0f] bg-white sm:h-auto sm:w-80">
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
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

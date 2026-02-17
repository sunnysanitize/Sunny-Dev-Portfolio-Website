"use client";

import { Nunito, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const readableFont = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const linkedInUrl = "https://www.linkedin.com/in/sunny-zhang-413902297/";
  const emailAddress = "ssunny.zhang@mail.utoronto.ca";
  const socialIcons = {
    linkedIn: "/LinkedInLogo.png",
    github: "/GithubLogo.svg",
    instagram: "/InstagramLogo.png",
    discord: "/DiscordLogo.png",
    email: "/EmailLogo.png",
  };

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

  const bio =
    "Hello, I'm Sunny, first-year student at the University of Toronto. This is my portfolio website.";

  const activities = [
    {
      title: "Studying at University of Toronto",
      detail: "GPA 4.0/4.0",
      logo: "",
    },
    {
      title: "Building full-stack products",
      detail: "Next.js, HTML, Python, and C++ backends",
      logo: "",
    },
  ];

  const projects = [
    {
      name: "Discrete-Time Markov Chain for Market Regime Forecasting",
      description:
        "- A modular Python application that models daily equity return regimes\n" +
        "(down/flat/up) using a first-order Markov chain and forecasts\n" +
        "next-day state probabilities from historical price data.\n" +
        "- It takes and cleans CSV data, computes returns, discretizes regimes,\n" +
        "builds a row-normalized transition matrix, and outputs conditional\n" +
        "next-state probabilities based on the observed regime.\n" +
        "- Includes a CLI report tool, a Flask dashboard with threshold tuning and\n" +
        "Monte Carlo simulation, plus unit tests for transition/state logic.",
      projectUrl: "",
      showWebsiteButton: false,
      sourceUrl: "https://github.com/sunnysanitize/Markov-Chain-Model-for-Daily-Return-Regimes",
      image: "/MarkovForecast.png",
    },

    {
      name: "Heat Mapping $5,000+ Thefts Around UTSG",
      description:
        "- I got my stuff stolen at the Atheltic Centre at UofT and almost\n" +
        "lost most of my valuables, so I decided to make a project on theft around UTSG.\n" +
        "- A full-stack crime intelligence web app that maps Toronto Police\n" +
        "theft-over-$5,000 incidents around the UofT St. George campus.\n" +
        "- It runs a Python/FastAPI pipeline that filters records by campus\n" +
        "geospatial boundaries, normalizes data in SQLite, and serves a clean API.\n" +
        "- Includes a Next.js/TypeScript frontend with an interactive\n" +
        "OpenStreetMap heatmap, live summary metrics, and incident sample tables.",
      projectUrl: "https://theftdataproject.sunnyzhang.dev",
      sourceUrl: "https://github.com/sunnysanitize/uoft-theft-map-project",
      image: "/theftdatabase.png",
    },

    {
      name: "Stochastic Risk Modeling: Gambler’s Ruin Simulation",
      description:
        "- Built a Gambler's Ruin simulation platform in Python that combines\n" +
        "Monte Carlo experimentation with closed-form probability analysis.\n" +
        "- It validates stochastic outcomes against theory and is organized as a\n" +
        "reusable package (simulation, analytics, visualization, cli, and webapp).\n" +
        "- It supports up to 100k trials per run with both command-line and\n" +
        "interactive web workflows using Flask and Streamlit.\n" +
        "- I implemented convergence diagnostics, empirical-theoretical error\n" +
        "tracking, and an interactive Plotly dashboard for reproducible analysis.",
      projectUrl: "",
      showWebsiteButton: false,
      sourceUrl: "https://github.com/sunnysanitize/gamblers-ruin-simulatior",
      image: "/GamblersRuin.png",
    },
  ];

  return (
    <main className={`${pixelFont.className} relative min-h-screen overflow-x-hidden px-3 pb-20 pt-8 text-[#2a241c] sm:px-5 sm:pb-40 sm:pt-12`}>
      <div className="pointer-events-none absolute inset-0 bg-[#F0EAD6]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_9%_16%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_25%_20%,#ffffff_0_0.45%,transparent_0.8%),radial-gradient(circle_at_76%_12%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_88%_22%,#ffffff_0_0.45%,transparent_0.8%)]" />
      <div className="pointer-events-none absolute right-8 top-10 hidden h-16 w-16 border-4 border-[#0f0f0f] bg-[#ffe89a] [box-shadow:6px_6px_0_#0f0f0f] sm:block sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute left-4 top-28 hidden h-8 w-20 border-4 border-[#0f0f0f] bg-[#fff8e8] [box-shadow:4px_4px_0_#0f0f0f] sm:block" />
      <div className="pointer-events-none absolute left-6 top-48 hidden h-10 w-10 rounded-full border-4 border-[#0f0f0f] bg-[#fff4da] [box-shadow:4px_4px_0_#0f0f0f] sm:left-10 sm:block" />
      <div className="pointer-events-none absolute left-8 bottom-52 hidden h-14 w-14 border-4 border-[#0f0f0f] bg-[#f5ead3] [box-shadow:5px_5px_0_#0f0f0f] sm:left-16 sm:block" />
      <div className="pointer-events-none absolute left-4 bottom-32 hidden h-12 w-12 rounded-full border-4 border-[#0f0f0f] bg-[#fff8e8] [box-shadow:4px_4px_0_#0f0f0f] sm:left-12 sm:block" />
      <div className="pointer-events-none absolute right-6 top-44 hidden h-10 w-10 rounded-full border-4 border-[#0f0f0f] bg-[#fff4da] [box-shadow:4px_4px_0_#0f0f0f] sm:right-10 sm:block" />
      <div className="pointer-events-none absolute right-10 bottom-56 hidden h-12 w-12 border-4 border-[#0f0f0f] bg-[#f7ecd7] [box-shadow:4px_4px_0_#0f0f0f] sm:right-16 sm:block" />
      <div className="pointer-events-none absolute right-4 bottom-36 hidden h-14 w-14 rounded-full border-4 border-[#0f0f0f] bg-[#fff8e8] [box-shadow:5px_5px_0_#0f0f0f] sm:right-12 sm:block" />

      <section className="relative mx-auto w-full max-w-5xl border-2 border-[#0f0f0f] bg-[#fffaf0]/95 p-3 [box-shadow:4px_4px_0_#0f0f0f] sm:border-4 sm:p-7 sm:[box-shadow:8px_8px_0_#0f0f0f]">
        <header className="border-2 border-[#0f0f0f] bg-[#f6eddc] p-3 text-center [box-shadow:3px_3px_0_#0f0f0f] sm:border-4 sm:p-4 sm:[box-shadow:4px_4px_0_#0f0f0f]">
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
        </header>

        <div className="mt-5">
          <article className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}>
            <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
              <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
                Personal Bio
              </h2>
            </header>
            <p className="mt-3 text-[12px] leading-relaxed text-[#2f281f] sm:text-[14px]">
              {bio}
            </p>
          </article>
        </div>

        <div className="mt-4">
          <article className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}>
            <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
              <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
                Current Activities
              </h2>
            </header>
            <div className="mt-3 space-y-2 text-[11px] leading-relaxed text-[#2f281f] sm:text-[13px]">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex items-center gap-3 border-2 border-[#0f0f0f] bg-[#fff9eb] p-2"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden border-2 border-[#0f0f0f] bg-white">
                    {activity.logo ? (
                      <Image
                        src={activity.logo}
                        alt={`${activity.title} logo`}
                        width={28}
                        height={28}
                        className="block max-h-full max-w-full translate-y-px object-contain"
                      />
                    ) : null}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[13px] text-[#3a3126] sm:text-[15px]">
                      {activity.title}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-[#5a4f40] sm:text-[12px]">
                      {activity.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-4">
          <article className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#f7efdf] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}>
            <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
              <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] sm:text-[18px]">
                Personal Projects
              </h2>
            </header>
            <div className="mt-3 space-y-2">
              {projects.map((project, index) => {
                const hasProjectLink = project.projectUrl.trim().length > 0;
                const hasSourceLink = project.sourceUrl.trim().length > 0;
                const showWebsiteButton = project.showWebsiteButton !== false;
                const baseCardClass = "border-2 border-[#0f0f0f] bg-[#fff9eb] p-2 text-[13px] text-[#2f281f] transition hover:bg-[#f3ead7] sm:text-[15px]";
                const actionClass = "inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#fff2cc] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] transition hover:-translate-y-0.5 hover:bg-[#f4de9c] sm:text-[12px]";

                // Empty slot behavior:
                // - White image area if no `image` is provided.
                // - Keeps the same hover animation/format as filled cards.
                return (
                  <div key={`${project.name}-${index}`} className={baseCardClass}>
                    <div className="relative mb-2 h-44 w-full overflow-hidden border-2 border-[#0f0f0f] bg-white sm:h-52">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <p className="text-[20px] text-[#3a3126] sm:text-[24px]">{project.name}</p>
                    <p className="mt-1 whitespace-pre-line text-[13px] leading-relaxed sm:text-[15px]">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {showWebsiteButton
                        ? hasProjectLink ? (
                            <a
                              href={project.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={actionClass}
                            >
                              <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                                <Image src="/globe.svg" alt="Website icon" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
                              </span>
                              Website
                            </a>
                          ) : (
                            <span className="inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#f3ead5] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#6e614d] [box-shadow:2px_2px_0_#0f0f0f] sm:text-[12px]">
                              <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                                <Image src="/globe.svg" alt="Website icon" width={14} height={14} className="h-3.5 w-3.5 object-contain opacity-60" />
                              </span>
                              Website
                            </span>
                          )
                        : null}
                      {hasSourceLink ? (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={actionClass}
                        >
                          <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                            <Image src="/GithubLogo.svg" alt="GitHub icon" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
                          </span>
                          Source
                        </a>
                      ) : (
                        <span className="inline-flex min-w-[92px] items-center justify-center border-2 border-[#0f0f0f] bg-[#f3ead5] px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#6e614d] [box-shadow:2px_2px_0_#0f0f0f] sm:text-[12px]">
                          <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
                            <Image src="/GithubLogo.svg" alt="GitHub icon" width={14} height={14} className="h-3.5 w-3.5 object-contain opacity-60" />
                          </span>
                          Source
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-30 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 flex-row justify-center gap-2 sm:bottom-6 sm:w-[calc(100%-2rem)] lg:bottom-6 lg:left-auto lg:right-6 lg:w-56 lg:max-w-none lg:-translate-x-0 lg:translate-y-0 lg:flex-col lg:gap-3 xl:right-[max(1rem,calc((100vw-108rem)/4))]">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-[#fffdd0] p-0 text-[13px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#d6caab] sm:border-4 sm:[box-shadow:4px_4px_0_#0f0f0f] lg:h-auto lg:w-full lg:justify-start lg:rounded-none lg:px-4 lg:py-2.5 lg:text-[12px]"
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
              {socialIcons.linkedIn ? (
                <Image
                  src={socialIcons.linkedIn}
                  alt="LinkedIn icon"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              ) : null}
            </span>
            <span className="hidden lg:inline">LinkedIn</span>
          </span>
        </a>
        <a
          href="https://github.com/sunnysanitize"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-[#fffdd0] p-0 text-[13px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#dfd2af] sm:border-4 sm:[box-shadow:4px_4px_0_#0f0f0f] lg:h-auto lg:w-full lg:justify-start lg:rounded-none lg:px-4 lg:py-2.5 lg:text-[12px]"
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
              {socialIcons.github ? (
                <Image
                  src={socialIcons.github}
                  alt="GitHub icon"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              ) : null}
            </span>
            <span className="hidden lg:inline">GitHub</span>
          </span>
        </a>
        <a
          href="https://instagram.com/sunnysanitize"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-[#fffdd0] p-0 text-[13px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#efe4c3] sm:border-4 sm:[box-shadow:4px_4px_0_#0f0f0f] lg:h-auto lg:w-full lg:justify-start lg:rounded-none lg:px-4 lg:py-2.5 lg:text-[12px]"
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
              {socialIcons.instagram ? (
                <Image
                  src={socialIcons.instagram}
                  alt="Instagram icon"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              ) : null}
            </span>
            <span className="hidden lg:inline">Instagram</span>
          </span>
        </a>
        <a
          href="https://discord.com/users/ssuunny"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-[#fffdd0] p-0 text-[13px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#e8dcba] sm:border-4 sm:[box-shadow:4px_4px_0_#0f0f0f] lg:h-auto lg:w-full lg:justify-start lg:rounded-none lg:px-4 lg:py-2.5 lg:text-[12px]"
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
              {socialIcons.discord ? (
                <Image
                  src={socialIcons.discord}
                  alt="Discord icon"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              ) : null}
            </span>
            <span className="hidden lg:inline">Discord</span>
          </span>
        </a>
        <button
          type="button"
          onClick={openEmailModal}
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-[#fffdd0] p-0 text-[13px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#cfc3a4] sm:border-4 sm:[box-shadow:4px_4px_0_#0f0f0f] lg:h-auto lg:w-full lg:justify-start lg:rounded-none lg:px-4 lg:py-2.5 lg:text-[12px]"
        >
          <span className="flex w-full items-center justify-center gap-2 lg:justify-start">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
              {socialIcons.email ? (
                <Image
                  src={socialIcons.email}
                  alt="Email icon"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              ) : null}
            </span>
            <span className="hidden lg:inline">Email</span>
          </span>
        </button>
      </div>

      {isEmailModalOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md border-4 border-[#0f0f0f] bg-[#fff8e8] p-4 [box-shadow:8px_8px_0_#0f0f0f]">
            <p className={`${readableFont.className} text-[20px] font-extrabold uppercase text-[#2f2519] sm:text-[22px]`}>Copy Email</p>
            <p className={`${readableFont.className} mt-2 text-[13px] text-[#4a3e2f]`}>
              Copy and paste this address:
            </p>
            <div className="mt-3 border-2 border-[#0f0f0f] bg-white px-3 py-2 text-[11px] leading-snug text-[#2a241c] [overflow-wrap:anywhere] sm:text-[13px]">
              {emailAddress}
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 border-2 border-[#0f0f0f] bg-[#fffdd0] px-3 py-2 text-[12px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:bg-[#ece0bf]"
              >
                Copy
              </button>
              <button
                type="button"
                onClick={() => setIsEmailModalOpen(false)}
                className="flex-1 border-2 border-[#0f0f0f] bg-[#f3e6c8] px-3 py-2 text-[12px] uppercase text-black [box-shadow:3px_3px_0_#0f0f0f] transition hover:bg-[#e6d8b8]"
              >
                Close
              </button>
            </div>
            {copyStatus === "copied" ? (
              <p className={`${readableFont.className} mt-3 text-[12px] text-[#2f6c2f]`}>Email copied.</p>
            ) : null}
            {copyStatus === "error" ? (
              <p className={`${readableFont.className} mt-3 text-[12px] text-[#8a2b2b]`}>
                Could not copy automatically. Select and copy manually.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}

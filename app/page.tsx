import { Nunito, Press_Start_2P } from "next/font/google";
import Image from "next/image";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const readableFont = Nunito({
  weight: ["700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  const bio =
    "Hello, I'm Sunny, first-year student at the University of Toronto.";

  const activities = [
    {
      title: "Studying at University of Toronto",
      detail: "GPA 4.0/4.0",
      logo: "/UTLogo.png",
    },
    {
      title: "Building full-stack products",
      detail: "Next.js, HTML, Python, and C++ backends",
      logo: "/Fullstack.png",
    },
  ];

  const projects = [
    {
      name: "Markov Market Forcast",
      description: "Applying markov chains to forcast portential returns based on historical closings",
      url: "https://github.com/sunnysanitize/Markov-Chain-Model-for-Daily-Return-Regimes",
      image: "/MarkovForecast.png",
    },
    // Duplicate this object for more projects.
    // To publish a new project: paste the link in `url`, add your image path in `image`,
    // and replace the `blank` title/description text.
    {
      name: "Coming Soon",
      description: "Coming Soon",
      url: "",
      image: "",
    },
  ];

  return (
    <main className={`${pixelFont.className} relative min-h-[140vh] overflow-x-hidden px-5 pb-40 pt-12 text-[#2a241c]`}>
      <div className="pointer-events-none absolute inset-0 bg-[#F0EAD6]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_9%_16%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_25%_20%,#ffffff_0_0.45%,transparent_0.8%),radial-gradient(circle_at_76%_12%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_88%_22%,#ffffff_0_0.45%,transparent_0.8%)]" />
      <div className="pointer-events-none absolute right-8 top-10 h-16 w-16 border-4 border-[#0f0f0f] bg-[#ffe89a] [box-shadow:6px_6px_0_#0f0f0f] sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute left-4 top-28 h-8 w-20 border-4 border-[#0f0f0f] bg-[#fff8e8] [box-shadow:4px_4px_0_#0f0f0f]" />
      <div className="pointer-events-none absolute left-6 top-48 h-10 w-10 rounded-full border-4 border-[#0f0f0f] bg-[#fff4da] [box-shadow:4px_4px_0_#0f0f0f] sm:left-10" />
      <div className="pointer-events-none absolute left-8 bottom-52 h-14 w-14 border-4 border-[#0f0f0f] bg-[#f5ead3] [box-shadow:5px_5px_0_#0f0f0f] sm:left-16" />
      <div className="pointer-events-none absolute left-4 bottom-32 h-12 w-12 rounded-full border-4 border-[#0f0f0f] bg-[#fff8e8] [box-shadow:4px_4px_0_#0f0f0f] sm:left-12" />
      <div className="pointer-events-none absolute right-6 top-44 h-10 w-10 rounded-full border-4 border-[#0f0f0f] bg-[#fff4da] [box-shadow:4px_4px_0_#0f0f0f] sm:right-10" />
      <div className="pointer-events-none absolute right-10 bottom-56 h-12 w-12 border-4 border-[#0f0f0f] bg-[#f7ecd7] [box-shadow:4px_4px_0_#0f0f0f] sm:right-16" />
      <div className="pointer-events-none absolute right-4 bottom-36 h-14 w-14 rounded-full border-4 border-[#0f0f0f] bg-[#fff8e8] [box-shadow:5px_5px_0_#0f0f0f] sm:right-12" />

      <section className="relative mx-auto w-full max-w-5xl border-4 border-[#0f0f0f] bg-[#fffaf0]/95 p-5 [box-shadow:8px_8px_0_#0f0f0f] sm:p-7">
        <header className="border-4 border-[#0f0f0f] bg-[#f6eddc] p-4 text-center [box-shadow:4px_4px_0_#0f0f0f]">
          <p className="text-lg uppercase leading-relaxed text-[#3a3126] sm:text-2xl">
            Sunny Zhang
          </p>
          <div className="mt-2 flex flex-col items-center justify-center text-[10px] uppercase text-[#4a3e2f] sm:text-xs">
            <span>University of Toronto</span>
            <Image
              src="/UTLogo.png"
              alt="University of Toronto logo"
              width={56}
              height={56}
              className="mt-2 h-14 w-14 object-contain"
            />
          </div>
        </header>

        <div className="mt-5">
          <article className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}>
            <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
              <h2 className="text-[14px] uppercase tracking-wide text-[#2f2519] sm:text-[16px]">
                Personal Bio
              </h2>
            </header>
            <p className="mt-3 text-[11px] leading-relaxed text-[#2f281f] sm:text-[13px]">
              {bio}
            </p>
          </article>
        </div>

        <div className="mt-4">
          <article className={`${readableFont.className} border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f]`}>
            <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f]">
              <h2 className="text-[14px] uppercase tracking-wide text-[#2f2519] sm:text-[16px]">
                Current Activities
              </h2>
            </header>
            <div className="mt-3 space-y-2 text-[10px] leading-relaxed text-[#2f281f] sm:text-[12px]">
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
                    <p className="text-[12px] text-[#3a3126] sm:text-[13px]">
                      {activity.title}
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold text-[#5a4f40] sm:text-[11px]">
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
              <h2 className="text-[14px] uppercase tracking-wide text-[#2f2519] sm:text-[16px]">
                Personal Projects
              </h2>
            </header>
            <div className="mt-3 space-y-2">
              {projects.map((project, index) => {
                const hasLink = project.url.trim().length > 0;
                const baseCardClass = "block border-2 border-[#0f0f0f] bg-[#fff9eb] p-2 text-[12px] text-[#2f281f] transition hover:bg-[#f3ead7] sm:text-[14px]";

                if (hasLink) {
                  return (
                    <a
                      key={`${project.name}-${index}`}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseCardClass}
                    >
                      <div className="relative mb-2 h-44 w-full overflow-hidden border-2 border-[#0f0f0f] bg-[#0f0f0f] sm:h-52">
                        <Image
                          src={project.image}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[14px] text-[#3a3126] sm:text-[16px]">{project.name}</p>
                      <p className="mt-1 text-[12px] leading-relaxed sm:text-[14px]">{project.description}</p>
                    </a>
                  );
                }

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
                    <p className="text-[14px] text-[#3a3126] sm:text-[16px]">{project.name}</p>
                    <p className="mt-1 text-[12px] leading-relaxed sm:text-[14px]">{project.description}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <div className="fixed bottom-15 left-1/2 z-30 flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 flex-col gap-3 sm:flex-row">
        <a
          href="https://instagram.com/sunnysanitize"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-4 border-[#0f0f0f] bg-[#fffdd0] px-4 py-3 text-center text-[10px] uppercase text-black [box-shadow:4px_4px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#efe4c3]"
        >
          Instagram
        </a>
        <a
          href="https://discord.com/users/ssuunny"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-4 border-[#0f0f0f] bg-[#fffdd0] px-4 py-3 text-center text-[10px] uppercase text-black [box-shadow:4px_4px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#e8dcba]"
        >
          Discord
        </a>
        <a
          href="https://github.com/sunnysanitize"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-4 border-[#0f0f0f] bg-[#fffdd0] px-4 py-3 text-center text-[10px] uppercase text-black [box-shadow:4px_4px_0_#0f0f0f] transition hover:-translate-y-1 hover:bg-[#dfd2af]"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}

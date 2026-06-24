import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/projects";
import { jetbrainsMono, spaceGrotesk } from "./fonts";
import SocialButtons from "./components/SocialButtons";
import FeaturedProjectsCarousel from "./components/FeaturedProjectsCarousel";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
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

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    </svg>
  );
}

export default function Home() {
  const lastUpdated = "June 20, 2026";

  const experience = [
    {
      title: "Algoverse",
      detail: "ML Researcher",
      period: "June 2026 - Present",
      icon: (
        <Image
          src="/algoverse.webp"
          alt="Algoverse logo"
          width={28}
          height={28}
          className="h-6 w-6 object-contain"
        />
      ),
    },
  ];

  const featuredProjects = projects.slice(0, 2);

  type Activity = {
    title: string;
    detail?: string;
    period?: string;
    gpa?: string;
    icon: React.ReactNode;
  };

  const renderActivityList = (items: Activity[]) => (
    <div className="mt-3 flex flex-col gap-3">
      {items.map((activity) => (
        <div key={activity.title} className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            {activity.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-semibold text-foreground">
              {activity.title}
            </p>
            {activity.detail ? (
              <p className="mt-0.5 text-[13px] text-muted-foreground">
                {activity.detail}
              </p>
            ) : null}
          </div>
          {activity.period || activity.gpa ? (
            <div className={`${jetbrainsMono.className} flex shrink-0 flex-col items-end gap-0.5 self-start text-right`}>
              {activity.period ? (
                <span className="text-[11px] text-muted-foreground sm:text-[12px]">
                  {activity.period}
                </span>
              ) : null}
              {activity.gpa ? (
                <span className="text-[11px] text-muted-foreground sm:text-[12px]">
                  {activity.gpa}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );

  const sectionHeading = (text: string) => (
    <h2 className="text-[19px] font-bold text-foreground sm:text-[21px]">{text}</h2>
  );

  const sectionClass = "mt-12";

  const projectLinkClass =
    "route-link text-muted-foreground transition-colors hover:text-foreground";

  const featuredCards = featuredProjects.map((project, index) => {
    const hasSourceLink = project.sourceUrl.trim().length > 0;
    const hasProjectLink = project.projectUrl.trim().length > 0;
    const featuredDescription =
      project.featuredDescription ?? project.shortDescription;

    return (
      <div
        key={`${project.name}-${index}`}
        className="group flex h-full flex-col sm:px-6 sm:first:pl-0"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-line bg-background">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : null}
        </div>
        <div className="mt-3 flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[17px] font-bold leading-snug text-foreground sm:text-[19px]">
              {project.name}
            </p>
            <div className="flex shrink-0 items-center gap-3">
              {hasProjectLink ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} website`}
                  className={projectLinkClass}
                >
                  <ExternalLinkIcon className="h-[18px] w-[18px]" />
                </a>
              ) : null}
              {hasSourceLink ? (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code`}
                  className={projectLinkClass}
                >
                  <GithubIcon className="h-[18px] w-[18px]" />
                </a>
              ) : null}
              {"devpostUrl" in project && project.devpostUrl ? (
                <a
                  href={project.devpostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} Devpost`}
                  className={projectLinkClass}
                >
                  <DevpostIcon className="h-[18px] w-[18px]" />
                </a>
              ) : null}
            </div>
          </div>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
            {featuredDescription}
          </p>
          <Link
            href="/projects"
            className="route-link mt-2.5 inline-flex items-center gap-1 self-start text-[12px] font-semibold text-primary underline-offset-2 transition-colors hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="page-fade">
      <header className="pt-6">
        <h1 className={`${spaceGrotesk.className} text-[48px] font-bold leading-tight tracking-tight text-foreground sm:text-[68px]`}>
          I&apos;m Sunny<span className="text-primary"></span>
        </h1>
        <p className="mt-3 text-[17px] font-medium leading-relaxed text-foreground/85 sm:text-[20px]">
          Computer Science and Mathematics @
          <Image
            src="/uoftlogo.png"
            alt="University of Toronto logo"
            width={64}
            height={64}
            className="mx-1 inline h-[1.15em] w-auto align-[-0.2em] object-contain"
          />
          UofT St George.
        </p>
      </header>

      <section className={sectionClass}>
        {sectionHeading("Experience")}
        <div className="mt-5">{renderActivityList(experience)}</div>
      </section>

      <section className="mt-12">
        {sectionHeading("Featured Projects")}

        <div className="mt-8 sm:hidden">
          <FeaturedProjectsCarousel>{featuredCards}</FeaturedProjectsCarousel>
        </div>

        <div className="mt-8 hidden flex-col sm:flex lg:flex-row lg:items-stretch">
          <div className="lg:w-[70%]">
            <div className="grid grid-cols-1 gap-6 auto-rows-fr sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-line/70">
              {featuredCards}
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:border-l lg:border-line/70 lg:pl-6">
            <Link
              href="/projects"
              className="route-link inline-flex items-center gap-1 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground lg:pl-4"
            >
              View more →
            </Link>
          </div>
        </div>

        <Link
          href="/projects"
          className="route-link mt-6 inline-flex items-center gap-1 self-start text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          View more →
        </Link>
      </section>

      <section className="mt-12 border-t border-line/70 pt-6">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
          Connect
        </h3>
        <div className="mt-3">
          <SocialButtons />
        </div>
        <p className={`${jetbrainsMono.className} mt-6 text-[12px] text-muted-foreground sm:text-[13px]`}>
          Last updated {lastUpdated}
        </p>
      </section>
    </div>
  );
}

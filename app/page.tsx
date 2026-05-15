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

function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.846.206-1.454.79-1.803 3.648-.968 6.833-3.207.88-5.296 2.322-5.296 3.63 0 1.32 2.117 2.78 5.36 3.66-.832 3.14-.465 5.958.978 6.744.248.136.53.2.84.2 1.359 0 3.126-.966 4.907-2.624 1.78 1.65 3.54 2.595 4.887 2.595.31 0 .594-.064.846-.2 1.454-.79 1.803-3.648.968-6.833 3.207-.88 5.296-2.322 5.296-3.63 0-1.32-2.117-2.78-5.36-3.66.832-3.14.465-5.958-.978-6.744a1.635 1.635 0 00-.844-.206zM9.367 3.086c1.186 0 2.63.82 4.11 2.264a15.312 15.312 0 00-1.573 1.762 17.194 17.194 0 00-2.352.261c-.55-2.06-.52-3.696.12-4.043a.556.556 0 01.271-.058l.009-.002.012-.002.003.002.007.002.005.002.002.002.003.002.003.002.003.002.004.002.003.002.003.002.003.002.003.002.003.002zm-2.02 7.422a15.153 15.153 0 00-.694 1.497c-.242-.535-.462-1.075-.66-1.614.535-.125 1.098-.23 1.682-.314a20.47 20.47 0 00-.328.431zm-1.83 4.4a20.2 20.2 0 001.56.297c.184.3.377.594.58.882-.198.266-.39.538-.58.816a16.37 16.37 0 01-1.56.297c-.398-.6-.748-1.224-1.04-1.862a14.9 14.9 0 011.04-1.43zm3.153 4.297c.05.204.108.406.172.604a15.29 15.29 0 01-1.605-.268 16.56 16.56 0 001.433-.336zm2.848-6.201a17.66 17.66 0 011.153 1.862 17.635 17.635 0 01-1.153 1.862c-.78.06-1.584.06-2.364 0a17.683 17.683 0 01-1.153-1.862 17.635 17.635 0 011.153-1.862 17.683 17.683 0 012.364 0zm2.42-.607c.258.556.486 1.122.694 1.697-.694.164-1.418.28-2.154.34.228-.33.452-.671.664-1.02.214-.35.416-.707.604-1.064l.192.048zm-5.09 0l.192-.048c.188.357.39.714.604 1.064.212.349.436.69.664 1.02a17.194 17.194 0 01-2.154-.34 15.16 15.16 0 01.694-1.696zm7.322 1.697a11.97 11.97 0 01-.994.34c-.237-.777-.53-1.576-.878-2.387a15.32 15.32 0 01.878-2.388c.353.114.68.235.994.34.786.264 1.438.572 1.932.874.474.29.68.536.68.654 0 .118-.206.364-.68.654a8.64 8.64 0 01-1.932.913zm-1.398-6.808c.55 2.06.52 3.696-.12 4.043-.103.058-.219.087-.356.087h-.012c-1.186 0-2.63-.82-4.11-2.264a15.355 15.355 0 001.573-1.762c.79-.086 1.58-.214 2.352-.26.26.044.475.095.673.156zM12 8.1a14.725 14.725 0 00-1.518 1.91A14.725 14.725 0 0012 8.1zm0 7.8a14.725 14.725 0 001.518-1.91A14.725 14.725 0 0012 15.9zM6.805 6.935c.353-.114.68-.235.994-.34a15.37 15.37 0 01-.878 2.388c.348.81.641 1.61.878 2.387-.314.105-.641.226-.994.34-.786.264-1.438.572-1.932.874-.474.29-.68.536-.68.654 0-.118.206-.364.68-.654a8.64 8.64 0 011.932-.913zm7.829 10.284c-1.186 0-2.63-.82-4.11-2.264a15.355 15.355 0 001.573-1.762c.79.086 1.58.214 2.352.26.55 2.06.52 3.696-.12 4.043a.556.556 0 01-.271.058l-.009.002-.012.002-.003-.002-.007-.002-.005-.002-.002-.002-.003-.002-.003-.002-.003-.002-.004-.002-.003-.002-.003-.002-.003-.002-.003-.002-.003-.002z" />
    </svg>
  );
}

function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  );
}

function PythonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-.16l-.06-.01h-8.16v.83h5.18l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  );
}

function CppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </svg>
  );
}

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function FramerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

function PostgresIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.826 2.865.363 4.471.55 6.6c.052.6.206 1.263.421 1.974.215.71.498 1.47.833 2.2.336.73.733 1.426 1.185 2.015.452.589.98 1.087 1.572 1.313.593.226 1.298.087 1.717-.363.41-.44.554-1.003.562-1.574a8.39 8.39 0 01-.007-.18c-.005-.095.003-.18.003-.28l.01-.14a5.54 5.54 0 01.025-.28c.062-.458.14-.717.14-.717s-.03.218-.01.679c.013.333.064.768.196 1.165.065.2.148.39.261.557.112.167.266.331.5.422.362.14.68-.014.917-.217.237-.203.424-.476.567-.773.286-.594.449-1.297.554-1.882.044-.244.073-.471.098-.657a6.387 6.387 0 01.035-.234c.122.072.262.131.415.164l.05.012c-.039.36-.064.92.067 1.537.097.46.28.948.625 1.313.175.185.396.325.658.376a.898.898 0 00.665-.12c.498-.301.74-.788.913-1.256a7.418 7.418 0 00.36-1.506c.078-.57.103-1.074.103-1.074s.048.383.08.89c.016.25.025.527.011.81a4.733 4.733 0 01-.093.82c-.085.326-.166.514-.325.71-.05.061-.098.118-.12.186-.023.068-.012.175.055.236.064.058.16.08.24.073.233-.018.511-.173.716-.39.205-.218.351-.49.462-.778.222-.575.321-1.2.37-1.73.048-.53.05-.974.05-.974l.076.073c-.007.442-.006.992.087 1.562.055.335.15.682.324.99.088.155.2.3.348.404.148.104.341.163.539.12.396-.083.647-.39.818-.73.172-.34.275-.724.347-1.106.145-.764.14-1.513.14-1.513s1.273 1.636 1.273 3.926c.003.26-.024.478-.04.72l-.008.135c-.015.188-.033.385-.017.576.008.094.025.195.076.293a.499.499 0 00.254.229c.164.074.353.067.518.01.166-.057.309-.158.435-.277.505-.478.8-1.267.877-2.063a8.59 8.59 0 00-.011-1.51c-.032-.391-.071-.695-.071-.695s.168.268.396.733c.118.24.247.534.357.88.11.345.2.743.229 1.177.04.558-.025 1.04-.155 1.447-.13.407-.323.735-.517 1.024-.388.578-.765 1.007-.914 1.593a.984.984 0 00.145.833c.133.187.335.307.557.367.444.12.97.024 1.453-.172.965-.393 1.774-1.138 2.278-1.885.504-.748.715-1.477.736-1.805a1.14 1.14 0 00-.005-.169 10.442 10.442 0 002.139-6.173c.017-.43.003-.856-.032-1.277.052-.575.082-1.166.054-1.759-.066-1.395-.39-2.815-1.355-3.812-.964-.996-2.296-1.402-3.676-1.48a10.134 10.134 0 00-.753-.023z" />
    </svg>
  );
}

function DockerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m10.893 2.715h2.118a.186.186 0 00.186-.185v-1.888a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
    </svg>
  );
}

function GitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-2.015l-2.48-2.48v6.529a1.838 1.838 0 01.5 3.196 1.838 1.838 0 01-2.552-1.698 1.838 1.838 0 011.053-1.665V9.814a1.838 1.838 0 01-.997-2.41l-2.72-2.72L.454 10.88a1.55 1.55 0 000 2.189l10.48 10.477a1.55 1.55 0 002.186 0l10.426-10.428a1.55 1.55 0 000-2.188" />
    </svg>
  );
}

function AwsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.374 6.18 6.18 0 01-.248-.47c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103a6.395 6.395 0 00-.862.272 2.293 2.293 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.628 4.628 0 011.015-.36 4.77 4.77 0 011.22-.152c.94 0 1.627.214 2.067.642.432.428.656 1.078.656 1.948v2.565zm-3.24 1.214c.263 0 .535-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.335c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.216l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.807-.414l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.694 0 .223.08.415.24.567.16.152.454.304.87.438l1.133.36c.574.183.99.438 1.237.766.248.328.367.703.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.216.183-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
    </svg>
  );
}

function NumpyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10.315 4.876L7.983 3.632 5.65 4.876v2.489l2.333 1.244 2.332-1.244zm1.347.78v2.489l2.333 1.244 2.332-1.244V5.656l-2.332-1.244zm-5.013 4.063L4.316 8.475 1.984 9.72v2.488l2.332 1.244 2.333-1.244zm5.013 0l-2.333-1.244-2.332 1.244v2.488l2.332 1.244 2.333-1.244zm3.666-1.244l-2.333 1.244v2.488l2.333 1.244 2.332-1.244V8.475zm5.013 1.244l-2.333-1.244-2.332 1.244v2.488l2.332 1.244 2.333-1.244zm-11.36 3.307l-2.332-1.244-2.333 1.244v2.489l2.333 1.244 2.332-1.244zm5.013 0l-2.333-1.244-2.332 1.244v2.489l2.332 1.244 2.333-1.244zm3.666-1.244l-2.333 1.244v2.489l2.333 1.244 2.332-1.244v-2.489zm-5.013 4.307l-2.333-1.244-2.332 1.244v2.489l2.332 1.244 2.333-1.244z" />
    </svg>
  );
}

function PandasIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.922 0h2.166v5.063h-2.166zm0 7.273h2.166v5.063h-2.166zM4.912 3.891h2.166v5.062H4.912zm0 7.272h2.166v5.063H4.912zm0 7.273h2.166v5.063H4.912zM16.922 16.664h2.166v5.063h-2.166zM10.917 5.297h2.166v13.406h-2.166z" />
    </svg>
  );
}

function ScikitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.096 4.23h2.192v2.193h-2.192zm-3.288 3.288h2.192v2.192H7.616zm6.576 0h2.192v2.192h-2.192zM4.327 10.807h2.192V13H4.327zm6.577 0h2.192V13h-2.192zm6.577 0h2.192V13h-2.192zM7.616 14.096h2.192v2.192H7.616zm6.576 0h2.192v2.192h-2.192zm-3.288 3.289h2.192v2.192h-2.192z" />
    </svg>
  );
}

function TensorFlowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-3.076 1.78zm21.416 0L12.46 0v24l4.095-2.378V14.14l3.076 1.78v-4.744l-3.076-1.78V7.603l3.076 1.78z" />
    </svg>
  );
}

function NodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.15-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.28.28 0 00-.137-.242L12.137 1.6a.27.27 0 00-.27 0L3.078 6.68a.281.281 0 00-.138.243v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 01-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.076.242a1.932 1.932 0 011.848 0l8.794 5.076c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 01-.924 1.604l-8.794 5.078a1.836 1.836 0 01-.926.247z" />
    </svg>
  );
}

export default function Home() {
  const bioLine1 =
    "I'm Sunny, based in Toronto. I build projects at the intersection of mathematics, AI, and software systems\u2014usually because an idea refuses to leave my head.";
  const bioLine2 =
    "Always happy to collaborate, my LinkedIn DMs and email are open.";

  const activities = [
    {
      title: "Studying at University of Toronto",
      detail: "GPA 4.0/4.0",
      icon: <GraduationCapIcon className="h-5 w-5 text-[#3a3126] dark:text-[#a2aac8]" />,
    },
    {
      title: "Building full-stack products",
      detail: "Next.js, Python, and C++",
      icon: <CodeIcon className="h-5 w-5 text-[#3a3126] dark:text-[#a2aac8]" />,
    },
  ];

  const featuredProjects = projects.slice(0, 2);

  return (
    <motion.div
      className={`${pixelFont.className} text-[#2a241c] dark:text-[#dee2ec]`}
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <motion.header
        variants={sectionVariants}
        className="border-2 border-[#0f0f0f] bg-[#f6eddc] p-3 text-center [box-shadow:3px_3px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#3a4870] dark:[box-shadow:3px_3px_0_#1a2240] sm:border-4 sm:p-4 sm:[box-shadow:4px_4px_0_#0f0f0f] dark:sm:[box-shadow:4px_4px_0_#1a2240]"
      >
        <p className={`${readableFont.className} text-[30px] font-extrabold uppercase leading-relaxed text-[#3a3126] dark:text-[#eceef8] sm:text-[42px]`}>
          Sunny Zhang
        </p>
        <div className={`${readableFont.className} mt-0.5 flex flex-col items-center justify-center text-[10px] uppercase text-[#4a3e2f] dark:text-[#929ab8] sm:text-[14px]`}>
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
        className={`${readableFont.className} mt-5 border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#2e3c60] dark:[box-shadow:4px_4px_0_#1a2240]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#445278] dark:[box-shadow:3px_3px_0_#1a2240]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] dark:text-[#dee2ec] sm:text-[18px]">
            Personal Bio
          </h2>
        </header>
        <p className="mx-4 mt-4 text-[12px] leading-relaxed text-[#2f281f] dark:text-[#acb2c8] sm:text-[14px]">
          {bioLine1}
        </p>
        <p className="mx-4 mt-3 text-[12px] leading-relaxed text-[#2f281f] dark:text-[#acb2c8] sm:text-[14px]">
          {bioLine2}
        </p>
      </motion.article>

      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} mt-4 border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#2e3c60] dark:[box-shadow:4px_4px_0_#1a2240]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#445278] dark:[box-shadow:3px_3px_0_#1a2240]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] dark:text-[#dee2ec] sm:text-[18px]">
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
              className="flex items-start gap-3 border-2 border-[#0f0f0f] bg-[#fff9eb] p-3 dark:border-[#1a2240] dark:bg-[#324268]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#0f0f0f] bg-[#fff2cc] dark:border-[#1a2240] dark:bg-[#3e4e7a]">
                {activity.icon}
              </div>
              <div className="pt-0.5">
                <p className="text-[13px] text-[#3a3126] dark:text-[#dee2ec] sm:text-[15px]">
                  {activity.title}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#5a4f40] dark:text-[#929ab8] sm:text-[12px]">
                  {activity.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>

      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} mt-4 border-4 border-[#0f0f0f] bg-[#f7efdf] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#2e3c60] dark:[box-shadow:4px_4px_0_#1a2240]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#445278] dark:[box-shadow:3px_3px_0_#1a2240]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] dark:text-[#dee2ec] sm:text-[18px]">
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
            const featuredDescription =
              project.name === "LaunchPilot"
                ? "A two-time winning project at Hack Canada 2026, web application that orchestrates multi-agent product research, positioning, execution planning, and outreach in one supervised launch workflow."
                : project.shortDescription;

            return (
              <motion.div
                key={`${project.name}-${index}`}
                variants={itemVariants}
                className="group border-3 border-[#0f0f0f] bg-[#fff9eb] p-3 [box-shadow:4px_4px_0_#0f0f0f] transition-[box-shadow] duration-150 hover:-translate-y-1 hover:[box-shadow:6px_8px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#324268] dark:[box-shadow:4px_4px_0_#1a2240] dark:hover:[box-shadow:6px_8px_0_#1a2240] sm:p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <div className="relative h-44 w-full shrink-0 overflow-hidden border-3 border-[#0f0f0f] bg-white dark:border-[#1a2240] dark:bg-[#2e3c60] sm:h-auto sm:w-72">
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
                    <span className="mb-1.5 inline-block self-start border-2 border-[#0f0f0f] bg-[#efe3cd] px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#2f2519] dark:border-[#1a2240] dark:bg-[#445278] dark:text-[#dee2ec] sm:text-[10px]">
                      Featured #{index + 1}
                    </span>
                    <p className="text-[16px] leading-snug text-[#3a3126] dark:text-[#eceef8] sm:text-[20px]">
                      {project.name}
                    </p>
                    <p className="mt-2 text-[12px] font-semibold leading-relaxed text-[#4a3e2f] dark:text-[#929ab8] sm:text-[13px]">
                      {featuredDescription}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {hasProjectLink ? (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro inline-flex items-center gap-1.5 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] dark:border-[#1a2240] dark:bg-[#3a4870] dark:text-[#dee2ec] dark:[box-shadow:2px_2px_0_#1a2240] dark:hover:bg-[#445278] sm:text-[11px]"
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
                          className="btn-retro inline-flex items-center gap-1.5 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] dark:border-[#1a2240] dark:bg-[#3a4870] dark:text-[#dee2ec] dark:[box-shadow:2px_2px_0_#1a2240] dark:hover:bg-[#445278] sm:text-[11px]"
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
                          className="btn-retro inline-flex items-center gap-1.5 border-2 border-[#0f0f0f] bg-[#f6eddc] px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#2f2519] [box-shadow:2px_2px_0_#0f0f0f] hover:bg-[#e6d8b8] dark:border-[#1a2240] dark:bg-[#3a4870] dark:text-[#dee2ec] dark:[box-shadow:2px_2px_0_#1a2240] dark:hover:bg-[#445278] sm:text-[11px]"
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
          className="btn-retro route-link mt-4 flex items-center justify-center border-3 border-[#0f0f0f] bg-[#efe3cd] px-4 py-3 text-[12px] font-extrabold uppercase tracking-wider text-[#2f2519] [box-shadow:4px_4px_0_#0f0f0f] hover:bg-[#e6d8b8] dark:border-[#1a2240] dark:bg-[#445278] dark:text-[#dee2ec] dark:[box-shadow:4px_4px_0_#1a2240] dark:hover:bg-[#4e5a88] sm:text-[14px]"
        >
          View All Projects →
        </Link>
      </motion.article>

      <motion.article
        variants={sectionVariants}
        className={`${readableFont.className} mt-4 border-4 border-[#0f0f0f] bg-[#faf2e3] p-4 font-bold [box-shadow:4px_4px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#2e3c60] dark:[box-shadow:4px_4px_0_#1a2240]`}
      >
        <header className="border-2 border-[#0f0f0f] bg-[#efe3cd] px-3 py-2 [box-shadow:3px_3px_0_#0f0f0f] dark:border-[#1a2240] dark:bg-[#445278] dark:[box-shadow:3px_3px_0_#1a2240]">
          <h2 className="text-[16px] uppercase tracking-wide text-[#2f2519] dark:text-[#dee2ec] sm:text-[18px]">
            Tech Stack
          </h2>
        </header>
        <motion.div
          className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
          variants={listVariants}
        >
          {[
            { name: "React", icon: <ReactIcon className="h-5 w-5" /> },
            { name: "Next.js", icon: <NextjsIcon className="h-5 w-5" /> },
            { name: "TensorFlow", icon: <TensorFlowIcon className="h-5 w-5" /> },
            { name: "PostgreSQL", icon: <PostgresIcon className="h-5 w-5" /> },
            { name: "scikit-learn", icon: <ScikitIcon className="h-5 w-5" /> },
            { name: "Docker", icon: <DockerIcon className="h-5 w-5" /> },
            { name: "Pandas", icon: <PandasIcon className="h-5 w-5" /> },
            { name: "NumPy", icon: <NumpyIcon className="h-5 w-5" /> },
          ].map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex items-center gap-3 border-2 border-[#0f0f0f] bg-[#fff9eb] p-3 dark:border-[#1a2240] dark:bg-[#324268]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#0f0f0f] bg-[#fff2cc] text-[#3a3126] dark:border-[#1a2240] dark:bg-[#3e4e7a] dark:text-[#a2aac8]">
                {tech.icon}
              </div>
              <p className="text-[12px] text-[#3a3126] dark:text-[#dee2ec] sm:text-[14px]">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

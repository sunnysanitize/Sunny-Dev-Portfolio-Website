import { Gaegu, Figtree, JetBrains_Mono } from "next/font/google";

// Handwritten display font for the hero name / large headings.
export const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gaegu",
});

// Clean, highly readable sans for body text, nav, buttons, section titles.
export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

// Mono accents: project tags, dates, small metadata.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

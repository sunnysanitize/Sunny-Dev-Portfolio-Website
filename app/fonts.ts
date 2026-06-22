import { Gaegu, Space_Grotesk, JetBrains_Mono } from "next/font/google";

// Handwritten display font for the hero name / large headings.
export const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gaegu",
});

// Grotesk sans for body text, nav, buttons, section titles.
// Free stand-in for n1.xyz's ABC Monument Grotesk.
export const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Mono accents: project tags, dates, small metadata.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

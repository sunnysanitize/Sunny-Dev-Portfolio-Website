import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialButtons from "./components/SocialButtons";
import PageTransition from "./components/PageTransition";
import SiteNav from "./components/SiteNav";
import { ThemeProvider } from "./components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnyzhang.dev"),
  title: {
    default: "Sunny Zhang | Portfolio",
    absolute: "Sunny Zhang | Portfolio",
  },
  description: "Developer portfolio: projects, experience, and contact.",
  icons: {
    icon: [{ url: "/sunny.ico", type: "image/x-icon", sizes: "any" }],
    shortcut: "/sunny.ico",
    apple: [{ url: "/og.png?v=6", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Sunny Zhang | Portfolio",
    description: "Developer portfolio: projects, experience, and contact.",
    url: "https://sunnyzhang.dev",
    siteName: "Sunny Zhang",
    images: [{ url: "/og.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="pointer-events-none fixed inset-0 z-0 bg-[#F0EAD6] dark:bg-[#0e1225]" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/Background2.png')] bg-cover bg-[center_36%] bg-no-repeat opacity-45 max-[640px]:bg-[center_62%] dark:bg-[url('/BackgroundDarkMode.png')] dark:opacity-40" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_9%_16%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_25%_20%,#ffffff_0_0.45%,transparent_0.8%),radial-gradient(circle_at_76%_12%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_88%_22%,#ffffff_0_0.45%,transparent_0.8%)] dark:bg-[radial-gradient(circle_at_9%_16%,#222a50_0_0.5%,transparent_0.9%),radial-gradient(circle_at_25%_20%,#1c2242_0_0.45%,transparent_0.8%),radial-gradient(circle_at_76%_12%,#222a50_0_0.5%,transparent_0.9%),radial-gradient(circle_at_88%_22%,#1c2242_0_0.45%,transparent_0.8%)]" />
          <div className="relative z-10 min-h-screen overflow-x-hidden px-3 pb-20 pt-8 text-[#2a241c] transition-colors duration-300 dark:text-[#d0d4e0] sm:px-5 sm:pb-40 sm:pt-12">
            <div className="relative mx-auto w-full max-w-5xl border-2 border-[#0f0f0f] bg-[#fffaf0]/95 p-3 transition-colors duration-300 [box-shadow:4px_4px_0_#0f0f0f] dark:border-[#101428] dark:bg-[#1c2240]/95 dark:[box-shadow:4px_4px_0_#101428] sm:border-4 sm:p-7 sm:[box-shadow:8px_8px_0_#0f0f0f] dark:sm:[box-shadow:8px_8px_0_#101428]">
              <SiteNav />
              <PageTransition>{children}</PageTransition>
            </div>
          </div>
          <SocialButtons />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

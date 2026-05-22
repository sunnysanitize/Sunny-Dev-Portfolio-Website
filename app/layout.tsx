import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

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
          <div className="pointer-events-none fixed inset-0 z-0 bg-white dark:bg-black" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/BackgroundWhite.png')] bg-cover bg-[center_36%] bg-no-repeat opacity-30 max-[640px]:bg-[center_62%] dark:bg-[url('/BackgroundBlack.png')] dark:opacity-40" />
          <div className="relative z-10 min-h-screen overflow-x-hidden px-3 pb-20 pt-[calc(2rem+env(safe-area-inset-top))] pl-[calc(0.75rem+env(safe-area-inset-left))] pr-[calc(0.75rem+env(safe-area-inset-right))] pb-[calc(5rem+env(safe-area-inset-bottom))] text-[#0f172a] transition-colors duration-300 dark:text-[#e5e7eb] sm:px-5 sm:pb-40 sm:pt-12">
            <div className="relative mx-auto w-full max-w-5xl border-2 border-[#0f0f0f] bg-white/95 p-3 transition-colors duration-300 [box-shadow:4px_4px_0_#0f0f0f] dark:border-[#212121] dark:bg-[#1e1e1e]/95 dark:[box-shadow:4px_4px_0_#000000] sm:border-4 sm:p-7 sm:[box-shadow:8px_8px_0_#0f0f0f] dark:sm:[box-shadow:8px_8px_0_#000000]">
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

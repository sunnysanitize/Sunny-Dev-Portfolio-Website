import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialButtons from "./components/SocialButtons";
import PageTransition from "./components/PageTransition";
import SiteNav from "./components/SiteNav";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 z-0 bg-[#F0EAD6]" />
        <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/Background2.png')] bg-cover bg-[center_36%] bg-no-repeat opacity-45 max-[640px]:bg-[center_62%]" />
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_9%_16%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_25%_20%,#ffffff_0_0.45%,transparent_0.8%),radial-gradient(circle_at_76%_12%,#fff1b6_0_0.5%,transparent_0.9%),radial-gradient(circle_at_88%_22%,#ffffff_0_0.45%,transparent_0.8%)]" />
        <div className="relative z-10 min-h-screen overflow-x-hidden px-3 pb-20 pt-8 text-[#2a241c] sm:px-5 sm:pb-40 sm:pt-12">
          <div className="relative mx-auto w-full max-w-5xl border-2 border-[#0f0f0f] bg-[#fffaf0]/95 p-3 [box-shadow:4px_4px_0_#0f0f0f] sm:border-4 sm:p-7 sm:[box-shadow:8px_8px_0_#0f0f0f]">
            <SiteNav />
            <PageTransition>{children}</PageTransition>
          </div>
        </div>
        <SocialButtons />
        <Analytics />
      </body>
    </html>
  );
}

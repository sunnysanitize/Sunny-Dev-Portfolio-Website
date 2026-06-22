import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { spaceGrotesk, gaegu, jetbrainsMono } from "./fonts";
import SiteNav from "./components/SiteNav";
import GrainCanvas from "./components/GrainCanvas";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const title = "Sunny Zhang | Portfolio";
const description = "Developer portfolio: projects, experience, and contact.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnyzhang.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://sunnyzhang.dev",
    siteName: "Sunny Zhang",
    images: [{ url: "/og.png", width: 500, height: 500, alt: "Sunny Zhang" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/og.png"],
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
        className={`${spaceGrotesk.variable} ${gaegu.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
      >
        <GrainCanvas />
        <div className="relative z-10 min-h-screen overflow-x-hidden px-4 pb-20 pt-[calc(0.75rem+env(safe-area-inset-top))] pl-[calc(1.75rem+env(safe-area-inset-left))] pr-[calc(1.75rem+env(safe-area-inset-right))] pb-[calc(5rem+env(safe-area-inset-bottom))] sm:px-14 sm:pb-40 sm:pt-3">
          <div className="relative w-full">
            <SiteNav />
          </div>
          <div className="relative mx-auto mt-28 w-full max-w-4xl sm:mt-36">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

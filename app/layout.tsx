import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { figtree, gaegu, jetbrainsMono } from "./fonts";
import SocialButtons from "./components/SocialButtons";
import SiteNav from "./components/SiteNav";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#fdf6e3",
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
        className={`${figtree.variable} ${gaegu.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="relative z-10 min-h-screen overflow-x-hidden px-4 pb-20 pt-[calc(0.75rem+env(safe-area-inset-top))] pl-[calc(1.75rem+env(safe-area-inset-left))] pr-[calc(1.75rem+env(safe-area-inset-right))] pb-[calc(5rem+env(safe-area-inset-bottom))] sm:px-14 sm:pb-40 sm:pt-3">
          <div className="relative w-full">
            <SiteNav />
          </div>
          <div className="relative mx-auto mt-28 w-full max-w-4xl sm:mt-36">
            {children}
          </div>
        </div>
        <SocialButtons />
        <Analytics />
      </body>
    </html>
  );
}

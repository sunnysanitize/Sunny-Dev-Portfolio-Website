import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sunny Zhang | Portfolio",
    absolute: "Sunny Zhang | Portfolio",
  },
  description: "Developer portfolio: projects, experience, and contact.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", type: "image/x-icon", sizes: "256x256" },
      { url: "/site-icon.png?v=5", type: "image/png", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=5",
    apple: [{ url: "/site-apple-icon.png?v=5", sizes: "180x180", type: "image/png" }],
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
        {children}
      </body>
    </html>
  );
}

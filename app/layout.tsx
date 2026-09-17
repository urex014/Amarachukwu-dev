import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F4F2EB",
};

export const metadata: Metadata = {
  title: "Amarachukwu Onuoha — Full-Stack Engineer & Product Builder",
  description:
    "Software engineer building digital products, interfaces and systems for the web. Studio monograph of Amarachukwu Onuoha (Lagos, Nigeria).",
  keywords: [
    "Amarachukwu Onuoha",
    "Full-Stack Engineer",
    "Product Builder",
    "Next.js",
    "TypeScript",
    "Outreachly",
    "Resumify",
    "Software Engineer Lagos",
  ],
  authors: [{ name: "Amarachukwu Onuoha", url: "https://github.com/Urex014" }],
  creator: "Amarachukwu Onuoha",
  openGraph: {
    title: "Amarachukwu Onuoha — Full-Stack Engineer & Product Builder",
    description:
      "Software engineer building digital products, interfaces and systems for the web.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/brand/logo-symbol.svg", type: "image/svg+xml" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/logo-symbol.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F4F2EB] text-[#121212]`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

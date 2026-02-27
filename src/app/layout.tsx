import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DesignSystemProvider from "@/design-system/DesignSystemProvider";
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
  title: "Next.js Coding Challenge | Frontend Skills Evaluation",
  description: "A comprehensive Next.js and React coding challenge designed to evaluate frontend development skills for professional positions.",
  keywords: ["Next.js", "React", "Frontend", "Coding Challenge", "Web Development"],
  authors: [{ name: "Pablo Llanes" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Next.js Coding Challenge",
    title: "Next.js Coding Challenge | Frontend Skills Evaluation",
    description: "A comprehensive Next.js and React coding challenge designed to evaluate frontend development skills.",
    images: [
      {
        url: "https://yoursite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js Coding Challenge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Coding Challenge | Frontend Skills Evaluation",
    description: "Evaluate your frontend development skills with this comprehensive Next.js and React challenge.",
    images: ["https://yoursite.com/twitter-image.png"],
  },
  alternates: {
    canonical: "https://yoursite.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </body>
    </html>
  );
}

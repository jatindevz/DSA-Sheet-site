import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/lib/query-provider";
import { Analytics } from "@vercel/analytics/react";
import { SurveyWidget } from "@/components/survey/SurveyWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSA Tracker - Track Your Coding Journey",
  description: "A minimal, beautiful DSA problem tracker with bento grid layout and glass UI. Track your progress across topics, difficulties, and platforms.",
  keywords: ["DSA", "Tracker", "LeetCode", "Coding", "Algorithms", "Data Structures"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <QueryProvider>
          {children}
          <SurveyWidget />
        </QueryProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}

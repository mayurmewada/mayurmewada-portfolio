import type { Metadata } from "next";
// Ignore missing type declarations for CSS imports in this Next.js project
// @ts-expect-error: Implicit any for CSS module
import "../styles.css";

export const metadata: Metadata = {
  title: "Mayur Mewada — Frontend Engineer | React & Next.js Developer",
  description:
    "Mayur Mewada — Frontend Engineer with 3+ years of experience building scalable, responsive web apps with React.js, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./assets/favicon.png" sizes="any" />
      {/* Root layout wrapper for all pages */}
      <body>{children}</body>
    </html>
  );
}

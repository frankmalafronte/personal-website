import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frank Malafronte",
  description: "Software Engineer in Test & AI Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

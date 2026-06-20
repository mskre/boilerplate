import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mskre",
  description: "A Next.js boilerplate landing page currently under construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

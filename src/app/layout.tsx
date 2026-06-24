import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script
          defer
          src="https://analytics.mskre.no/script.js"
          data-website-id="9ea0a7c3-1139-438b-82f6-6a12c391e9d5"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

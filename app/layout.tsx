import type { Metadata } from "next";
import { Manrope, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "LJE Nigeria",
  description: "LJE Members Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

import React from "react"
import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";

import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cortile del Libro e della Carta | Festival Letterario - Montereale Valcellina",
  description:
    "Festival letterario nel cuore di Montereale Valcellina. Incontri con autori, laboratori per bambini, mercatino del libro e della carta, musica e gastronomia. 24-25 Maggio 2025.",
};

export const viewport: Viewport = {
  themeColor: "#8B2332",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${lora.variable} ${sourceSans.variable}`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}

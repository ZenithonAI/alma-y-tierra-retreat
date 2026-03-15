import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alma-y-tierra.vercel.app"),
  title: "Alma y Tierra — Therapeutic Yoga Retreat in Oaxaca, Mexico",
  description:
    "A 7-day therapeutic yoga retreat in Oaxaca, Mexico. Daily yoga, farm-to-table meals, cultural excursions, and deep restoration. November 8–14, 2026.",
  openGraph: {
    title: "Alma y Tierra — Therapeutic Yoga Retreat in Oaxaca",
    description:
      "Reconnect with yourself on a 7-day yoga retreat in Oaxaca, Mexico. Limited to 12 guests.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

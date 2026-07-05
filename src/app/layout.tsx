import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alberto-academy.com"),
  title: "Alberto Academy | Personalized Online English Tutoring",
  description:
    "Premium online English tutoring with Alberto Sosa, offering personalized lessons, interactive resources, success stories, and trial session booking.",
  openGraph: {
    title: "Alberto Academy",
    description:
      "Personalized English coaching and interactive language resources for confident communication.",
    url: "https://alberto-academy.com",
    siteName: "Alberto Academy",
    images: [
      {
        url: "/images/alberto-academy-hero.webp",
        width: 1800,
        height: 868,
        alt: "Alberto Academy online English tutoring session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}

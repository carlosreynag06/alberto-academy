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
  metadataBase: new URL("https://albertoacademy.com"),
  title: "Alberto Academy | Inglés online para hablar con seguridad",
  description:
    "Academia de idiomas online dirigida por Alberto A. Sosa. Clases de inglés por niveles, privadas y grupales, con conversación inicial gratuita.",
  openGraph: {
    title: "Alberto Academy",
    description:
      "Aprenda inglés de forma progresiva, practique conversaciones reales y gane seguridad con una guía profesional.",
    url: "https://albertoacademy.com",
    siteName: "Alberto Academy",
    images: [
      {
        url: "/images/alberto-academy-hero.webp",
        width: 1800,
        height: 868,
        alt: "Clase de inglés online en Alberto Academy",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}

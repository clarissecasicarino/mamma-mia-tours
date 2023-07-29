"use client";
import "./styles/globals.css";
import { Roboto, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body className="px-8 tablet:px-10">{children}</body>
      <Footer />
    </html>
  );
}

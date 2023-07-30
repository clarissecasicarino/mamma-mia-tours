"use client";
import "./styles/globals.css";
import { Roboto, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
      <body>
        <Header />
        <div className="px-8 tablet:px-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

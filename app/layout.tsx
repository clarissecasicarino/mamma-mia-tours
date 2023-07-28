import "./styles/globals.css";
import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Mamma Mia Tours",
  description:
    "A Next.js, React and TypeScript website developed by Clarisse Casi Carino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" 
    className={`${roboto.variable} ${playfair.variable}`}
    >
      <body className="px-10">{children}</body>
    </html>
  );
}

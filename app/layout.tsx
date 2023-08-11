"use client";
import "./styles/globals.css";
import { Roboto, Playfair_Display } from "next/font/google";
import { useEffect } from "react";

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
  useEffect(() => {
    document.title = 'Mamma Mia Tours';
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
        />
      </head>
      <body className={`${roboto.variable} ${playfair.variable}`}>
        <div>{children}</div>
      </body>
    </html>
  );
}

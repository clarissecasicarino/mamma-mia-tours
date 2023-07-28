/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "mobile": "320px",
      "tablet": "768px",
      "laptop": "1024px",
      "desktop": "1440px",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-roboto-mono)"],
        body: ["var(--font-playfair-display)"],
      },
      colors: {
        primaryPurple: "#9381FF",
        secondaryPurple: "#E2DEFF",
        tertiaryPurple: "#B8B8FF",
        black: "#000000",
        pastelBlue: "#B8C0FF",
      },
      fontSize: {
        10: ["10px", "1rem"],
        12: ["12px", "1rem"],
        14: ["14px", "1rem"],
        16: ["16px", "1rem"],
        18: ["18px", "1rem"],
        32: ["32px", "1rem"],
        40: ["40px", "1rem"],
        48: ["48px", "1rem"],
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};

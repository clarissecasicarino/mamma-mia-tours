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
      'mobile': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      fontFamily: {
        display: ["var(--font-roboto-mono)"],
        body: ["var(--font-playfair)"],
      },
      colors: {
        primaryPurple: "#9381FF",
        secondaryPurple: "#E2DEFF",
        black: "#000000",
        pastelBlue: "#B8C0FF"
      },
      fontSize: {
        10: ["10px", "1rem"],
        12: ["12px", "1rem"],
        14: ["14px", "1rem"],
        16: ["16px", "1rem"],
      },
    },
  },
  plugins: [],
};

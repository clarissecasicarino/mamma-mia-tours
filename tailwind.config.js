/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: ['"Wix Madefor Display"', "sans-serif"],
        body: ["Playfair", "serif"],
      },
      colors: {
        electricBlue: {
          50: "#E5EAFF",
          100: "#B0BFFF",
          200: "#7B94FF",
          300: "#4D6EFF",
          400: "#244DFF",
          500: "#0030FF",
        },
      },
    },
  },
  plugins: [],
};

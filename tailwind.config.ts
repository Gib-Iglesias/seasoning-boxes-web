import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./i18n/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine:  { DEFAULT: "#810B38", light: "#a01448", dark: "#60082a" },
        cream: { DEFAULT: "#F1E2D1", dark: "#e8cdb4" },
        sand:  { DEFAULT: "#DCC3AA", dark: "#c9a98c" },
        brand: { DEFAULT: "#541A1A", light: "#6b2222" },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;

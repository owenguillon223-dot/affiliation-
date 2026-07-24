import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fbf5f3",
          100: "#f3e2dd",
          300: "#e0b6a9",
          500: "#c17f68",
          600: "#a3654f",
          700: "#7d4d3c",
          900: "#3f2620",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

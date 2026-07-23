import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f1fb",
          100: "#e6dff6",
          300: "#b8a2e6",
          500: "#7c5cd1",
          600: "#6544b8",
          700: "#523694",
          900: "#2e1c5c",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef5350",
        "primary-light": "rgb(239 83 80 / 35%)",
        "primary-dark": "#c62828",
        secondary: "#feca1b",
        "secondary-light": "rgb(254 202 27 / 44%)",
        "secondary-dark": "rgb(211 165 10)",
      },
    },
  },
  plugins: [],
};
export default config;

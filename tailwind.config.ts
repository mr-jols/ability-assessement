import type { Config } from "tailwindcss";

export const colors = {};

const screens = {
  mobile: { min: "320px" },
  mobile_large: { min: "374px" },
  tab: { min: "768px" },
  tab_large: { min: "1024px" },
  laptop: { min: "1200px" },
  desktop: { min: "1600px" },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    screens,
  },

  plugins: [],
  Colors: {
    ...colors,
  },
  Screens: {
    ...screens,
  },
};
export default config;

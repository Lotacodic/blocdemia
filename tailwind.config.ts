import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app-bg": "url('/blocks.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          100: "rgba(12, 12, 12, 1)",
          90: "rgba(12, 12, 12, .96)",
          80: "rgba(12, 12, 12, .8)",
          70: "rgba(12, 12, 12, .7)",
          60: "rgba(12, 12, 12, .6)",
          50: "rgba(12, 12, 12, .5)",
        },
        neutral: {
          100: "rgba(179, 179, 179, 1)",
          90: "rgba(168, 168, 168, 1)",
        },
        purple: {
          100: "rgba(125, 43, 212, 1)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

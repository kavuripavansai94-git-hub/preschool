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
        primary: {
          DEFAULT: "#FF7043",
          light: "#FFF3E0",
        },
        secondary: "#42A5F5",
        accent: {
          yellow: "#FFD54F",
          green: "#66BB6A",
          mint: "#E8F5E9",
        },
        bg: "#FFF8F0",
        text: {
          DEFAULT: "#1A1A2E",
          muted: "#6B7280",
        },
      },
      borderRadius: {
        card: "20px",
        btn: "50px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(255,112,67,0.10)",
        hover: "0 12px 40px rgba(255,112,67,0.18)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

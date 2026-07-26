import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        cream: "#F8F5EF",
        ivory: "#FCFAF5",
        dusty: "#7893A1",
        dustyDark: "#4E6875",
        gold: "#B99A5B",
        goldLight: "#D8C28D",
        ink: "#293A42",
      },

      fontFamily: {
        script: ["var(--font-great-vibes)"],
        display: ["var(--font-playfair)"],
        sans: ["var(--font-poppins)"],
      },

      boxShadow: {
        luxury: "0 20px 60px rgba(41, 58, 66, 0.12)",
        soft: "0 10px 40px rgba(41, 58, 66, 0.08)",
      },

      borderRadius: {
        luxury: "24px",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-15px) rotate(2deg)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;

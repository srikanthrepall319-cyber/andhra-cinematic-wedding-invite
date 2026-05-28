import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      colors: {
        ivory:  "#fdf8f0",
        gold:   "#c9a84c",
        "gold-light": "#f0d080",
        maroon: "#6e1f2d",
        "maroon-deep": "#3e0d18",
        sandal: "#e8d4b4",
        blush:  "#f7d8d6",
        ink:    "#1c1010",
      },
      boxShadow: {
        glow: "0 0 40px rgba(201,168,76,0.22)",
        soft: "0 8px 32px rgba(0,0,0,0.10)",
        card: "0 2px 24px rgba(0,0,0,0.08)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.9" },
          "50%":       { transform: "translateY(-16px) rotate(5deg)", opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "0%   center" },
          "100%": { backgroundPosition: "200% center" },
        },
        drift: {
          "0%":   { transform: "translate3d(0,0,0) rotate(0deg)", opacity: "0" },
          "15%":  { opacity: "1" },
          "100%": { transform: "translate3d(0,-110vh,0) rotate(360deg)", opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty:  "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        drift:   "drift 14s linear infinite",
        fadeIn:  "fadeIn 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#0B0B0C",
        muted: "#A1A1AA",
        ice: "#7DD3FC",
        silver: "#D4D4D8",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 40px rgba(125, 211, 252, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

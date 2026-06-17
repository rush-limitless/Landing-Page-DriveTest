/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#698D9C", dark: "#4A6B78", light: "#8BB0BF" },
        secondary: { DEFAULT: "#0F1923", light: "#162231" },
        surface: "#162231",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(105,141,156,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(105,141,156,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

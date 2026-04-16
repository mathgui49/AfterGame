import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9b9d",
          400: "#ff6266",
          500: "#ff2d3a",
          600: "#ed0f23",
          700: "#c8081a",
          800: "#a50b1a",
          900: "#88101d",
          950: "#4b020a",
        },
        velvet: {
          50: "#fdf3f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#e3337a",
          600: "#c41d63",
          700: "#a4134f",
          800: "#86133f",
          900: "#701436",
          950: "#44061c",
        },
        midnight: {
          50: "#f4f3ff",
          100: "#ebe9fe",
          200: "#d9d6fd",
          300: "#beb4fc",
          400: "#9e87f8",
          500: "#8058f2",
          600: "#6f3be6",
          700: "#5f2bcb",
          800: "#4f24a5",
          900: "#411f85",
          950: "#1a0b47",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "flame": "flame 1.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        flame: {
          "0%, 100%": { transform: "scaleY(1) scaleX(1)", opacity: "1" },
          "50%": { transform: "scaleY(1.1) scaleX(0.95)", opacity: "0.9" },
        },
      },
      backgroundImage: {
        "hot-gradient": "linear-gradient(135deg, #4b020a 0%, #86133f 50%, #1a0b47 100%)",
        "ember-glow": "radial-gradient(ellipse at top, rgba(237,15,35,0.25), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;

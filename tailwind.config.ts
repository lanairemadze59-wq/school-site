import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff", 100: "#dbe7ff", 500: "#3b6fd4", 600: "#2a57b5",
          700: "#1f4492", 800: "#1a3873", 900: "#14294f",
        },
        accent: { 400: "#f5b942", 500: "#e9a420", 600: "#c98a10" },
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

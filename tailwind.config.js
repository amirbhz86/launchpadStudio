/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "var(--brand-gold)",
          "gold-muted": "var(--brand-gold-muted)",
          white: "var(--brand-white)",
          black: "var(--brand-black)",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F7A4D",
        primaryLight: "#4CAF84",

        textPrimary: "#0F172A",
        textSecondary: "#6B7280",

        background: "#F6F7F9",
        border: "#E5E7EB",

        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};

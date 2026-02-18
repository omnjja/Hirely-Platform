/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Roboto", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        primary: "#1B41AA",
        secondary: "#F4F6F8",
        accent: "#10B981",
        text: "#2E2E2E",
        ai: "#8B5CF6",
      },
    },
  },
  plugins: [],
};

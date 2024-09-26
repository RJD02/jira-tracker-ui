/** @type {import('tailwindcss').Config} */
export default {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  content: [
    "./index.html", // Entry point for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // React/Vue/Angular components in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};

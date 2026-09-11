/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./assets/**/*.js"
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        display: ["PT Sans", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      },

      colors: {
        accent: "#FF6B2B",
        "accent-light": "#FF8F5C"
      }
    }
  },

  plugins: []
};
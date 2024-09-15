/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        mobile: { max: "710px" },
        mid: { min: "710px", max: "920px" },
        tab: { min: "710px", max: "1280px" },
        desktop: { min: "1280px" },
        wide: { min: "1480px" },
      }
    },
  },
  plugins: [],
}


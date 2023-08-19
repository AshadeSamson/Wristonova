/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        display: ['Merriweather Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


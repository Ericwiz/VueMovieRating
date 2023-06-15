/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'movie_bg-01': "url('./src/assets/movie_bg-01.webp')",
        'movie_bg-02': "url('./src/assets/movie_bg-02.webp')"
      }, 
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [require("daisyui")],
}
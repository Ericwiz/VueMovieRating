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
        'movie_bg-01': "url('@/assets/movie_bg-01.webp')",
        'movie_bg-02': "url('@/assets/movie_bg-02.webp')",
        'movie-night_bg': "url('@/assets/movieNight.jpeg')"
      }, 
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [require("daisyui")],
}
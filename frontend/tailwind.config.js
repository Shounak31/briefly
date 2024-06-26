/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        martinique: '#24243B',
        lavender: '#2D2C48',
        amethystSmoke: '#908AAF',
        manatee :'#9B9CA3',
        iron: '#D4D4D7'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#131313',
      'light': '#474B4F',
      'gray': '#6B6E70',
      'secondary': {
        100: '#61892F',
        200: '#86C232'
      } 
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#131313',
      'white': '#ffffff',
      'light': '#474B4F',
      'lightgray': '#CCD6F6',
      'gray': '#A5A5A5',
      'secondary': {
        100: '#61892F',
        200: '#86C232',
        300: '#CCE5A8'
      } 
    },
    extend: {
      backgroundImage:
      {
        'hero': "url('./src/assets/images/hero-bg.svg')"
      }
    },
    fontFamily: {
      'lato': ['"Amatic SC"', 'cursive'],
    },
  },
  plugins: [],
}

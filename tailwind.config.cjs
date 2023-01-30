/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'main-yellow': '#fcedad',
        'main-purple': '#c2b4fa',
        'main-green': '#70c893',
        'main-silver': '#ecebff',
        'main-red': '#f36a79',
        'main-blue': '#7FD4FF',
        'main-background': '#161617'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

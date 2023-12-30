/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'mv': '670px',
      'maxs': {'max': '659px'},
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
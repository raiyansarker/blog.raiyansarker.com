/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: '#3888EF',
          light: '#F3F7FF',
        },
        secondary: '#1C1D1F',
      },
    },
  },
  plugins: [],
};

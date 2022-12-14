/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: '#4f46e5',
          accent: '#C7DFFF',
          light: '#F3F7FF',
        },
        secondary: '#1C1D1F',
        dark: {
          primary: 'rgb(75,85,99)',
          accent: '#666',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};

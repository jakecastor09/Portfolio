/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ProximaNova', 'sans-serif'],
      },
      colors: {
        primary: '#16F8B6',
        secondary: '#6F61C0',
        tertiary: '#C42D78',
        darkYellow: '#FBBD23',
      },
    },
  },
  plugins: [],
};

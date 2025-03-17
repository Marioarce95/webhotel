/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zonaprop': {
          'blue': '#2A3B47',
          'orange': '#FF7212',
        },
        'whatsapp': {
          'green': '#25D366',
          'dark': '#128C7E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


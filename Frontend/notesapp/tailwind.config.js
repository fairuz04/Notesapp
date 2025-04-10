/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  presets: [require('@tailwindcss/preset')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
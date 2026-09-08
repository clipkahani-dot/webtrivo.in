/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0284c7', // Baby Blue / Trust Sky Blue
          lightblue: '#e0f2fe',
          darkblue: '#0369a1',
          navy: '#0f172a',
          red: '#dc2626', // Action Crimson Red
          lightred: '#fef2f2',
          accent: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif']
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#1C1C1C',
        'crisp-white': '#FFFFFF',
        'vibrant-green': '#81C704',
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

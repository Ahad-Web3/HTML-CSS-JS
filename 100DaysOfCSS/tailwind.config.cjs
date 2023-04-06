/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        day1: 'day1.html'
      }
    }
  }
}
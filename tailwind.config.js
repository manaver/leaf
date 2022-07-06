/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

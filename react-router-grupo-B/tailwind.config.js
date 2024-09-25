/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
      },
      backgroundImage: {
        'contact-pattern': "url('./src/img/makeupbg.jpg')"
      }
    },
  },
  plugins: [],
}
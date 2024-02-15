/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary: "#3B71CA",
        brandYellow:'#fdc62e',
        brandGreen:'#2dcc6f',
        brandBlue:'#1376f4',
        brandWhite:'#eeeeee'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}


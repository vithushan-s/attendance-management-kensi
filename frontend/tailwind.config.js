/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primay:"#E83667",
        primayDark:"#BB2C51",
        secondary:"#21D4B9",
        dark:"#303030",
      },
      fontFamily:{
        inter:["Inter","sans-serif"],
        cursive:["Ephesis","cursive"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'3rem',
          xl:'4rem',
        },
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco' : "url('/public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop' : " url('/public/img/sanFranciscoDesktop.jpg')",
        'yosemite' : " url('/public/img/yosemite.jpg')",
        'LA' : " url('/public/img/LA.jpg')",
        'seattle' : " url('/public/img/seattle.jpg')",
        'new_york' : " url('/public/img/new_york.jpg')",
        'norway' : " url('/public/img/norway.jpg')",
        'sydney' : "url('/public/img/sydney.jpg')",
        'miami' : "url('/public/img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
        'fourth' : '#CCCCCC'
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      },
      gridTemplateAreas: {
        'layout': [
          'chicago chicago',
          'LA-top miami ',
          'LA-down  bali',
        ],
      },
      // gridTemplateColumns: {
      //   'layout' : 'auto auto',
      // },
      // gridTemplateRows: {
      //   'layout': 'auto 1fr 1fr',
      // },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    gridTemplateAreas: ['responsive'],
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require('@savvywombat/tailwindcss-grid-areas')
  ],
}


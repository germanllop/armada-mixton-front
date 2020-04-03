const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      width: {
        '390px':'390px',
      },
      fontFamily: {
        sans: [
          '"Roboto Condensed"',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      boxShadow:{
        'left':'-8px 0px 6px -6px rgba(0, 0, 0, .75)',
        'glow': '0 0 0px 3px rgba(225,225,225,0.75)'
      },
      backgroundColor:{
        'blur':'#88888820',
        'dark-blur':'#2d2d2d70'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(2px)',
      },
      filter: { 
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-filters')
  ],
}

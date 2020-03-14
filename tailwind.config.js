const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      width: {
        '320px':'320px',
      },      
      fontFamily: {
        sans: [
          '"Roboto Condensed"',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  variants: {},
  plugins: [],
}

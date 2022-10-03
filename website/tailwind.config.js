const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./public/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.gray,
      'brand': {
        blue: '#00aeef',
        DEFAULT: '#00aeef',
        lightblue: '#8ed1fc',
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ]
}

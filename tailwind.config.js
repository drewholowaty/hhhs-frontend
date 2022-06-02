const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      primary: '#FF5500',
      primary_light: '#ff9966',
      secondary: '#2F993B',
      green: colors.green,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [],
}

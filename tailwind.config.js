const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      primaryOrange: "#FE884C",
      primaryOrange_light: "#fe9f6f",
      primaryLightGrey: "#D0D0D0",
      primaryDarkGrey: "#787878",
      primaryDarkGrey_light: "#939393",
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
};

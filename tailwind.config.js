const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      primaryOrange: "#FE884C",
      primaryOrange_light: "#fe9f6f",
      primaryLightGrey: "#D0D0D0",
      primaryDarkGrey: "#2F993B",
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
};

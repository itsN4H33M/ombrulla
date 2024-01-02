/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },

    extend: {
      height: {
        100: "30rem",
        104: "31rem",
        108: "32rem",
        112: "34rem" 
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-white-light": "#f3f4f6",
        "custom-dark": "#191919",
      },
      backgroundColor: {
        dark: "#191919",
      },
      borderRadius: {
        "custom-sm": "3px",
      },
      borderColor: {
        "gray-1": "#c2c2c1",
      },
    },
  },
  plugins: [require("preline/plugin")],
};

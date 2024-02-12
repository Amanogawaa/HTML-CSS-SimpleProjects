/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#f4d04e",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

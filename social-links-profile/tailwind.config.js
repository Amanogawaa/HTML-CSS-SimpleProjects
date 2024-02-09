/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#c5f82a",
        "neutral-white": "#ffffff",
        "neutral-grey": "#333333",
        "neutral-dark-grey": "#1f1f1f",
        "neutral-off-black": "#141414",
      },
    },
  },
  plugins: [],
};

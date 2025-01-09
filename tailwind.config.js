/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#006341",
          orange: "#FF6B00",
        },
      },
    },
  },
  plugins: [],
};

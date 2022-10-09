/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oleo Script"],
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

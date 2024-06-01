/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        home: "url('/assets/bg.png')",
      },
      animation: {
        "fade-in": "fadeIn 5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

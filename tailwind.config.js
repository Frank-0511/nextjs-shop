module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        press: "'Press Start 2P', cursive",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

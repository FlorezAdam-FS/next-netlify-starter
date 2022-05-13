module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Yellowtail", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/hero.jpg')",
      },
      colors: {
        orange: "#FFC170",
        dark: "#001514",
      },
    },
  },
  plugins: [],
};

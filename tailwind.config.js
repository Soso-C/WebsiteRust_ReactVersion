module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        menu: "100px 1fr 160px",
        footerGrid: "1fr 1fr 1fr",
      },
      fontFamily: {
        hurricane: ["Hurricane", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

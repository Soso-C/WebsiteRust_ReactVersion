module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        menu: "160px 1fr 160px",
        footerGrid: "1fr 1fr 1fr",
      },
      fontFamily: {
        hurricane: ["Hurricane", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'main-bg': "url('/public/AwakeRustBackground.webp')",
      },
    },
  },
  plugins: [],
};

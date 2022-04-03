module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        header: "0 0 4px 1px #00000025",
        teamCard: "0 4px 4px rgba(0, 0, 0, 0.25)",
        priceIcon: "0px 0px 6px rgba(0, 0, 0, 0.25)",
        priceList: "0px 0px 9px rgba(0, 0, 0, 0.25)",
        button: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        one: "0px 0px 5px 1px #E0AFA0",
        locationCard: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        cardHover: "0px 0px 16px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

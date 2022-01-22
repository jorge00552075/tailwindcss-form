module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/bg-intro-desktop.png')",
      },
      colors: {
        RED: "hsl(0, 100%, 74%) ",
        GREEN: "hsl(154, 59%, 51%)",
        LIGHTGREEN: "#77E2B3",
        ACCENT: "hsl(248, 32%, 49%)",
        NEUTRALDARK: "hsl(249, 10%, 26%)",
        NEUTRALLIGHT: "hsl(246, 25%, 77%)",
      },
    },
  },
  plugins: [],
};

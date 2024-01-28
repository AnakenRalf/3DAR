module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000212", "900_01": "#000000" },
        blue_gray: { 100: "#d9d9d9", 800: "#363a4b", 900: "#212937" },
        gray: {
          50: "#f8f8f8",
          200: "#eeeeee",
          900: "#152127",
          "200_01": "#f0f0f0",
          "200_02": "#e7e7e7",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

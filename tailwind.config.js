/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#323232", //
        secondary: "#8A8A8A", //neutral
        tertiary: "#646464", //
        info: "#404040",
        crema: "#DDD9D7",
        cremaLight: "#FFFFFF",
        cremaDark: "#EFEBE8",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};

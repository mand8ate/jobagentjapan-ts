import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        white: "#fff",
        blueviolet: {
          100: "#904fff",
          200: "#7856ff",
        },
        crimson: {
          100: "#fc4459",
          200: "#fc4258",
          300: "#f93452",
        },
        gray: {
          100: "#8b8b8b",
          200: "#8a8a8a",
          300: "rgba(255, 255, 255, 0.75)",
        },
        palevioletred: {
          100: "#c06474",
          200: "#b86271",
          300: "#af606e",
          400: "#a65e6b",
          500: "#9d5c68",
        },
        silver: {
          100: "#c8c8c8",
          200: "#c2c2c2",
          300: "#b9b9b9",
          400: "#b6b6b6",
        },
        red: "#ff0000",
        black: "#000",
        gold: "#f8c202",
        dimgray: "#545454",
        mediumturquoise: "#3bc8bc",
        mediumslateblue: "#4d63fe",
        gainsboro: {
          100: "#dcdcdc",
          200: "#d9d9d9",
        },
        darkslategray: {
          100: "#494949",
          200: "#3f3f3f",
        },
        aqua: "rgba(104, 255, 246, 0.6)",
        whitesmoke: "#f6f6f6",
        midnightblue: "#003294",
        rosybrown: "#c57f85",
        pink: "#e1b4b8",
        indianred: "#c15c6d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        // shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

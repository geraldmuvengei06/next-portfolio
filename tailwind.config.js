/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        light: "#00DC82",
        DEFAULT: "#23C56F",
        dark: "#045329",
      },
      light: {
        DEFAULT: "#f4f4f8",
      },
      dark: {
        light: "#333448",
        DEFAULT: "#222333",
      },
      green: colors.green,
      slate: colors.slate,
      gray: colors.gray,
      white: colors.white,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#23C56F",
          secondary: "#00DC82",
          neutral: "#222333",
          "base-100": "#333448",
          "primary-focus": "#00DC82",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#23C56F",
          secondary: "#00DC82",
          neutral: "#222333",
          "base-100": "#333448",
          "primary-focus": "#00DC82",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "mytheme", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};

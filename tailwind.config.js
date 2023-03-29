// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: "jit",

//   purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],

//   theme: {
//     screens: {
//       // sm: "480px",
//       sm: "320px",
//       md: "768px",
//       lg: "976px",
//       xl: "1440px",
//     },
//     colors: {
//       offWhite: "hsl(240deg, 27%, 98%)",

//       black: "hsl(228deg, 29%, 7%)",
//       deepBlue: "hsl(233deg, 30%, 11%)",

//       "primary-dark-17": "hsl(233deg, 31%, 17%)",
//       "primary-dark-21": "hsl(233deg, 30%, 21%)",
//       primary: "hsl(252deg, 94%, 67%)",
//       "primary-light": "hsl(252deg, 100%, 73%)",

//       "gray-dark-63": "hsl(231deg, 37%, 63%)",
//       "gray-dark-27": "hsl(231deg, 20%, 27%)",
//       "gray-dark-61": "hsl(231deg, 20%, 61%)",
//       gray: "hsl(223deg, 73%, 93%)",
//       "gray-light": "hsl(0deg, 0%, 95%)",
//       // "gray-light-59": "hsl(0deg, 0%, 59%)",

//       urgent: "hsl(0deg, 80%, 63%)",
//       "urgent-light": "hsl(0deg, 100%, 80%)",

//       warning: "hsl(34deg, 100%, 50%)",
//       "warning-light": "hsl(36deg, 100%, 97%)",

//       success: "hsl(160deg, 67%, 52%)",
//       "success-light": "hsl(162deg, 71%, 97%)",

//       draft: "hsl(231deg, 17%, 31%)",
//       "draft-light": "hsl(240deg, 5%, 96%)",
//     },
//     extend: {
//       fontFamily: {
//         Light: ["Spartan-Light"],
//         regular: ["Spartan-Regular"],
//         medium: ["Spartan-Medium"],
//         bold: ["Spartan-Bold"],
//       },
//     },
//   },
//   plugins: [],
// };

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",

  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    borderRadius: {
      pill: "100vmax",
      100: "0.8rem",
      150: "0.5rem",
      200: "0.6rem",
      300: "0.4rem",
      ...defaultTheme.borderRadius,
    },

    colors: {
      current: "currentColor",
      transparent: "transparent",
      inherit: "inherit",
      neutral: { 100: "hsl(0deg, 0%, 100%)", 900: "#000000" },
      brand: {
        100: "hsl(0deg, 0%, 95%)",
        200: "#e4ebfa",
        300: "#a8a4ff",
        400: "#828fa3",
        450: "hsl(252deg, 94%, 67%)",
        500: "hsl(231deg, 20%, 27%)",
        600: "#3e3f4e",
        700: "#2b2c37",
        900: "#000112",
      },
      accent: {
        100: "#ff9898",
        200: "#ea5555",
        300: "#49C4E5",
        400: "#8471F2",
        500: "#67E2AE",
      },
    },

    fontFamily: {
      sans: ["Spartan", ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      100: "0.8rem",
      200: "1rem",
      300: "1.2rem",
      400: "1.3rem",
      500: "1.5rem",
      600: "1.8rem",
      700: "2.4rem", //
    },

    lineHeight: {
      100: "0.8rem",
      200: "1.5rem",
      300: "1.9rem",
      400: "2.3rem",
      500: "3rem",
    },
    letterSpacing: {
      100: "2.4px",
      ...defaultTheme.letterSpacing,
    },

    screens: {
      s: "20em", // => @media (min-width: 320px) { ... }
      xs: "30em", // => @media (min-width: 480px) { ... }
      sm: "36em", // => @media (min-width: 576px) { ... }
      sx: "40em", // => @media (min-width: 640px) { ... }
      md: "45em", // => @media (min-width: 720px) { ... }
      lg: "64em", // => @media (min-width: 1024px) { ... }
      xl: "80em", // => @media (min-width: 1280px) { ... }
      xxl: "96em", // => @media (min-width: 1280px) { ... }
      xxxl: "112.5em", // => @media (min-width: 1800px) { ... }
    },

    extend: {
      gridTemplateAreas: {
        desk: ["header header", "aside main"],
        // ipad: ["header header", "copy social"],
      },

      gridTemplateColumns: {
        // arbitrary values
        "fill-16": "repeat(auto-fill, minmax(4rem, 1fr))",
        "fill-20": "repeat(auto-fill, minmax(5rem, 1fr))",
        "fit-big": "repeat(auto-fit, minmax(25rem, 1fr))",
        // etc.
      },

      boxShadow: {
        task: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
        scrollbar:
          "inset 2px 2px 2px rgb(0 0% 0% / 0.5%), inset -2px -2px 2px rgb(0 0 0 / 0.5%)",
      },
    },
  },
  plugins: [
    // require("@savvywombat/tailwindcss-grid-areas"),
    // require("tailwind-scrollbar")({ nocompatible: true }),
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          gap: "1rem",
          paddingBlock: "1.5rem",
          paddingInline: "2.75rem",
          borderRadius: theme("borderRadius.pill"),
          fontSize: theme("fontSize.400"),
          lineHeight: theme("lineHeight.200"),
          letterSpacing: theme("letterSpacing.200"),
        },
      });
      addUtilities({
        ".icon--svg": {
          fill: "currentColor",
        },
      });
    }),
  ],
};

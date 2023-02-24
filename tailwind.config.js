/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      // sm: "480px",
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      offWhite: "hsl(240deg, 27%, 98%)",

      black: "hsl(228deg, 29%, 7%)",
      deepBlue: "hsl(233deg, 30%, 11%)",

      "primary-dark-17": "hsl(233deg, 31%, 17%)",
      "primary-dark-21": "hsl(233deg, 30%, 21%)",
      primary: "hsl(252deg, 94%, 67%)",
      "primary-light": "hsl(252deg, 100%, 73%)",

      "gray-dark-63": "hsl(231deg, 37%, 63%)",
      "gray-dark-27": "hsl(231deg, 20%, 27%)",
      "gray-dark-61": "hsl(231deg, 20%, 61%)",
      gray: "hsl(223deg, 73%, 93%)",
      "gray-light": "hsl(0deg, 0%, 95%)",
      // "gray-light-59": "hsl(0deg, 0%, 59%)",

      urgent: "hsl(0deg, 80%, 63%)",
      "urgent-light": "hsl(0deg, 100%, 80%)",

      warning: "hsl(34deg, 100%, 50%)",
      "warning-light": "hsl(36deg, 100%, 97%)",

      success: "hsl(160deg, 67%, 52%)",
      "success-light": "hsl(162deg, 71%, 97%)",

      draft: "hsl(231deg, 17%, 31%)",
      "draft-light": "hsl(240deg, 5%, 96%)",
    },
    extend: {
      fontFamily: {
        Light: ["Spartan-Light"],
        regular: ["Spartan-Regular"],
        medium: ["Spartan-Medium"],
        bold: ["Spartan-Bold"],
      },
    },
  },
  plugins: [],
};

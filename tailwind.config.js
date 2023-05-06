/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryBlue: "#2f80ed",
      primaryBlack: "#4f4f4f",
      primaryGray: "#828282",
      primaryWhite: "#e0e0e0",
      indicatorOrange: "#f8b76b",
      indicatorPurple: "#8785ff",
      indicatorRed: "#eb5757",
      indicatorYellow: "#f2c94c",
      white: "#ffffff",
      stickersGray: "#e9f3ff",
      stickersChoco: "#fdcfa4",
      stickersGreen: "#afebdb",
      stickersPurple: "#cfcef9",
      stickersLightChoco: "#f9e9c3",
      stickersLightGreen: "#cbf1c2",
      stickersPink: "#f9e0fd",
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

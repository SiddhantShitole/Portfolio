/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#77FE00",
        white: "#FFFFFF",
        gray: "#9B9B9B",
        darkgray: "#4E5A44",
        black: "#000000",
        
        greenMuted: "#A7C957",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5F0F40",
        darkOrange: "#E36414",
        darkRed: "#9A031E",
        lightOrange: "#FB8B24",
        darkGray: "#1E1E1E",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        para: ["Lato"],
      },
  },
},
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      });
    },
  ],
}


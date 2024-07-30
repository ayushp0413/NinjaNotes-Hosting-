/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      black: '#040D12',
      blue: '#CAF4FF',
      offWhite: '#FDFFE2',
      grey: '#F3F3F3',
      greenGrey: '#7B9367',
      yellow: '#BCFF9F',
      theme: '#6b6a51',
      tingGreen: '#64AE06'
    },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [],
}

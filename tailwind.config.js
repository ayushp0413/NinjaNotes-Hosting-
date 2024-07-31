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
      tingGreen: '#64AE06',
      dargGreen: '#0F1B09'
    },
    fontFamily: {
      groastek: ["Space Grotesk", "sans-serif"],
    },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
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

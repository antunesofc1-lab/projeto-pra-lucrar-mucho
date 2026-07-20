/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0f1113",
          900: "#16191c",
          800: "#1f2327",
          700: "#2a2f34",
          600: "#3a4046",
          400: "#7a8188",
          200: "#c7ccd1",
          100: "#e8eaed",
        },
        signal: {
          DEFAULT: "#ffb454",
          dim: "#8a6633",
        },
      },
      fontFamily: {
        display: ["Fjalla One", "Arial Narrow", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

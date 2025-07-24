/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0e0e0e",
        card: "#1a1a1a",
        neonGreen: "#00FFB2",
        redLoss: "#FF4D4D",
        gainGreen: "#00ff88"
      },
    },
  },
  plugins: [],
}

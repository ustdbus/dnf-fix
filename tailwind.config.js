/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dnf: {
          bg: '#0f1117',
          panel: '#161922',
          card: '#1e2230',
          border: '#2e3547',
          gold: '#f59e0b',
          goldLight: '#fcd34d',
          accent: '#e11d48',
          textMuted: '#94a3b8'
        }
      }
    },
  },
  plugins: [],
}

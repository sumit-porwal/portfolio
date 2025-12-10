/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#1A1A1A',
        neon: '#0AFF9D',
        'neon-blue': '#00E0FF',
        'surface-hover': '#2C2C2C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}

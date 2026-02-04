/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fdf6f0', // Light Beige bkg
          100: '#faeadd',
          200: '#edb88b', // Beige Accent
          300: '#e09f60',
          400: '#cc7d30',
          500: '#a44200', // Burnt Orange
          600: '#873408',
          700: '#69140e', // Rust
          800: '#521f15',
          900: '#3C1518', // Deep Wine Text
          950: '#2b0f11',
        },
        olive: {
            500: '#45503b', 
            900: '#232b1e',
        },
        warm: {
          white: '#3C1518', // Inverted: Main text is now dark
          cream: '#521f15', // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}

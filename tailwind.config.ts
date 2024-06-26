/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0b101f',
        light: '#fff',
        primary: '#57cc99'
      },
      transitionProperty: {
        'height': 'height',
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    keyframes: {
      zoomBack: {
        '0%': { transform: 'scale(1.5)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      }
    },
    animation: {
      'zoom-back': 'zoomBack 1s ease-out var(--delay) forwards',
    }
  },
  plugins: [],
}
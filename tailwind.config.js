/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070E1C',
          900: '#0B1426', // page background
          800: '#13203A', // cards
          700: '#1C2C4D', // borders / hover
        },
        gold: {
          300: '#E3C766',
          400: '#D4B23F',
          500: '#C9A227', // primary accent
          600: '#A8861C',
        },
        ink: {
          100: '#E6E9EF', // main text
          300: '#AEB6C6', // secondary text
          500: '#7D879B', // muted text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

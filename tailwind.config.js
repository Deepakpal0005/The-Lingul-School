/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'slow-spin': 'spin 5s linear infinite',
        'moveDown': 'moveDown 1s linear infinite',
      },
      screens: {
        'xs': '0px',    // Custom breakpoint for screens from 0px
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add more custom breakpoints if needed
      },
    },
  },
  plugins: [],
}
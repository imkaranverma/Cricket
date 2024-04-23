/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#b60d0d',
        customyellow: '#fccf2f'
      }, fontFamily: {
        'custom': ['CustomFont', 'Montserrat'],
      },
      fontWeight: {
        'custom-light': 300,
        'custom-normal': 400,
        'custom-semibold': 600,
        'custom-bold': 700,
      },
    },
  },
  plugins: [],
}


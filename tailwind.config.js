/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deb37e: '#deb37e',
      },
      fontSize: {
        92: '92px',
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      filter: {},
      dropShadow: {
        custom: '2.575px -4.286px 2.5px rgba(84,82,79,0.22)',
      },
    },
  },
  variants: {
    extend: {
      filter: ['responsive'],
    },
  },
  plugins: [],
};

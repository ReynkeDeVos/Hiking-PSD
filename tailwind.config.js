/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      translate: { '1/3': '33.333333%', '1/5': '20%', '1/10': '10%', '1/20': '5%' },
      colors: {
        deb37e: '#deb37e',
        'custom-yellow': '#e2a355',
        'custom-gray': '#7f7770',
      },
      fontSize: {},
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '2xl': { 'max': '1535px'},

      'xl': { 'max' : '1279px'},

      'lg': { 'max' : '1023px'},

      'md': { 'max' : '767px'},

      'sm': { 'max' : '639px'},
    },
    extend: {
      colors:{
        'dark-green':'#009379',
        'light-green': '#E5F4F2',
        'pink' : '#F2BFAF',
        'orange': "#FF6250",
        'black' : '#2D2D2D',
      },
      screens: {
        'xs': {"max" : '380px'},
      }
    },
  },
  plugins: [],
}


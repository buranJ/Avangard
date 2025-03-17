/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px'
      },
      colors: {
        'dark-blue': '#00417D',
        'dark-black': '#00091B',
        'dark-black-opacity': '#00091BB2',
        bg: '#EEEEEE',
        grey: '#4F4F4F',
        'no-active': '#E1E2E4',
        'custom-red': '#FF001D',
        'custom-blue': '#38A6E4'
      },
      fontFamily: {
        vetren: ['Vetren', 'sans-serif'],
        montserrat: ['Montserrat', 'serif'],
        sans: ['"Product Sans"', 'serif']
      },
      width: {
        '1/7': '14.2857143%'
      }
    }
  },
  plugins: []
};

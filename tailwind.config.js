/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screen: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1220px',
      '2xl': '1440px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        whiteLight: '#ddd',
        black: '#000',
        white: '#fff',
        blackLight: '#333',
      },
      backgroundImage: {
        backImg:
          'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )',
        backHero:
          'linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )',
      },
    },
  },
  plugins: [],
};

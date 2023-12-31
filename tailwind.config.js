/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      // padding: '2rem',

    },

    fontFamily: {
      Mazzard: ['Mazzard H'],
    },

    extend: {
      colors: {
        primaryRed: '#E95051',
        primaryYellow: '#FDC55E',
        Footer: '#202123',
      },

      boxShadow: {
        'button': '0 3px 15px -1px rgba(233, 80, 81, 0.6)',
        'MobileNavigationBar': '0 0 15px 1px rgba(0, 0, 0, 0.22) ',
        'simple': '0 0 15px -2px rgba(0, 0, 0, 0.22)'
      },

      fontSize: {
        '28' : '28px',
      },

      padding: {
        '9' : '9px',
      },

      transition: {
        'all4' : 'all.4s',
      },


    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}


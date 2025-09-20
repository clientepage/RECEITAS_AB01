/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        natural: {
          50: '#f2f7f2',
          100: '#e0ede0',
          200: '#c1dbc2',
          300: '#9bc49d',
          400: '#71a874',
          500: '#538c57',
          600: '#3d7141',
          700: '#315a35',
          800: '#2a492d',
          900: '#243d27',
          950: '#0f2011',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f3efe9',
          200: '#e7dfd2',
          300: '#d7c7b1',
          400: '#c4a98a',
          500: '#b79170',
          600: '#aa7c5e',
          700: '#8e6750',
          800: '#735545',
          900: '#5f473a',
          950: '#322520',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      opacity: {
        '15': '0.15',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'spin': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.aspect-w-16': {
          position: 'relative',
          paddingBottom: '56.25%',
        },
        '.aspect-h-9': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        },
      });
    },
  ],
};
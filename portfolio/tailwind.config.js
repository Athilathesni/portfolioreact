/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-bubble': 'floatBubbles 5s ease-in infinite',

        blink: 'blink 1.5s infinite ease-in-out',
        'blink-dot': 'blink-dot 2s infinite ease-in-out',


        'gradient': 'gradientAnimation 15s ease infinite',
      },
      keyframes: {
        floatBubbles: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) scale(1.5)',
            opacity: '0',
          },
        },

        blink: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        'blink-dot': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },


        gradientAnimation: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      }, 



      backgroundSize: {
        '400': '400% 400%', // Make background gradient large for movement
      },
      colors: {
        'gradient-start': '#6a11cb',
        'gradient-end': '#2575fc',
      },
    },
  },
  plugins: [],
}


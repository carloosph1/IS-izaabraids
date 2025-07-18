/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./script.js", "./index.html"],
  theme: {
    fontFamily:{
      'sans':['Poppins', 'sans-serif']
    },


    extend: {
      keyframes: {
        flutuar: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        flutuar: 'flutuar 2s ease-in-out infinite',
      },

      colors: {
        'my-dark-brown': '#db997e',
        'my-golden-ochre': '#fff1e5',
        'my-bright-yellow': '#e7d8c9',
        'my-light-gold': '#a5a58d',
        'my-pale-yellow': '#b7b7a4',
        'my-marrom-médio': '#997b66',
        'my-marrom-escuro': '#4E3524',
        
        
      },

      backgroundImage:{
        "home": "url('/assets/bg.jpg')",
        
      }


    },
  },
  plugins: [],
}


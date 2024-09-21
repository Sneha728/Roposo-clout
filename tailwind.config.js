/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato','sans-serif'],
        PlayfairDisplay: ['Playfair Display', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif' , 'italic'],
      },
      boxShadow :{
        shadowDown:[ '0 -4px 6px -2px rgba(0, 0, 0, 0.1)']
      },
      clipPath: {
        'triangle-l': 'polygon(0 0, 100% 0, 0 100%)',
        'triangle-r': 'polygon(100% 0, 100% 100%, 0 100%)',
      }
      
      
      

     
      
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
}


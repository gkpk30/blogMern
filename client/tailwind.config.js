const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
       
        primary: ['Josefin', ...defaultTheme.fontFamily.sans],
        secondary: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        third: ['Lora', ...defaultTheme.fontFamily.serif],
        fourth: ['Varela Round', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'background-beige': '#f6f6f4',
        'monochromatic': '#DFDFD8',
        'secondary': '#54595F',
        'third' : '#3f4347',
        'text': '#7A7A7A',
        'textPrimary': '#444444',
        'textGold': '#b39656'
      },
      backgroundImage: {
        'login-BgImage': "url('/assets/images/ecological-hair-care-min.jpeg')",
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

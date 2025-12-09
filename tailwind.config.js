/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-scr': "url('/src/assets/img/LoginScreenBg.svg')",
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


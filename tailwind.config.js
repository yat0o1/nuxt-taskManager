/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#D7DBDE',
        darkGray: '#343A40',

        lightGray2: '#ECEEEF',
        lightBlack: '#1A1E21',

        white: '#FFFFFF',
        black: '#000000',

        primaryTextLight: '#212529',
        secondaryTextLight: '#495057',

        primarytextDark: '#F8F9FA',
        secondaryTextDark: '#CED4DA',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
    },
  },
}
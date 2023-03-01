/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue1': '#023047',
      'blue2': '#4D9ABD',
      'blue3': '#219EBC',
      'yellow1': '#FFB703',
      'yellow2': '#FB8500',
      'blue4': '#287aa2',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}
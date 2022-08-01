/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#3D6666',
        'primary-black': '#3E3E3E',
        'primary-gray': '#E8E8E8',
        'ligth-green': '#649DA4',
        'soft-green': '#CEDEE0',
        'dark-gray': '#6E6E6E',
        'base-gray': '#F6F6F6',
      },
    },
  },
  plugins: [],
};

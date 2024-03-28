/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-background-image': "url('/src/assets/featured.jpg')"
      }),
      colors: {
        customSalmon: '#EB8E78',
        'customGreen': '#5EAE53'
      },
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customSalmon: '#EB8E78',
        'customGreen': '#5EAE53'
      },
    },
  },
  plugins: [require("daisyui")],
}


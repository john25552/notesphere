/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{vue, js, ts, tsx, jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    })
  ],
}


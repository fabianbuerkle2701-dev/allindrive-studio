/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0C0C',
        chalk: '#EDE4D6',
        paper: '#FBF3E6',
        flame: '#FF9300',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        // Die Marke selbst: exakt die Wortmarkenschrift aus der App.
        brand: ['"Baloo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warmes, helles Palette wie in der App (die verkauft wird):
        ink: '#241A12',    // warmes Dunkelbraun fuer Text/Ueberschriften (nicht hartes Schwarz)
        chalk: '#EDE4D6',  // helle Schrift auf dem dunklen Video-Hero
        paper: '#FBF3E6',  // Creme-Grundflaeche
        cream: '#FFFDF9',  // fast weisse Karten/Abschnitte
        night: '#0C0C0C',  // nur noch fuer den Video-Hero-Hintergrund
        flame: '#FF9300',  // Markenorange
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

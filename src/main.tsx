import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Nur im Entwicklungsmodus: ?y=1800 springt nach dem ersten Rendern an diese
// Stelle. Gebraucht wird das fuer Aufnahmen der gescrollten Seite, denn ein
// Anker im Adressfeld greift nicht, solange React noch nicht gerendert hat.
// import.meta.env.DEV ist im Produktionsbau false, der Block faellt dabei weg.
if (import.meta.env.DEV) {
  const y = new URLSearchParams(location.search).get('y')
  if (y !== null) {
    const ziel = Number(y)
    let versuche = 0
    // Solange nachfassen, bis die Position wirklich sitzt: Die Seitenhoehe
    // steht erst fest, wenn die Bilder ihre Masse haben.
    const nachfassen = () => {
      window.scrollTo({ top: ziel, behavior: 'instant' })
      if (Math.abs(window.scrollY - ziel) > 2 && versuche++ < 80) {
        setTimeout(nachfassen, 100)
      }
    }
    setTimeout(nachfassen, 150)
  }
}

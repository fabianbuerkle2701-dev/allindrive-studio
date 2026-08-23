import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import KontaktPage from './pages/KontaktPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KontaktPage />
  </StrictMode>,
)

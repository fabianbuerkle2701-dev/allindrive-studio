import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImpressumPage from './pages/ImpressumPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImpressumPage />
  </StrictMode>,
)

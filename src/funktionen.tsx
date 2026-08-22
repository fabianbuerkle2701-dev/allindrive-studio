import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FunktionenPage from './pages/FunktionenPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FunktionenPage />
  </StrictMode>,
)

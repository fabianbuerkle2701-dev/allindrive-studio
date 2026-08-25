import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DatenschutzPage from './pages/DatenschutzPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DatenschutzPage />
  </StrictMode>,
)

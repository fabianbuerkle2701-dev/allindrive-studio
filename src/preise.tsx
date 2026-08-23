import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PreisePage from './pages/PreisePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreisePage />
  </StrictMode>,
)

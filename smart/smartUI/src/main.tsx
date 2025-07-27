import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import AppLayout from './components/MainLayout/AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App />
  </StrictMode >,
)

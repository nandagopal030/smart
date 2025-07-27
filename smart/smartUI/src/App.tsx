
import './App.css'
import AppLayout from './components/MainLayout/AppLayout'
import Router from './routes/Router'

import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
      <AppLayout />
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App

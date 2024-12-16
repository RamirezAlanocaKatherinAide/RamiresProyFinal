import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
  import Principal from './Prinicipal.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Principal></Principal>
  </BrowserRouter>,
)

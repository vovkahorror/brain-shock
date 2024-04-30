import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import './index.scss'

import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

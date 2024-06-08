import { BrowserRouter } from 'react-router-dom'

import { createRoot, hydrateRoot } from 'react-dom/client'

import './index.scss'

import { App } from './App'

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} else {
  createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

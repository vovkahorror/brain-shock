import { BrowserRouter } from 'react-router-dom'

import { ContextProvider } from '@/common/components/ContextProvider'
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
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  )
}

const originalWarn = console.warn

console.warn = function (message, ...args) {
  if (
    message.includes('lightGallery: 0000-0000-000-0000 license key is not valid for production use')
  ) {
    return
  }
  originalWarn.apply(console, [message, ...args])
}

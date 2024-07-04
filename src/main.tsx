import { BrowserRouter } from 'react-router-dom'

import { ContextProvider } from '@/common/components/ContextProvider'
import { generateSitemap } from '@/generate-sitemap'
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

generateSitemap()

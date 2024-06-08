import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'

import { App } from './App'

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  )
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  )
}

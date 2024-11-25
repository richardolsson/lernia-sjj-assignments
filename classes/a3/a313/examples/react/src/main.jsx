import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  createElement(StrictMode, {}, [createElement(App)])
)

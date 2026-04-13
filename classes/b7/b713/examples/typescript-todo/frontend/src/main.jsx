import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

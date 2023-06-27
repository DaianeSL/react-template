import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './styles/global.css'

const rootNode = document.getElementById('root')

if (rootNode != null) {
  createRoot(rootNode).render(<App />)
}

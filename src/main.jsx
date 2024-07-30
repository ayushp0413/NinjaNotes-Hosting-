import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <GeistProvider>
    <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </GeistProvider>
)

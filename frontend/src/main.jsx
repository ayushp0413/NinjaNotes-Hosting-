import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "aos/dist/aos.css"
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactDOM.createRoot(document.getElementById('root')).render(

  <GeistProvider>
    <CssBaseline />
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
  </GeistProvider>
)

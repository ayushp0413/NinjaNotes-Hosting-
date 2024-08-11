import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "aos/dist/aos.css"
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/index.js'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
})


ReactDOM.createRoot(document.getElementById('root')).render(

  <GeistProvider>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </GeistProvider>
)

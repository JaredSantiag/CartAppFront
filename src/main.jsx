import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <CartApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

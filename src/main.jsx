import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import AuthProvider from './components/providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-5xl mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>,
)

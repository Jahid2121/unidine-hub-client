import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'
import AuthProvider from './components/providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
    
    </div>
  </React.StrictMode>,
)

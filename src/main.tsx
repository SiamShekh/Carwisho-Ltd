import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import DomRoutes from './routes.tsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div data-theme="garden" >
      <RouterProvider router={DomRoutes} />
      <Toaster />
    </div>
  </React.StrictMode>,
)

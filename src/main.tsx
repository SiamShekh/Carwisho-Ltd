import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import DomRoutes from './routes.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div data-theme="garden" >
      <RouterProvider router={DomRoutes} />
    </div>
  </React.StrictMode>,
)

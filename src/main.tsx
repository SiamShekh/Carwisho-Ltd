import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import DomRoutes from './routes.tsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import ReduxStore from './components/rtk/ReduxStore.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div data-theme="garden" >
      <Provider store={ReduxStore}>
        <RouterProvider router={DomRoutes} />
        <Toaster />
      </Provider>
    </div>
  </React.StrictMode>,
)

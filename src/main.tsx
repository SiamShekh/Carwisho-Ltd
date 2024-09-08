import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import DomRoutes from './routes.tsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import ReduxStore, { persistor } from './components/rtk/ReduxStore.tsx'
import { PersistGate } from 'redux-persist/lib/integration/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div data-theme="nord">
      <PersistGate persistor={persistor}>
        <Provider store={ReduxStore}>
            <RouterProvider router={DomRoutes} />
          <Toaster />
        </Provider>
      </PersistGate>
    </div>
  </React.StrictMode >,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Only disable devtools in production
// if (process.env.NODE_ENV === 'production') disableReactDevTools()

// Create a data router
const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />, // App should include nested <ScrollRestoration />, <Routes />, etc.
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)

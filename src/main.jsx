import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"

// Create a data router
const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />, // App should include nested <ScrollRestoration />, <Routes />, etc.
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

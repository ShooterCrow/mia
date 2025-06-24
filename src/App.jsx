import { useState } from 'react'
import { ThemeProvider, useTheme } from './components/ThemeProvider'
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './features/pages/Home';

function App() {

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components'
import * as pages from './pages'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      <AnimatePresence initial={false} mode='wait'>
        <Routes key={location.key} location={location}>
          <Route path='/' element={<Navbar />}>
            <Route index element={<pages.Home />} />
            <Route path='work' element={<pages.Work />} />
            <Route path='research' element={<pages.Research />} />
            <Route path='contact' element={<pages.Contact />} />
            <Route path='*' element={<pages.NoMatch />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
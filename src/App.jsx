import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home' 
import Discover from './pages/Discover' 
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      
    </div>
  )
}

export default App

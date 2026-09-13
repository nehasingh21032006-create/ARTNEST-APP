import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home' 
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App

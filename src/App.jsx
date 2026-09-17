import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home' 
import { Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import CollectionsHero from "./pages/Curratedcollection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsHero />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

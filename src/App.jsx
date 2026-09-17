import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home' 
import Discover from './pages/Discover' 
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import AdminDashboard from './Pages/Admin Dashboard/AdminDashboard'
import { Routes } from 'react-router-dom'


const App = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />}

    </div>
  )
}

export default App

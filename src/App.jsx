import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ArtistReg from './Components/auth/artistReg'
import BuyerReg from './Components/auth/buyerReg'
import BuyerLogin from './Components/auth/buyerLogin'
import ArtistLogin from './Components/auth/artistLogin'
import BuyerForgotPassword from './Components/auth/buyerForgot'
import ArtistForgotPassword from './Components/auth/artistForgot'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Discover from './pages/Discover'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import AdminDashboard from './Pages/Admin Dashboard/AdminDashboard'

const App = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isAuthRoute =
    location.pathname === '/register/artist' ||
    location.pathname === '/register/buyer' ||
    location.pathname === '/login/buyer' ||
    location.pathname === '/login/artist' ||
    location.pathname === '/forgot-password/buyer' ||
    location.pathname === '/forgot-password/artist'
  const hideNavFooter = isAdminRoute || isAuthRoute

  return (
    <div>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register/artist" element={<ArtistReg />} />
        <Route path="/register/buyer" element={<BuyerReg />} />
        <Route path="/login/buyer" element={<BuyerLogin />} />
        <Route path="/login/artist" element={<ArtistLogin />} />
        <Route path="/forgot-password/buyer" element={<BuyerForgotPassword />} />
        <Route path="/forgot-password/artist" element={<ArtistForgotPassword />} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </div>
  )
}

export default App
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
import Sculptures from './Pages/Sculptures'
import Artists from './Pages/Artists'
import Collections from './Pages/Collections'
import Cart from './om-pages/Cart'
import Wishlist from './om-pages/Wishlist'
import CustomArt from './om-pages/CustomArt'
import MyOrders from './om-pages/MyOrders'
import Profile from './Pages/Profile'
import AboutUs from './Pages/AboutUs'
import AdminLayout from './Pages/Admin Dashboard/AdminLayout'
import Overview from './Pages/Admin Dashboard/Overview'
import ArtistsData from './Pages/Admin Dashboard/Artists'
import ArtworksData from './Pages/Admin Dashboard/Artworks'
import SculpturesData from './Pages/Admin Dashboard/Sculptures'
import CollectionsData from './Pages/Admin Dashboard/Collections'
import Orders from './Pages/Admin Dashboard/Orders'
import CustomArtRequests from './Pages/Admin Dashboard/CustomArtRequests'
import Users from './Pages/Admin Dashboard/Users'
import Reviews from './Pages/Admin Dashboard/Reviews'
import Payments from './Pages/Admin Dashboard/Payments'
import Reports from './Pages/Admin Dashboard/Reports'
import Messages from './Pages/Admin Dashboard/Messages'
import AdminSettings from './Pages/Admin Dashboard/Settings'




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

        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/curated-collections" element={<Collections />} />
        <Route path="/custom-art" element={<CustomArt />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Overview />} />
                  <Route path="artistsdata" element={<ArtistsData />} />
                  <Route path="artworksdata" element={<ArtworksData />} />
                  <Route path="sculpturesdata" element={<SculpturesData />} />
                  <Route path="collectionsdata" element={<CollectionsData />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="custom-art" element={<CustomArtRequests />} />
                  <Route path="users" element={<Users />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="payments" element={<Payments />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="messages" element={<Messages />} />
                  <Route path="settings" element={<AdminSettings />} />
                </Route>


        
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



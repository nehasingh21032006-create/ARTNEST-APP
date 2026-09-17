import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "../src/Pages/Public/Home/Home";
// import Discover from "../src/Pages/Public/Discover";
// import Artists from "../pages/public/Artists";
// import About from "./pages/public/About";
// import CustomArt from "./pages/public/CustomArt";
// import Sculptures from "./pages/public/Sculptures";
// import Collections from "./pages/public/Collections";
// import ArtworkDetail from "./pages/artwork/ArtworkDetail";
// import ArtistProfile from "./pages/artist/ArtistProfile";
// import BuyerLogin from "./pages/auth/BuyerLogin";
// import BuyerRegister from "./pages/auth/BuyerRegister";
// import ArtistLogin from "./pages/auth/ArtistLogin";
// import ArtistRegister from "./pages/auth/ArtistRegister";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import Wishlist from "./pages/buyer/Wishlist";
// import Cart from "./pages/buyer/Cart";
// import Checkout from "./pages/buyer/Checkout";
// import OrderSuccess from "./pages/buyer/OrderSuccess";
// import BuyerProfile from "./pages/buyer/BuyerProfile";
// import Orders from "./pages/buyer/Orders";
// import OrderDetails from "./pages/buyer/OrderDetails";
// import Messaging from "./pages/messaging/Messaging";
// import ArtistDashboard from "./pages/artistDashboard/ArtistDashboard";
// import MyArtworks from "./pages/artistDashboard/MyArtworks";
// import AddArtwork from "./pages/artistDashboard/AddArtwork";
// import EditArtwork from "./pages/artistDashboard/EditArtwork";
// import ArtistOrders from "./pages/artistDashboard/ArtistOrders";
// import CustomRequests from "./pages/artistDashboard/CustomRequests";
// import ArtistMessages from "./pages/artistDashboard/ArtistMessages";
// import Earnings from "./pages/artistDashboard/Earnings";
// import Analytics from "./pages/artistDashboard/Analytics";
// import ArtistProfileSettings from "./pages/artistDashboard/ArtistProfileSettings";
// import ArtistSettings from "./pages/artistDashboard/ArtistSettings";
// import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
// import Users from "./pages/adminDashboard/Users";
// import ArtistsManagement from "./pages/adminDashboard/ArtistsManagement";
// import ArtistVerification from "./pages/adminDashboard/ArtistVerification";
// import ArtworkManagement from "./pages/adminDashboard/ArtworkManagement";
// import SculptureManagement from "./pages/adminDashboard/SculptureManagement";
// import OrderManagement from "./pages/adminDashboard/OrderManagement";
// import Categories from "./pages/adminDashboard/Categories";
// import CollectionsManagement from "./pages/adminDashboard/CollectionsManagement";
// import CustomRequestsManagement from "./pages/adminDashboard/CustomRequestsManagement";
// import Reports from "./pages/adminDashboard/Reports";
// import AdminMessages from "./pages/adminDashboard/AdminMessages";
// import AdminSettings from "./pages/adminDashboard/AdminSettings";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import ArtistRoute from "./routes/ArtistRoute";
// import AdminRoute from "./routes/AdminRoute";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        {/* <Route
          path="/discover"
          element={
            <>
              <Navbar />
              <Discover />
              <Footer />
            </>
          }
        />

        <Route
          path="/artists"
          element={
            <>
              <Navbar />
              <Artists />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/custom-art"
          element={
            <>
              <Navbar />
              <CustomArt />
              <Footer />
            </>
          }
        />

        <Route
          path="/sculptures"
          element={
            <>
              <Navbar />
              <Sculptures />
              <Footer />
            </>
          }
        />

        <Route
          path="/collections"
          element={
            <>
              <Navbar />
              <Collections />
              <Footer />
            </>
          }
        />

        <Route
          path="/artwork/:id"
          element={
            <>
              <Navbar />
              <ArtworkDetail />
              <Footer />
            </>
          }
        />

        <Route
          path="/artist/:id"
          element={
            <>
              <Navbar />
              <ArtistProfile />
              <Footer />
            </>
          }
        />

        <Route
          path="/buyer/login"
          element={<BuyerLogin />}
        />

        <Route
          path="/buyer/register"
          element={<BuyerRegister />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/artist/login"
          element={<ArtistLogin />}
        />

        <Route
          path="/artist/register"
          element={<ArtistRegister />}
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Navbar />
              <Wishlist />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Navbar />
              <Cart />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Navbar />
              <Checkout />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <Navbar />
              <OrderSuccess />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <BuyerProfile />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Navbar />
              <Orders />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <Navbar />
              <OrderDetails />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Navbar />
              <Messaging />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/artist/dashboard"
          element={
            <ArtistRoute>
              <ArtistDashboard />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/artworks"
          element={
            <ArtistRoute>
              <MyArtworks />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/artworks/add"
          element={
            <ArtistRoute>
              <AddArtwork />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/artworks/edit/:id"
          element={
            <ArtistRoute>
              <EditArtwork />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/orders"
          element={
            <ArtistRoute>
              <ArtistOrders />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/custom-requests"
          element={
            <ArtistRoute>
              <CustomRequests />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/messages"
          element={
            <ArtistRoute>
              <ArtistMessages />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/earnings"
          element={
            <ArtistRoute>
              <Earnings />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/analytics"
          element={
            <ArtistRoute>
              <Analytics />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/profile-settings"
          element={
            <ArtistRoute>
              <ArtistProfileSettings />
            </ArtistRoute>
          }
        />

        <Route
          path="/artist/settings"
          element={
            <ArtistRoute>
              <ArtistSettings />
            </ArtistRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/artists"
          element={
            <AdminRoute>
              <ArtistsManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/artists/verification"
          element={
            <AdminRoute>
              <ArtistVerification />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/artworks"
          element={
            <AdminRoute>
              <ArtworkManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/sculptures"
          element={
            <AdminRoute>
              <SculptureManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <OrderManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <AdminRoute>
              <Categories />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/collections"
          element={
            <AdminRoute>
              <CollectionsManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/custom-requests"
          element={
            <AdminRoute>
              <CustomRequestsManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <AdminRoute>
              <Reports />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <AdminRoute>
              <AdminMessages />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminRoute>
              <AdminSettings />
            </AdminRoute>
          }
        /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
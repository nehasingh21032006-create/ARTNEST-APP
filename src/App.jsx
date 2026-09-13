import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import heroImg from "./assets/hero.png";
import ArtistProfile from './pages/ArtistProfile';

// Add this inside <Routes>:
<Route path="/artist/:id" element={<ArtistProfile />} />

function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BagDetails from './Pages/BagDetails';
import Cart from './Pages/Cart';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag/:id" element={<BagDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
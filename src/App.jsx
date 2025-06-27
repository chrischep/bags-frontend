import { Routes, Route } from 'react-router-dom';
import BagDetails from './Pages/BagDetails';
import BagsList from './Pages/BagsList';
import Cart from './Pages/Cart';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="custom-style">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<BagsList />} />
          <Route path="/bag/:id" element={<BagDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
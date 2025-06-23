import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BagDetails from './Pages/BagDetails';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bag/:id" element={<BagDetails />} />
    </Routes>
  );
}

export default App;
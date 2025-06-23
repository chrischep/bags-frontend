import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="app-navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/cart" className="nav-link">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

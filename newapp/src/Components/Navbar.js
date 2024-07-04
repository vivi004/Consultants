import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
const Navbar = ({ isLoggedIn }) => {
  return (
    
    <nav className="navbar">
      <div className="navbar-title">
        <span className="blue-text title-text">BLUESTONE</span> <span className="green-text title-text">OVERSEAS CONSULTANTS</span>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/consultantform">Our Services</Link></li>
        <li><Link to="/consultantform">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

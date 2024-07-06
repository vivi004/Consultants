import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
const MainNav = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
    <div className="navbar-title">
      <span className="blue-text title-text">BLUESTONE</span>{' '}
      <span className="green-text title-text">OVERSEAS CONSULTANTS</span>
    </div>

    <div className="lin">
    <Link to="/">
    <button>Courses</button>
    </Link>
    
    
    <Link to="/">
    <button>About</button>
    </Link>
    
    <Link to="/">
    <button>Services</button>
    </Link>

    <Link to="/consultantform">
    <button>Register</button>
    </Link>
    </div>
    
  </nav>
  );
}

export default MainNav;

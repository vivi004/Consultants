import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import logo from "../Assets/Images/logo.jpg";
const MainNav = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
    <img src={logo} className="logo" alt="Logo" height="70px" width="700px" />
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

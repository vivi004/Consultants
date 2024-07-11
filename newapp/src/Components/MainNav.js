import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/MainNav.css';
import logo from "../Assets/Images/logo.jpg";
const MainNav = ({ isLoggedIn }) => {
  return (
    <nav className="mnavbar">
    <img src={logo} className="logo" alt="Logo" height="70px" width="700px" />
    <div className="mlin">
    <Link to="/">
    <button>Courses</button>
    </Link>
    
    
    <Link to="/aboutpage">
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

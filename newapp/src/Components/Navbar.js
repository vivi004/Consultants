import React from 'react';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import '../Css/Navbar.css'; 
import logo from '../Assets/Images/logo.jpg';
const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
    <img src={logo} className="logo" alt="Logo" height="70px" width="700px" />
     

      <div className="lin">
      <Link to="/">
      <button>Home</button>
      </Link>
      
      
      <Link to="/login">
      <button>Help</button>
      </Link>
      
      <Link to="/login">
      <button>Login</button>
      </Link>
      
      <Link to="/signup">
      <button>Sign Up</button>
      </Link>
      </div>
      
    </nav>
  );
}

export default Navbar;

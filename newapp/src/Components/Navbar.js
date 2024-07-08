import React from 'react';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import '../Css/Navbar.css';
import { Focus } from 'lucide-react';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
      <Focus color="black"/>
      <span className="blue-text title-text">BLUESTONE</span>{' '}
        <span className="green-text title-text">OVERSEAS CONSULTANTS</span>
      </div>

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

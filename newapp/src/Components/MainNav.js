import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import { Focus } from 'lucide-react';

const MainNav = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
    <div className="navbar-title">
    <Focus color="black"/>

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

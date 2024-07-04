import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/LoginPage.css';
const LoginPage = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    // Perform login logic here (e.g., validate credentials)
    setIsLoggedIn(true);
  };

  return (

    <div className="page-contents">
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form className="login-form">
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        
        <div className="form-button-container">
          <Link to="/consultantform" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <button className="login-button" onClick={handleLogin}>Login</button>
          </Link>
        </div>
      </form>
      <div className="signup-link">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/SignUpPage.css'
import Navbar from './Navbar';
const SignUpPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="page-contents">
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <form className="signup-form">
        {/* Form fields for sign up */}
        <label>Username:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <div style={{ textAlign: 'center' }}> {/* Center aligning container */}
          <Link to="/login">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
      </form>
      <div className="login-link">
        <p style={{ textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignUpPage;

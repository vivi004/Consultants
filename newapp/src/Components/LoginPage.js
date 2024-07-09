import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/LoginPage.css';
import axios from 'axios';
import Navbar from './Navbar';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Replace with your actual API endpoint for login
    axios.post('https://sheet.best/api/sheets/12283d44-281f-42f8-8bd6-ba8e0900e285', formData)
      .then(response => {
        console.log('Login Response:', response);
        setFormData({
         username: '',
    password: ''
        });
        // Optionally handle login success, e.g., redirect to dashboard
        alert('Login successful!');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        alert('Failed to log in. Please check your credentials.');
      });
  };

  return (
    <div>
    <Navbar/>
    <div className="page-contents">
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
        <div className="form-button-container">
        <Link to="/mainpage" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
          <button className="login-button" >Login</button>
        </Link>
      </div>

      </form>
      <div className="signup-link">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;

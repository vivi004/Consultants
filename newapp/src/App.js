import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import ConsultantFormPage from './Components/ConsultantFormPage';
import './Css/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    
    <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/consultantform" element={<ConsultantFormPage />} />
          </Routes>
    </Router>
  );
}

export default App;
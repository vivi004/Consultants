import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import ConsultantFormPage from './Components/ConsultantFormPage';
import MainPage from './Components/MainPage';
import './Css/App.css';
import HelpPage from './Components/HelpPage';
import AboutPage from './Components/AboutPage';

const App = () => {
  const [setIsLoggedIn] = useState(false);

  return (
    
    <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/consultantform" element={<ConsultantFormPage />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/helppage" element={<HelpPage/>} />
            <Route path="/aboutpage" element={<AboutPage/>} />

          </Routes>
    </Router>
  );
}

export default App;
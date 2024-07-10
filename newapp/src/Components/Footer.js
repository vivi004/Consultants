import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-rows">
        {/* Row 1: Company Info */}
        <div className="footer-row">
          <div className="footer-section">
            <h3>Company Info</h3>
            <p>Your Company Name</p>
            <p>123 Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        
        {/* Row 2: Quick Links */}
        <div className="footer-row">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Row 3: Follow Us */}
        <div className="footer-row">
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <ul>
                <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
                <li><a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
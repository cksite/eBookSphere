import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
          <li><Link to="/terms-of-use" className="footer-link">Terms of Use</Link></li>
          <li><Link to="/disclaimer" className="footer-link">Disclaimer</Link></li>
          <li><Link to="/shipping-policy" className="footer-link">Shipping and Delivery Policy</Link></li>
          <li><Link to="/refund-policy" className="footer-link">Refund and Cancellation Policy</Link></li>
          <li><Link to="/services" className="footer-link">Services</Link></li>
          <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
        </ul>
        <p className="footer-text">&copy; 2024 eBookSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

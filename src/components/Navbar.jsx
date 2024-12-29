import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu if clicked outside
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="assets/logom.jpg" alt="Logo" className="logo-img" />
          <span className="logo-text">eBookSphere</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}  ref={menuRef}>
          <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`} ref={menuRef}>
          <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file for Navbar styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">E-Portfolio</NavLink>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-link" activeClassName="active-link">Projects</NavLink>
        </li>
      
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;

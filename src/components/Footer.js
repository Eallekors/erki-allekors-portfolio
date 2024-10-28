import React from 'react';
import './Footer.css'; // Importing CSS file for Footer styling

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h3>Your Name</h3>
        <p>Building quality web experiences and passionate about front-end development.</p>
      </div>
      
      <div className="footer-social">
        <h4>Connect with Me</h4>
        <ul className="social-links">
          <li>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact Information</h4>
        <p>Email: your.email@example.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;

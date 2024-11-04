import React from 'react';
import './Footer.css'; // Importing CSS file for Footer styling
import CV from '../assets/CV.pdf';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h3>Erki Allekõrs</h3>
        <p>Building quality web experiences and passionate about full-stack development.</p>
        <a href={CV} target="_blank" rel="noopener noreferrer" > Check out my CV</a>

      </div>
      
      <div className="footer-social">
        <h4>Connect with Me</h4>
        <ul className="social-links">
          <li>
            <a href="https://github.com/Eallekors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/erki-allek%C3%B5rs-344aa0273/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
         
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact Information</h4>
        <p>Email: erki.allekors@gmail.com</p>
        <p>Phone: +372 5333 2227</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Erki Allekõrs. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;

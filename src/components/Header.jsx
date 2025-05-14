import React from 'react';
import '../styles/Header.css';

const Header = ({ onContactClick }) => {
  return (
    <div>
      <div className="border-container">
        <div className="name">
          <span>Ashutosh Bhagat</span>
        </div>
        <div className="social-links">
          <a href="https://github.com/Ashutoshbhagat140275" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-bhagat-b6a22b299/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/ashbhagat/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i>
          </a>
          {/* Phone Icon */}
          <a href="#contact" onClick={(e) => { e.preventDefault(); onContactClick(); }}>
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Welcome to My Portfolio</h1>
          <p className="header-subtitle">Showcasing my journey in Web Development and AI/ML</p>
          <nav>
            <ul className="header-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
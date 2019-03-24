import React from 'react';
import './style.scss';

const Navbar = () => (
  <div className="hero">
    <nav className="navbar">
      <div className="container">
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-start">
            <span className="navbar-item">
              <a href="#projects">Projects</a>
            </span>
            <span className="navbar-item">
              <a href="#projects">About</a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
import React from 'react';
import logo from '../assets/LOGO.png';
import '../style/header.scss'; 

function Header({ isHousingDetail }) {
  return (
    <header className={`header ${isHousingDetail ? 'header-housing-detail' : ''}`}>
      <img src={logo} alt="Kasa logo" className="header-logo" />
      <nav>
        <ul className="header-nav">
          <li><a href="/">ACCUEIL</a></li>
          <li><a href="/about">A PROPOS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import logo from '../assets/LOGO.png';
import '../style/header.scss'; 

function Header({ isHousingDetail }) {
  return (
    <header className={`header ${isHousingDetail ? 'header-housing-detail' : ''}`}>
      <li>
        <a href="/"><img src={logo} alt="Kasa logo" className="header-logo" /></a>
      </li>
      <nav>
        <ul className="header-nav">
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">A propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../style/header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header-logo" />
      <nav>
        <ul className="header-nav">
          <li><Link to="/">ACCUEIL</Link></li>
          <li><Link to="/about">A PROPOS</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Vector.png';
import '../style/notFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <header className="not-found-header">
        <img src={logo} alt="Kasa logo" className="not-found-logo" />
        <nav>
          <ul className="not-found-nav">
            <li><Link to="/">ACCUEIL</Link></li>
            <li><Link to="/about">A PROPOS</Link></li>
          </ul>
        </nav>
      </header>
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <footer className="not-found-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default NotFound;

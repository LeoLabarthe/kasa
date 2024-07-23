import React from 'react';
import '../style/main.scss';
import '../style/layout.scss';
import '../App.scss';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src="./assets/logo.svg" alt="Kasa logo" className="home-logo" />
        <nav>
          <ul className="home-nav">
            <li><a href="/">ACCUEIL</a></li>
            <li><a href="/about">A PROPOS</a></li>
          </ul>
        </nav>
      </header>
      <div className="home-banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="home-listings">
        <div className="listing-card">Titre de la location</div>
        <div className="listing-card">Titre de la location</div>
        <div className="listing-card">Titre de la location</div>
      </div>
      <footer className="home-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Home;

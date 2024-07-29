import React from 'react';
import logo from '../assets/Vector.png';
import Banner from '../components/Banner';
import '../style/main.scss';
import '../style/layout.scss';
import '../App.scss';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="Kasa logo" className="home-logo" />
        <nav>
          <ul className="home-nav">
            <li><a href="/">ACCUEIL</a></li>
            <li><a href="/about">A PROPOS</a></li>
          </ul>
        </nav>
      </header>
      <Banner text="Chez vous, partout et ailleurs" />
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

import React from 'react';
import logo from '../assets/LOGO.png';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../style/main.scss';
import '../style/layout.scss';
import '../style/home.scss'; // Import de home.scss
import '../App.scss';
import accommodations from '../data/accommodations.json';

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
      <div className="home-listings-container">
        <div className="home-listings-container-listings">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              id={accommodation.id}
              cover={accommodation.cover}
              title={accommodation.title}
              className="listing-card"
            />
          ))}
        </div>
      </div>
      <footer className="home-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Home;

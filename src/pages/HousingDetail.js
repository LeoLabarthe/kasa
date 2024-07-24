import React from 'react';
import logo from '../assets/logo.svg';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';
import '../style/housingDetail.scss';

function HousingDetails() {
  const accordionItems = [
    { title: 'Description', content: 'Ce logement est parfait pour vos vacances.' },
    { title: 'Équipements', content: 'WiFi, Télévision, Cuisine équipée, etc.' },
  ];

  return (
    <div className="housing-detail">
      <header className="housing-detail-header">
        <img src={logo} alt="Kasa logo" className="housing-detail-logo" />
        <nav>
          <ul className="housing-detail-nav">
            <li><a href="/">ACCUEIL</a></li>
            <li><a href="/about">A PROPOS</a></li>
          </ul>
        </nav>
      </header>
      <Banner text="Détails du logement" />
      <div className="housing-detail-content">
        {accordionItems.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
      <footer className="housing-detail-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default HousingDetails;

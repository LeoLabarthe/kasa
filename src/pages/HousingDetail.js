import React from 'react';
import { useParams } from 'react-router-dom';
import logo from '../assets/Vector.png';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import accommodations from '../data/accommodations.json';
import '../style/housingDetail.scss';

function HousingDetail() {
  const { id } = useParams();
  const accommodation = accommodations.find(item => item.id === id);

  if (!accommodation) {
    return <div>Logement non trouvé</div>;
  }

  const accordionItems = [
    { title: 'Description', content: accommodation.description },
    { title: 'Équipements', content: accommodation.equipments.join(', ') },
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
      <Carousel pictures={accommodation.pictures} />
      <div className="housing-detail-content">
        <h1>{accommodation.title}</h1>
        <p>{accommodation.location}</p>
        <div className="tags">
          {accommodation.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="housing-detail-info">
          <div className="rating">
            {[...Array(5)].map((star, index) => (
              <span key={index} className={`star ${index < accommodation.rating ? 'filled' : ''}`}>&#9733;</span>
            ))}
          </div>
          <div className="host">
            <span>{accommodation.host.name}</span>
            <img src={accommodation.host.picture} alt={accommodation.host.name} className="host-img" />
          </div>
        </div>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
      <footer className="housing-detail-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default HousingDetail;

import React, { useState } from 'react';
import '../style/layout.scss';
import logo from '../assets/logo.svg';
import bannerImage from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';

function About() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = index => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter(i => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="about">
      <header className="about-header">
        <img src={logo} alt="Kasa logo" className="about-logo" />
        <nav>
          <ul className="about-nav">
            <li><a href="/">ACCUEIL</a></li>
            <li><a href="/about">A PROPOS</a></li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className="about-details">
        <div className="accordion">
          {['Fiabilité', 'Respect', 'Service', 'Sécurité'].map((title, index) => (
            <div className="accordion-item" key={index}>
              <button
                className={`accordion-button ${activeIndices.includes(index) ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {title}
              </button>
              <div className={`accordion-content ${activeIndices.includes(index) ? 'active' : ''}`}>
                <p>
                  {title === 'Fiabilité' && 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}
                  {title === 'Respect' && 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
                  {title === 'Service' && 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}
                  {title === 'Sécurité' && 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="about-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default About;

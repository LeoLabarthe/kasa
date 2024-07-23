import React from 'react';
import logo from '../assets/logo.svg';
import '../style/housingDetail.scss';

function HousingDetail() {
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
      <div className="housing-detail-banner">
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg" alt="Housing" className="housing-detail-banner-img" />
      </div>
      <div className="housing-detail-content">
        <h1>Cozy loft, on the romantic Canal Saint-Martin</h1>
        <p>Paris, Île-de-France</p>
        <div className="tags">
          <span className="tag">Cozy</span>
          <span className="tag">Canal</span>
          <span className="tag">Paris 10</span>
        </div>
        <div className="housing-detail-info">
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
          </div>
          <div className="host">
            <span>Alexandre Dumas</span>
            <img src="https://via.placeholder.com/50" alt="Host" className="host-img" />
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-button">Description</button>
            <div className="accordion-content">
              <p>Description du logement.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">Équipements</button>
            <div className="accordion-content">
              <p>Liste des équipements.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="housing-detail-footer">
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default HousingDetail;

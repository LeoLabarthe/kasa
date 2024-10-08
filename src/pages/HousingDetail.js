import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Rating from '../components/Rating';
import accommodations from '../data/accommodations.json';
import '../style/housingDetail.scss';

function HousingDetail() {
  const { id } = useParams();
  
  const [accordionState, setAccordionState] = useState({
    description: false,
    equipments: false
  });

  const accommodation = accommodations.find(item => item.id === id);

  if (!accommodation) {
    return <Navigate to="/not-found" replace />;
  }

  const toggleAccordion = (accordionName) => {
    setAccordionState(prevState => ({
      ...prevState,
      [accordionName]: !prevState[accordionName]
    }));
  };

  return (
    <div className="housing-detail">
      <Header isHousingDetail={true} />
      <Carousel pictures={accommodation.pictures} />

      <div className="housing-detail-content">
        <div className="text-section">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <div className="tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-section">
          <div className="host">
            <img src={accommodation.host.picture} alt={accommodation.host.name} className="host-img" />
            <span>{accommodation.host.name}</span>
          </div>
          <Rating rating={parseInt(accommodation.rating)} />
        </div>
      </div>

      <div className="accordion-container">
        <div className="accordion-group">
          <Accordion
            title="Description"
            content={accommodation.description}
            isOpen={accordionState.description}
            onToggle={() => toggleAccordion('description')}
          />
        </div>
        <div className="accordion-group">
          <Accordion
            title="Équipements"
            content={accommodation.equipments.join(', ')}
            isOpen={accordionState.equipments}
            onToggle={() => toggleAccordion('equipments')}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HousingDetail;

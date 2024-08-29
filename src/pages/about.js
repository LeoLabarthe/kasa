import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import '../style/about.scss';
import aboutBanner from '../assets/about-banner.png';

function About() {
  const accordionItems = [
    { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', content: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.' },
    { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="about">
      <Header />
      <Banner image={aboutBanner} showText={false} />
      <div className="about-details">
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndexes.includes(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

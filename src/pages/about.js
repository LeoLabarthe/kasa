import React from 'react';
import logo from '../assets/LOGO.png';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';
import '../style/about.scss';
import Footer from '../components/Footer';

function About() {
  const accordionItems = [
    { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', content: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.' },
    { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' },
  ];

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
      <Banner text="Chez vous, partout et ailleurs" />
      <div className="about-details">
        {accordionItems.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;

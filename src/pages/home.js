import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../style/main.scss';
import '../style/home.scss';
import '../App.scss';
import accommodations from '../data/accommodations.json';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Home;

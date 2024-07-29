import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/carousel.scss';

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={picture} alt="Logement" className="carousel-image" />
          )}
        </div>
      ))}
      <button onClick={prevSlide} className="left-arrow">&#10094;</button>
      <button onClick={nextSlide} className="right-arrow">&#10095;</button>
      <div className="carousel-indicator">
        {`${current + 1}/${pictures.length}`}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;

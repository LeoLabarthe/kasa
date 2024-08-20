import React from 'react';
import PropTypes from 'prop-types';
import fullStar from '../assets/star.png';
import emptyStar from '../assets/star-inactive.png';
import '../style/rating.scss';

function Rating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? fullStar : emptyStar}
        alt={i < rating ? 'Full Star' : 'Empty Star'}
        className="star"
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/components/cards.scss';

function Card({ id, cover, title }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <span className="card-title">{title}</span>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;

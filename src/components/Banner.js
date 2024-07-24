import React from 'react';
import PropTypes from 'prop-types';
import bannerImage from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import '../style/components/banner.scss';

function Banner({ text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>{text}</h1>
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Banner;

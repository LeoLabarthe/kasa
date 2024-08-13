import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/banner.scss';

function Banner({ text, image, showText = true }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {showText && <h1>{text}</h1>}
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
  showText: PropTypes.bool,
};

export default Banner;

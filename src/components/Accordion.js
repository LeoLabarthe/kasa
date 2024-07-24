import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/components/accordion.scss';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className={`accordion-button ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
        {title}
        <span className={`accordion-arrow ${isOpen ? 'active' : ''}`}></span>
      </button>
      <div className={`accordion-content ${isOpen ? 'active' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;

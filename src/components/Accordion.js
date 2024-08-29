import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/accordion.scss';

function Accordion({ title, content, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button
        className={`accordion-button ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
      >
        {title}
        <span className={`accordion-arrow ${isOpen ? 'active' : ''}`}></span>
      </button>
      {isOpen && (
        <div className='accordion-content'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Accordion;
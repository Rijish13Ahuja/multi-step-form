import React from 'react';
import './Nav.css';

const Nav = ({ step, handleNext, handleBack, handleSubmit }) => {
  return (
    <div className="nav-container">
      {step > 1 && (
        <button onClick={handleBack} className="nav-button">
          Back
        </button>
      )}
      {step < 3 ? (
        <button onClick={handleNext} className="nav-button">
          Next
        </button>
      ) : (
        <button onClick={handleSubmit} className="nav-button">
          Submit
        </button>
      )}
    </div>
  );
};

export default Nav;

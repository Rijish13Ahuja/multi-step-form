import React from 'react';
import './step3.css';

const Step3 = ({ formData }) => {
  return (
    <div className="step-container">
      <h2>Step 3: Confirmation</h2>
      <div className="confirmation-section">
        <div>
          <h3>Personal Information</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>
        <div>
          <h3>Address Information</h3>
          <p>Address Line 1: {formData.address1}</p>
          <p>Address Line 2: {formData.address2}</p>
          <p>City: {formData.city}</p>
          <p>State: {formData.state}</p>
          <p>Zip Code: {formData.zip}</p>
        </div>
      </div>
    </div>
  );
};

export default Step3;

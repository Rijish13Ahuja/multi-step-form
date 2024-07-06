import React from 'react';
import './step2.css';

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="step-container">
      <h2>Step 2: Address Information</h2>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className={errors.address1 ? 'error-input' : ''}
        />
        {errors.address1 && <span className="error-msg">{errors.address1}</span>}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? 'error-input' : ''}
        />
        {errors.city && <span className="error-msg">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={errors.state ? 'error-input' : ''}
        />
        {errors.state && <span className="error-msg">{errors.state}</span>}
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className={errors.zip ? 'error-input' : ''}
        />
        {errors.zip && <span className="error-msg">{errors.zip}</span>}
      </div>
    </div>
  );
};

export default Step2;

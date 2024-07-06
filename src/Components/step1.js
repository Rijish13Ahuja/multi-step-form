import React from 'react';
import './step1.css';

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div className="step-container">
      <h2>Step 1: Personal Information</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error-input' : ''}
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error-input' : ''}
        />
        {errors.phone && <span className="error-msg">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default Step1;

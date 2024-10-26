// src/DisplaySquaredValue.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';


const DisplaySquaredValue = () => {
  const location = useLocation();
  const { squaredValue } = location.state || {}; // Access squaredValue from state

  return (
    <div className="form-container">
      <h1>Squared Value</h1>
      <h2>{squaredValue !== undefined ? `The squared value is: ${squaredValue}` : 'No value provided.'}</h2>
    </div>
  );
};

export default DisplaySquaredValue; // Ensure you have this line

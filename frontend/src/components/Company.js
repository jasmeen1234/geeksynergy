import React, { useState } from 'react';
import './Company.css'; // Import your CSS file for Company

export default function Company() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="company-container">
      <button className="toggle-button" onClick={toggleDetails}>
        {showDetails ? 'Hide Company Details' : 'Show Company Details'}
      </button>
      {showDetails && (
        <div className="company-info">
          <p><span className="info-label">Company:</span> Geeksynergy Technologies Pvt Ltd</p>
          <p><span className="info-label">Address:</span> Sanjayanagar, Bengaluru-56</p>
          <p><span className="info-label">Phone:</span> XXXXXXXXX09</p>
          <p><span className="info-label">Email:</span> XXXXXX@gmail.com</p>
        </div>
      )}
    </div>
  );
}

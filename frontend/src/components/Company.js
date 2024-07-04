import React from 'react';
import './Company.css'; // Import your CSS file for Company

export default function Company() {
  return (
    <div className="company-container">
      <h1 className="company-title">Company Details</h1>
      <div className="company-info">
        <p><span className="info-label">Company:</span> Geeksynergy Technologies Pvt Ltd</p>
        <p><span className="info-label">Address:</span> Sanjayanagar, Bengaluru-56</p>
        <p><span className="info-label">Phone:</span> XXXXXXXXX09</p>
        <p><span className="info-label">Email:</span> XXXXXX@gmail.com</p>
      </div>
    </div>
  );
}

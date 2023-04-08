import React from 'react';
import './CrimeReport.css';

const CrimeReport = ({ crimeReport, onForward }) => {
  return (
    <div className="crime-report-container">
      <h2 className="crime-report-heading">Crime Report</h2>
      <div className="crime-report-details">
        <p className="crime-report-label"><strong>Name:</strong></p>
        <p className="crime-report-value">{crimeReport.name}</p>
        <p className="crime-report-label"><strong>Contact No:</strong></p>
        <p className="crime-report-value">{crimeReport.contactNo}</p>
        <p className="crime-report-label"><strong>Location:</strong></p>
        <p className="crime-report-value">{crimeReport.location}</p>
        <p className="crime-report-label"><strong>Description:</strong></p>
        <p className="crime-report-value">{crimeReport.description}</p>
      </div>
      {onForward && <button className="forward-button" onClick={onForward}>Forward</button>}
    </div>
  );
};

export default CrimeReport;

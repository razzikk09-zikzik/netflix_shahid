import React from 'react';
import './WorkPermit.css';
import { availabilityData } from '../data/workPermit';

const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎯 {availabilityData.headline}</h2>
        <p className="work-permit-summary">{availabilityData.summary}</p>
        <p className="work-permit-roles-label">Open to roles:</p>
        <ul className="work-permit-roles">
          {availabilityData.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <p className="additional-info">{availabilityData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;

import React from 'react';
import './Recommendations.css';
import profilePic from '../images/blue.png';

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={profilePic} alt="S. Mohamed Shahid" className="profile-pic" />
          <div>
            <h3>S. Mohamed Shahid</h3>
            <p>Software Engineer & Full-Stack Developer</p>
            <p className="date">Portfolio — Recommendations</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>
            ✨ Recommendations from mentors, faculty, and collaborators will be added here.
            Connect on{' '}
            <a
              href="https://www.linkedin.com/in/mohamed-shahid-53562a309/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            to request a reference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

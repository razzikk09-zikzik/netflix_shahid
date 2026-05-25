import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaAws } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import { certificationsData } from '../data/certifications';

const iconData: Record<string, React.JSX.Element> = {
  aws: <FaAws />,
  coursera: <SiCoursera />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-page-title">Certifications & Achievements</h1>
      <p className="certifications-page-subtitle">
        Workshops, diplomas, and credentials from AWS, Deloitte, NPTEL, and more
      </p>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => {
          const cardContent = (
            <>
              <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] ?? <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate ? (
                  <span className="issued-date">Issued {cert.issuedDate}</span>
                ) : null}
              </div>
              {cert.link !== '#' ? (
                <div className="certification-link animated-icon">
                  <FaExternalLinkAlt />
                </div>
              ) : null}
            </>
          );

          const style = { '--delay': `${index * 0.2}s` } as React.CSSProperties;

          return cert.link !== '#' ? (
            <a
              href={cert.link}
              key={cert.title}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
              style={style}
            >
              {cardContent}
            </a>
          ) : (
            <div key={cert.title} className="certification-card certification-card-static" style={style}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;

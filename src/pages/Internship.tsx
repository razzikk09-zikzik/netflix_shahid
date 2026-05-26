import React from 'react';
import './Internship.css';
import { internships, internshipGallery } from '../data/internship';

const Internship: React.FC = () => {
  return (
    <div className="internship-container">
      <header className="internship-header">
        <h1>Internship Experience</h1>
        <p>Industry training across full-stack development, embedded systems, and automotive R&amp;D</p>
      </header>

      <section className="internship-gallery">
        {internshipGallery.map((src, index) => (
          <figure key={src} className="gallery-frame" style={{ animationDelay: `${index * 0.15}s` }}>
            <img src={src} alt={`Internship highlight ${index + 1}`} />
          </figure>
        ))}
      </section>

      <section className="internship-cards">
        {internships.map((item, index) => (
          <article
            key={item.id}
            className="internship-card"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="internship-card-image">
              <img src={item.image} alt={item.company} />
              <span className="internship-period">{item.period}</span>
            </div>
            <div className="internship-card-body">
              <h2>{item.role}</h2>
              <h3>{item.company}</h3>
              <p className="internship-tech">🔧 {item.techStack}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Internship;

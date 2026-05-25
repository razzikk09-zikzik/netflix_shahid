import React from 'react';
import './Licence.css';
import { shasChickenLicence } from '../data/licence';

const Licence: React.FC = () => {
  const { startupName, tagline, summary, grant, highlights, images } = shasChickenLicence;

  return (
    <div className="licence-container">
      <header className="licence-hero">
        <p className="licence-eyebrow">Startup &amp; Licensing</p>
        <h1>{startupName}</h1>
        <p className="licence-tagline">{tagline}</p>
        <p className="licence-summary">{summary}</p>
        <div className="licence-grant-badge">{grant}</div>
      </header>

      <section className="licence-highlights">
        {highlights.map((item, index) => (
          <div key={item.title} className="licence-highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="licence-gallery-section">
        <h2>Licence &amp; Venture Documentation</h2>
        <div className="licence-gallery">
          {images.map((img, index) => (
            <figure
              key={`${img.caption}-${index}`}
              className={`licence-frame ${img.isProfilePhoto ? 'licence-frame-profile' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={img.src} alt={img.caption || 'S. Mohamed Shahid'} />
              {img.caption ? <figcaption>{img.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Licence;

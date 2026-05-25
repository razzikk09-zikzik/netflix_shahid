import React from 'react';
import './ContactMe.css';
import profilePic from '../images/blue.png';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { contactMeData } from '../data/contactMe';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/mohamed-shahid-53562a309/';

const ContactMe: React.FC = () => {
  const userData = contactMeData;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="S. Mohamed Shahid" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <h2 className="contact-section-title">Let&apos;s Build Something Amazing</h2>
        <p>I&apos;m always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        {userData.phoneNumber ? (
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href={`tel:${userData.phoneNumber}`} className="contact-link">
              {userData.phoneNumber}
            </a>
          </div>
        ) : null}
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import gtaImg from '../images/gta.jpg';
import shapicImg from '../images/shapic.png';
import blueImage from '../images/blue.png';
import msmeImg from '../images/msme.png';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<
  ProfileType,
  { title: string; imgSrc: string; link: string }[]
> = {
  recruiter: [
    { title: 'Music', imgSrc: gtaImg, link: '/music' },
    { title: 'Contact Me', imgSrc: shapicImg, link: '/contact-me' },
  ],
  developer: [
    { title: 'Music', imgSrc: gtaImg, link: '/music' },
    { title: 'Certifications', imgSrc: msmeImg, link: '/certifications' },
    { title: 'Contact Me', imgSrc: blueImage, link: '/contact-me' },
  ],
  stalker: [
    { title: 'Contact Me', imgSrc: shapicImg, link: '/contact-me' },
    { title: 'Music', imgSrc: gtaImg, link: '/music' },
  ],
  adventure: [
    { title: 'Music', imgSrc: gtaImg, link: '/music' },
    { title: 'Contact Me', imgSrc: blueImage, link: '/contact-me' },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <section className="continue-watching-row">
      <h2 className="continue-watching-row__title">Continue Watching for {profile}</h2>
      <div className="continue-watching-row__scroll">
        {continueWatching.map((pick) => (
          <Link to={pick.link} key={pick.title} className="continue-watching-row__tile">
            <img src={pick.imgSrc} alt={pick.title} className="continue-watching-row__img" loading="lazy" />
            <div className="continue-watching-row__overlay">
              <span className="continue-watching-row__label">{pick.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;

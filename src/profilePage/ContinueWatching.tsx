import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import musicThumb from '../images/gta.jpg';
import readingThumb from '../images/atomic_habits.jpg';
import blogsThumb from '../images/rich_dad_poor_dad.jpg';
import contactThumb from '../images/logo.png';
import certsThumb from '../images/udemy.jpeg';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<
  ProfileType,
  { title: string; imgSrc: string; link: string }[]
> = {
  recruiter: [
    { title: 'Music', imgSrc: musicThumb, link: '/music' },
    { title: 'Contact Me', imgSrc: contactThumb, link: '/contact-me' },
  ],
  developer: [
    { title: 'Music', imgSrc: musicThumb, link: '/music' },
    { title: 'Reading', imgSrc: readingThumb, link: '/reading' },
    { title: 'Blogs', imgSrc: blogsThumb, link: '/blogs' },
    { title: 'Certifications', imgSrc: certsThumb, link: '/certifications' },
    { title: 'Contact Me', imgSrc: contactThumb, link: '/contact-me' },
  ],
  stalker: [
    { title: 'Reading', imgSrc: readingThumb, link: '/reading' },
    { title: 'Blogs', imgSrc: blogsThumb, link: '/blogs' },
    { title: 'Contact Me', imgSrc: contactThumb, link: '/contact-me' },
  ],
  adventurer: [
    { title: 'Music', imgSrc: musicThumb, link: '/music' },
    { title: 'Reading', imgSrc: readingThumb, link: '/reading' },
    { title: 'Certifications', imgSrc: certsThumb, link: '/certifications' },
    { title: 'Contact Me', imgSrc: contactThumb, link: '/contact-me' },
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
            <img
              src={pick.imgSrc}
              alt={pick.title}
              className="continue-watching-row__img"
              width={250}
              height={200}
              loading="lazy"
            />
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

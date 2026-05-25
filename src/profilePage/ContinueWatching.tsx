import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<
  ProfileType,
  { title: string; imgSrc: string; link: string }[]
> = {
  recruiter: [
    { title: 'Music', imgSrc: 'https://picsum.photos/id/1025/250/200', link: '/music' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/250/200', link: '/contact-me' },
  ],
  developer: [
    { title: 'Music', imgSrc: 'https://picsum.photos/id/1025/250/200', link: '/music' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/250/200', link: '/reading' },
    { title: 'Blogs', imgSrc: 'https://picsum.photos/id/1027/250/200', link: '/blogs' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/id/1028/250/200', link: '/certifications' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/250/200', link: '/contact-me' },
  ],
  stalker: [
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/250/200', link: '/reading' },
    { title: 'Blogs', imgSrc: 'https://picsum.photos/id/1027/250/200', link: '/blogs' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/250/200', link: '/contact-me' },
  ],
  adventurer: [
    { title: 'Music', imgSrc: 'https://picsum.photos/id/1025/250/200', link: '/music' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/250/200', link: '/reading' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/id/1028/250/200', link: '/certifications' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/250/200', link: '/contact-me' },
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

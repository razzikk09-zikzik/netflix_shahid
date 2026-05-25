import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import internshipThumb from '../images/internship.jpg';
import licenceThumb from '../images/licence.jpg';
import chickenImg from '../images/chicken.jpg';
import chinnarasuImg from '../images/chinnarasu.png';
import msmeImg from '../images/msme.png';
import gtaImg from '../images/gta.jpg';
import shapicImg from '../images/shapic.png';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPick {
  title: string;
  imgSrc: string;
  route: string;
}

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig: Record<ProfileType, TopPick[]> = {
  recruiter: [
    { title: 'Availability', imgSrc: blueImage, route: '/work-permit' },
    { title: 'Skills', imgSrc: greyImage, route: '/skills' },
    { title: 'Experience', imgSrc: redImage, route: '/work-experience' },
    { title: 'Internship', imgSrc: internshipThumb, route: '/internship' },
    { title: 'Licence', imgSrc: licenceThumb, route: '/licence' },
    { title: 'Certifications', imgSrc: msmeImg, route: '/certifications' },
    { title: 'Recommendations', imgSrc: shapicImg, route: '/recommendations' },
    { title: 'Projects', imgSrc: chickenImg, route: '/projects' },
    { title: 'Contact Me', imgSrc: blueImage, route: '/contact-me' },
  ],
  developer: [
    { title: 'Skills', imgSrc: greyImage, route: '/skills' },
    { title: 'Projects', imgSrc: chinnarasuImg, route: '/projects' },
    { title: 'Certifications', imgSrc: msmeImg, route: '/certifications' },
    { title: 'Experience', imgSrc: redImage, route: '/work-experience' },
    { title: 'Internship', imgSrc: internshipThumb, route: '/internship' },
    { title: 'Contact Me', imgSrc: shapicImg, route: '/contact-me' },
  ],
  stalker: [
    { title: 'Recommendations', imgSrc: shapicImg, route: '/recommendations' },
    { title: 'Contact Me', imgSrc: blueImage, route: '/contact-me' },
    { title: 'Projects', imgSrc: chinnarasuImg, route: '/projects' },
    { title: 'Experience', imgSrc: greyImage, route: '/work-experience' },
    { title: 'Certifications', imgSrc: msmeImg, route: '/certifications' },
  ],
  adventure: [
    { title: 'Music', imgSrc: gtaImg, route: '/music' },
    { title: 'Projects', imgSrc: chickenImg, route: '/projects' },
    { title: 'Internship', imgSrc: internshipThumb, route: '/internship' },
    { title: 'Contact Me', imgSrc: blueImage, route: '/contact-me' },
    { title: 'Licence', imgSrc: licenceThumb, route: '/licence' },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <section className="top-picks-row">
      <h2 className="top-picks-row__title">Today&apos;s Top Picks for {profile}</h2>
      <div className="top-picks-row__scroll">
        {topPicks.map((pick, index) => (
          <div
            key={pick.title}
            className="top-picks-row__tile"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.15}s` }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(pick.route)}
          >
            <img src={pick.imgSrc} alt={pick.title} className="top-picks-row__img" loading="lazy" />
            <div className="top-picks-row__overlay">
              <span className="top-picks-row__label">{pick.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicksRow;

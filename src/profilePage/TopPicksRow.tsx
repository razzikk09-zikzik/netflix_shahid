import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import internshipThumb from '../images/internship.jpg';
import licenceThumb from '../images/licence.jpg';
import availabilityThumb from '../images/crm.png';
import skillsThumb from '../images/digital.jpeg';
import experienceThumb from '../images/deloitte.jpeg';
import certsThumb from '../images/udemy.jpeg';
import recommendationsThumb from '../images/chinnarasu.png';
import projectsThumb from '../images/letsxchange.png';
import contactThumb from '../images/logo.png';
import musicThumb from '../images/gta.jpg';
import readingThumb from '../images/atomic_habits.jpg';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

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
    { title: 'Availability', imgSrc: availabilityThumb, route: '/work-permit' },
    { title: 'Skills', imgSrc: skillsThumb, route: '/skills' },
    { title: 'Experience', imgSrc: experienceThumb, route: '/work-experience' },
    { title: 'Internship', imgSrc: internshipThumb, route: '/internship' },
    { title: 'Licence', imgSrc: licenceThumb, route: '/licence' },
    { title: 'Certifications', imgSrc: certsThumb, route: '/certifications' },
    { title: 'Recommendations', imgSrc: recommendationsThumb, route: '/recommendations' },
    { title: 'Projects', imgSrc: projectsThumb, route: '/projects' },
    { title: 'Contact Me', imgSrc: contactThumb, route: '/contact-me' },
  ],
  developer: [
    { title: 'Skills', imgSrc: skillsThumb, route: '/skills' },
    { title: 'Projects', imgSrc: projectsThumb, route: '/projects' },
    { title: 'Certifications', imgSrc: certsThumb, route: '/certifications' },
    { title: 'Experience', imgSrc: experienceThumb, route: '/work-experience' },
    { title: 'Recommendations', imgSrc: recommendationsThumb, route: '/recommendations' },
    { title: 'Contact Me', imgSrc: contactThumb, route: '/contact-me' },
  ],
  stalker: [
    { title: 'Recommendations', imgSrc: recommendationsThumb, route: '/recommendations' },
    { title: 'Contact Me', imgSrc: contactThumb, route: '/contact-me' },
    { title: 'Projects', imgSrc: projectsThumb, route: '/projects' },
    { title: 'Experience', imgSrc: experienceThumb, route: '/work-experience' },
    { title: 'Certifications', imgSrc: certsThumb, route: '/certifications' },
  ],
  adventurer: [
    { title: 'Music', imgSrc: musicThumb, route: '/music' },
    { title: 'Projects', imgSrc: projectsThumb, route: '/projects' },
    { title: 'Reading', imgSrc: readingThumb, route: '/reading' },
    { title: 'Contact Me', imgSrc: contactThumb, route: '/contact-me' },
    { title: 'Certifications', imgSrc: certsThumb, route: '/certifications' },
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
            <img
              src={pick.imgSrc}
              alt={pick.title}
              className="top-picks-row__img"
              width={250}
              height={200}
              loading="lazy"
            />
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

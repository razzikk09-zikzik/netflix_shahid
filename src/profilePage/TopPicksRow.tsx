import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import internshipThumb from '../images/internship.jpg';
import licenceThumb from '../images/licence.jpg';

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
    { title: 'Availability', imgSrc: 'https://picsum.photos/seed/availability/250/200', route: '/work-permit' },
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/skills/250/200', route: '/skills' },
    { title: 'Experience', imgSrc: 'https://picsum.photos/seed/workexperience/250/200', route: '/work-experience' },
    { title: 'Internship', imgSrc: internshipThumb, route: '/internship' },
    { title: 'Licence', imgSrc: licenceThumb, route: '/licence' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/certifications/250/200', route: '/certifications' },
    { title: 'Recommendations', imgSrc: 'https://picsum.photos/seed/recommendations/250/200', route: '/recommendations' },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/projects/250/200', route: '/projects' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/contact/250/200', route: '/contact-me' },
  ],
  developer: [
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/coding/250/200', route: '/skills' },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/development/250/200', route: '/projects' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/badge/250/200', route: '/certifications' },
    { title: 'Experience', imgSrc: 'https://picsum.photos/seed/work/250/200', route: '/work-experience' },
    { title: 'Recommendations', imgSrc: 'https://picsum.photos/seed/networking/250/200', route: '/recommendations' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/connect/250/200', route: '/contact-me' },
  ],
  stalker: [
    { title: 'Recommendations', imgSrc: 'https://picsum.photos/seed/networking/250/200', route: '/recommendations' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/call/250/200', route: '/contact-me' },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/planning/250/200', route: '/projects' },
    { title: 'Experience', imgSrc: 'https://picsum.photos/seed/resume/250/200', route: '/work-experience' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/achievements/250/200', route: '/certifications' },
  ],
  adventurer: [
    { title: 'Music', imgSrc: 'https://picsum.photos/seed/music/250/200', route: '/music' },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/innovation/250/200', route: '/projects' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/seed/books/250/200', route: '/reading' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/connect/250/200', route: '/contact-me' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/medal/250/200', route: '/certifications' },
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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';
import { profileBackgroundGifs } from '../data/profileBackgrounds';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    { name: 'recruiter', image: blueImage, backgroundGif: profileBackgroundGifs.recruiter },
    { name: 'developer', image: greyImage, backgroundGif: profileBackgroundGifs.developer },
    { name: 'stalker', image: redImage, backgroundGif: profileBackgroundGifs.stalker },
    { name: 'adventurer', image: yellowImage, backgroundGif: profileBackgroundGifs.adventure },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;

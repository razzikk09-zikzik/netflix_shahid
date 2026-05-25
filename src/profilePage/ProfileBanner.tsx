import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { profileBannerContent, ProfileType } from '../data/profileContent';

interface ProfileBannerProps {
  profile: ProfileType;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profile }) => {
  const bannerData = profileBannerContent[profile];

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-tagline">{bannerData.tagline}</p>
        <p className="banner-description">{bannerData.profileSummary}</p>
        <p className="banner-footer-line">{bannerData.footerLine}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

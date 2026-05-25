import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { profileBackgroundGifs } from '../data/profileBackgrounds';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'developer', 'stalker', 'adventurer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  const backgroundGif =
    location.state?.backgroundGif || profileBackgroundGifs[profile] || profileBackgroundGifs.recruiter;
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner profile={profile} />
      </div>
      <div className="profile-page-sections">
        <TopPicksRow profile={profile} />
        <ContinueWatching profile={profile} />
      </div>
    </>
  );
};

export default ProfilePage;

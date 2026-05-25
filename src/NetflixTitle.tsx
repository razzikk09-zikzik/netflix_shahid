import React, { useEffect, useRef, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/updatedlogo.png';

const SPLASH_DURATION_MS = 4000;

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const navigate = useNavigate();
  const hasStarted = useRef(false);

  const startSplash = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    setIsAnimating(true);

    const audio = new Audio(netflixSound);
    audio.volume = 0.9;
    audio.play().catch(() => {
      // Browsers may block autoplay until interaction; animation still runs
    });
  };

  useEffect(() => {
    startSplash();
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      navigate('/browse');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, [isAnimating, navigate]);

  const handleSkip = () => {
    navigate('/browse');
  };

  return (
    <div className="netflix-container" onClick={handleSkip} role="presentation">
      <img
        src={logoImage}
        alt="S. Mohamed Shahid"
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`}
      />
      <p className="netflix-skip-hint">Click to skip</p>
    </div>
  );
};

export default NetflixTitle;

import React, { useCallback, useEffect, useRef } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/updatedlogo.png';

const SPLASH_DURATION_MS = 4000;

const NetflixTitle: React.FC = () => {
  const isAnimating = true;
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasPlayedSound = useRef(false);
  const navigateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playSound = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasPlayedSound.current) return;

    audio.volume = 0.9;
    const playPromise = audio.play();
    if (playPromise) {
      playPromise
        .then(() => {
          hasPlayedSound.current = true;
        })
        .catch(() => {
          /* retry on next user gesture */
        });
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
    }

    playSound();

    const unlockAudio = () => {
      playSound();
    };

    document.addEventListener('pointerdown', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });

    navigateTimer.current = setTimeout(() => {
      navigate('/browse');
    }, SPLASH_DURATION_MS);

    return () => {
      document.removeEventListener('pointerdown', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      if (navigateTimer.current) clearTimeout(navigateTimer.current);
    };
  }, [navigate, playSound]);

  const handleInteraction = () => {
    playSound();
    if (navigateTimer.current) clearTimeout(navigateTimer.current);
    navigate('/browse');
  };

  return (
    <div
      className="netflix-container"
      onPointerDown={playSound}
      onClick={handleInteraction}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleInteraction()}
      aria-label="Enter portfolio"
    >
      <audio ref={audioRef} src={netflixSound} preload="auto" />
      <img
        src={logoImage}
        alt="S. Mohamed Shahid"
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`}
      />
      <p className="netflix-skip-hint">Tap anywhere to enter with sound</p>
    </div>
  );
};

export default NetflixTitle;

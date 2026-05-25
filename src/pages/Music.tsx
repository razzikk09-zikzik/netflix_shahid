import React, { useState } from 'react';
import './Music.css';
import { gtaPlaylist, musicCoverArt, Track } from '../data/music';

const Music: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<Track>(gtaPlaylist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelect = (track: Track) => {
    setActiveTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="music-page">
      <div
        className="music-hero"
        style={{ backgroundImage: `url(${musicCoverArt})` }}
      >
        <div className="music-hero-overlay" />
        <div className="music-hero-content">
          <img src={musicCoverArt} alt="GTA playlist cover" className="music-hero-cover" />
          <div>
            <p className="music-eyebrow">Playlist</p>
            <h1>GTA Night Drive</h1>
            <p className="music-hero-meta">The Weeknd · GTA Themes · Shahid&apos;s Picks</p>
            <p className="music-hero-count">{gtaPlaylist.length} tracks</p>
          </div>
        </div>
      </div>

      {isPlaying ? (
        <div className="music-player-wrap">
          <iframe
            title={activeTrack.title}
            src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="music-youtube-player"
          />
        </div>
      ) : null}

      <div className="music-tracklist">
        <h2>Now Playing &amp; Queue</h2>
        {gtaPlaylist.map((track, index) => (
          <button
            key={track.id}
            type="button"
            className={`music-track ${activeTrack.id === track.id ? 'active' : ''}`}
            onClick={() => handleSelect(track)}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <img src={musicCoverArt} alt="" className="track-thumb" />
            <span className="track-index">{index + 1}</span>
            <div className="track-info">
              <strong>{track.title}</strong>
              <span>{track.artist}</span>
              <small>{track.album}</small>
            </div>
            <span className="track-duration">{track.duration}</span>
            <span className="track-play-icon">{activeTrack.id === track.id && isPlaying ? '▮▮' : '▶'}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Music;

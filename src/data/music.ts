import gtaCover from '../images/gta.jpg';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  youtubeId: string;
}

export const gtaPlaylist: Track[] = [
  {
    id: 'starboy',
    title: 'Starboy',
    artist: 'The Weeknd ft. Daft Punk',
    album: 'GTA Vibes — Night Drive',
    duration: '3:50',
    youtubeId: '34Na4j8AVgA',
  },
  {
    id: 'gta-theme',
    title: 'GTA San Andreas Theme',
    artist: 'Young Maylay',
    album: 'GTA SA Official Soundtrack',
    duration: '4:32',
    youtubeId: '6VewzN781wQ',
  },
  {
    id: 'gta-loading',
    title: 'GTA V Loading Screen Theme',
    artist: 'Oh No — "Welcome to Los Santos"',
    album: 'GTA V Score',
    duration: '3:22',
    youtubeId: 'eBxF1ghnZE0',
  },
];

export const musicCoverArt = gtaCover;

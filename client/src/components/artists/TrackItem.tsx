import React, { useContext } from 'react';
import MusicContext from '../../context/music/musicContext';
import { MusicContextProps } from '../../context/music/types';
import { Track } from '../../generated/graphql';
import './artist.css';

interface Props {
  track: Track;
}

const TrackItem: React.FC<Props> = ({ track }) => {
  const { name, imageUrl, previewUrl } = track;

  const musicContext = useContext<MusicContextProps>(MusicContext);
  const { playMusic, pauseMusic, isPlaying, musicUrl } = musicContext;

  const trackIcon = (track: Track) => {
    if (!track.previewUrl) {
      return <span>N/A</span>;
    }

    if (musicUrl === track.previewUrl) {
      if (isPlaying) {
        return <span>| |</span>;
      } else {
        return <span>&#9654;</span>;
      }
    } else {
      return <span>&#9654;</span>;
    }
  };

  return (
    <>
      <img src={imageUrl} alt='track' className='track-image' />
      <p className='track-text'>{name}</p>
      <p
        className='track-icon'
        onClick={() => {
          if (isPlaying && previewUrl === musicUrl) {
            pauseMusic();
          } else {
            playMusic(previewUrl ? previewUrl : undefined);
          }
        }}
      >
        {trackIcon(track)}
      </p>
    </>
  );
};

export default TrackItem;

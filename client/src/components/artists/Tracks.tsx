import React, { useState, useContext, useEffect } from 'react';

import MusicContext from '../../context/music/musicContext';
import { MusicContextProps } from '../../context/music/types';

import './artist.css';

import {
  GetArtistQuery,
  GetArtistQueryVariables,
  Artist,
  Track
} from '../../generated/graphql';

// interface Track {
//   id: string;
//   name: string;
//   imageUrl: string;
//   previewUrl: string;
// }
interface Props {
  tracks: Track[];
}

const Tracks: React.FC<Props> = ({ tracks }) => {
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

  // somehow id is not unqick
  return (
    <>
      {tracks.map((track: Track, index: number) => {
        const { id, name, imageUrl, previewUrl } = track;

        return (
          <div
            key={id + index}
            onClick={() => {
              if (isPlaying && previewUrl === musicUrl) {
                pauseMusic();
              } else {
                playMusic(previewUrl ? previewUrl : undefined);
              }
            }}
            className='track'
          >
            {/* <p>{id + index}</p> */}
            <img src={imageUrl} alt='track-image' className='track-image' />
            <p className='track-text'>{name}</p>
            <p className='track-icon'>{trackIcon(track)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Tracks;

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
  const {
    removeMusic,
    playMusic,
    pauseMusic,
    isPlaying,
    musicUrl
  } = musicContext;

  const [playing, setPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>(null);
  const [playingPreviewUrl, setPlayingPreviewUrl] = useState<
    string | undefined
  >('');

  // const playAudio = (previewUrl: string | undefined) => () => {
  //   const audio: HTMLAudioElement = new Audio(previewUrl);

  //   if (!playing) {
  //     audio.play();

  //     setPlaying(true);
  //     setPlayingPreviewUrl(previewUrl);
  //   } else {
  //     audio.pause();

  //     if (playingPreviewUrl === previewUrl) {
  //       setPlaying(false);
  //     } else {
  //       audio.play();
  //       setAudio(audio);
  //       setPlayingPreviewUrl(previewUrl);
  //     }
  //   }
  // };

  const trackIcon: React.FC<Track> = track => {
    if (!track.previewUrl) {
      return <span>N/A</span>;
    }

    if (isPlaying && musicUrl === track.previewUrl) {
      return <span>| |</span>;
    }

    return <span>&#9654;</span>;
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
              playMusic(previewUrl ? previewUrl : undefined);
            }}
            className='track'
          >
            <p>{id + index}</p>
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

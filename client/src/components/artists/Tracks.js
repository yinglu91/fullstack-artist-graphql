import React, { useState } from 'react';
import './artist.css';

function Tracks({ tracks }) {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playingPreviewUrl, setPlayingPreviewUrl] = useState(null);

  const playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);

    if (!playing) {
      audio.play();

      setPlaying(true);
      setPlayingPreviewUrl(previewUrl);
    } else {
      audio.pause();

      if (playingPreviewUrl === previewUrl) {
        setPlaying(false);
      } else {
        audio.play();
        setAudio(audio);
        setPlayingPreviewUrl(previewUrl);
      }
    }
  };

  const trackIcon = track => {
    if (!track.previewUrl) {
      return <span>N/A</span>;
    }

    if (playing && playingPreviewUrl === track.previewUrl) {
      return <span>| |</span>;
    }

    return <span>&#9654;</span>;
  };

  // somehow id is not unqick
  return (
    <>
      {tracks.map((track, index) => {
        const { id, name, imageUrl, previewUrl } = track;

        return (
          <div
            key={id + index}
            onClick={playAudio(previewUrl)}
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
}

export default Tracks;

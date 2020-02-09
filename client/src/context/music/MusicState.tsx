import React, { useReducer } from 'react';
import musicContext from './musicContext';
import musicReducer from './musicReducer';

import { MusicActionTypes, MusicReducerState } from './types';

interface Props {
  children: React.ReactNode;
}

const MusicState: React.ComponentType<Props> = props => {
  const initailState: MusicReducerState = {
    audio: new Audio(''),
    musicUrl: '',
    isPlaying: false
  };

  // const [audio, setAudio] = useState<HTMLAudioElement>(null)

  const [state, dispatch] = useReducer(musicReducer, initailState);

  //playMusic: Function;
  const playMusic = (musicUrl: string) => {
    if (state.isPlaying) {
      state.audio.pause();
    }

    const audio: HTMLAudioElement = new Audio(musicUrl);
    audio.play();

    dispatch({
      type: MusicActionTypes.playMusic,
      audio,
      musicUrl
    });
  };
  //pauseMusic: Function;

  const pauseMusic = () => {
    if (state.isPlaying) {
      state.audio.pause();
    }

    dispatch({
      type: MusicActionTypes.pauseMusic
    });
  };

  //removeMusicMusic: Function;
  const removeMusic = () => {
    if (state.isPlaying) {
      state.audio.pause();
    }

    dispatch({
      type: MusicActionTypes.removeMusic
    });
  };

  return (
    <musicContext.Provider
      value={{
        audio: state.audio,
        musicUrl: state.musicUrl,
        isPlaying: state.isPlaying,

        playMusic,
        pauseMusic,
        removeMusic
      }}
    >
      {props.children}
    </musicContext.Provider>
  );
};

export default MusicState;

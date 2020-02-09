import { createContext } from 'react';
import { MusicContextProps } from './types';

const initialState = {
  audio: new Audio(''),
  musicUrl: '',
  isPlaying: false,

  playMusic: () => null,
  pauseMusic: () => null,
  removeMusic: () => null
};
const musicContext = createContext<MusicContextProps>(initialState);

export default musicContext;

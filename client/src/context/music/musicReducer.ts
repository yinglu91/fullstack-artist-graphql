import { MusicActionTypes, MusicReducerState, MusicAction } from './types';

const musicReducer = (state: MusicReducerState, action: MusicAction) => {
  switch (action.type) {
    case MusicActionTypes.playMusic:
      return {
        ...state,
        isPlaying: true,
        audio: action.audio,
        musicUrl: action.musicUrl
      };

    case MusicActionTypes.pauseMusic:
      return {
        ...state,
        isPlaying: false,
        musicUrl: ''
      };

    case MusicActionTypes.removeMusic:
      return {
        ...state,
        isPlaying: false,
        musicUrl: ''
      };
    default:
      return state;
  }
};

export default musicReducer;

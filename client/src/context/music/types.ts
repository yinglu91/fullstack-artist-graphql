/**
 * Action types
 */
export enum MusicActionTypes {
  playMusic,
  pauseMusic,
  removeMusic
}

export interface PlayMusic {
  type: MusicActionTypes.playMusic;
  audio: HTMLAudioElement;
  musicUrl: String;
}

export interface PauseMusic {
  type: MusicActionTypes.pauseMusic;
}

export interface RemoveMusicMusic {
  type: MusicActionTypes.removeMusic;
}

export type MusicAction = PlayMusic | PauseMusic | RemoveMusicMusic;

/**
 * State type
 */
export interface MusicReducerState {
  audio: HTMLAudioElement;
  musicUrl: String;
  isPlaying: Boolean;
}

// Music context (store) holds state & functions
export interface MusicContextProps {
  audio: HTMLAudioElement;
  musicUrl: String;
  isPlaying: Boolean;

  playMusic: Function;
  pauseMusic: Function;
  removeMusic: Function;
}

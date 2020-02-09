import React, { useState, useContext, useEffect } from 'react';

import MusicContext from '../../context/music/musicContext';
import { MusicContextProps } from '../../context/music/types';

import Artist from './Artist';

const SelectOperaArtist: React.FC = () => {
  const musicContext = useContext<MusicContextProps>(MusicContext);
  const { removeMusic } = musicContext;

  useEffect(() => {
    removeMusic();
  }, []);

  const [artistName, setArtistName] = useState('Maria Callas');

  return (
    <div className='App'>
      <h1>Select Artist</h1>
      <div className='form'>
        <select
          id='selectedArtist'
          onChange={event => setArtistName(event.target.value)}
          value={artistName}
        >
          <option value='Maria Callas'>Maria Callas</option>
          <option value='Luciano Pavarotti'>Luciano Pavarotti</option>
          <option value='Joan Sutherland'>Joan Sutherland</option>
          <option value='Renata Tebaldi'>Renata Tebaldi</option>
          <option value='Montserrat Caballe'>Montserrat Caballé</option>
        </select>
      </div>

      {artistName && <Artist artistName={artistName} />}
    </div>
  );
};

export default SelectOperaArtist;

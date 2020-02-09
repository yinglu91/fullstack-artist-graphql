import React, { useState, useContext, useEffect } from 'react';

import MusicContext from '../../context/music/musicContext';
import { MusicContextProps } from '../../context/music/types';

import Artist from './Artist';

function SelectPopArtist() {
  const musicContext = useContext<MusicContextProps>(MusicContext);
  const { removeMusic } = musicContext;

  const [artistQuery, setArtistQuery] = useState('Whitney Houston');

  useEffect(() => {
    removeMusic();
  }, []);

  return (
    <div className='App'>
      <h1>Select Artist</h1>
      <div className='form'>
        <select
          id='selectedArtist'
          onChange={event => setArtistQuery(event.target.value)}
          value={artistQuery}
        >
          <option value='Whitney Houston'>Whitney Houston</option>
          <option value='Michael Jackson'>Michael Jackson</option>

          <option value='Johnny Cash'>Johnny Cash</option>
          <option value='Loretta Lynn'>Loretta Lynn</option>
          <option value='Randy Travis'>Randy Travis</option>

          <option value='Lady Gaga'>Lady Gaga</option>
        </select>
      </div>

      {artistQuery && <Artist artistName={artistQuery} />}
    </div>
  );
}

export default SelectPopArtist;

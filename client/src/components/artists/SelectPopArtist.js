import React, { useState } from 'react';

import Artist from './Artist';

function SelectPopArtist() {
  const [artistQuery, setArtistQuery] = useState('Whitney Houston');

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

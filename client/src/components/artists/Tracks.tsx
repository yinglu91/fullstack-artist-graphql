import React from 'react';
import TrackItem from './TrackItem';
import { Track } from '../../generated/graphql';
import './artist.css';

interface Props {
  tracks: Track[];
}

const Tracks: React.FC<Props> = ({ tracks }) => {
  return (
    <>
      {tracks.map((track: Track, index: number) => {
        // somehow id is not unique, so need index.
        return (
          <div key={track.id + index} className='track'>
            <TrackItem track={track} />
          </div>
        );
      })}
    </>
  );
};

export default Tracks;

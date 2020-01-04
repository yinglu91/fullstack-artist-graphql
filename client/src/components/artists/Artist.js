import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Tracks from './Tracks';

// https://www.apollographql.com/docs/react/v3.0-beta/data/queries/
const Artist = ({ artistName }) => {
  const GET_ARTIST = gql`
    query getArtist($artistName: String!) {
      artist(name: $artistName) {
        name
        imageUrl
        genres
        followers
        id
        followers
        tracks {
          id
          name
          imageUrl
          previewUrl
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_ARTIST, {
    variables: { artistName }
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p style={{ color: 'red' }}>ERROR</p>;

  if (!data.artist) return null;

  const { imageUrl, name, genres, followers, tracks } = data.artist;

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{followers} followers</p>
        <p>{genres.join(', ')}</p>
        <img
          src={imageUrl}
          alt='artist-profile'
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            objectFit: 'cover'
          }}
        />
      </div>

      <Tracks tracks={tracks} />
    </>
  );
};

export default Artist;

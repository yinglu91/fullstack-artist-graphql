import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Tracks from './Tracks';
import {
  GetArtistQuery,
  GetArtistQueryVariables
} from '../../generated/graphql';

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

interface Props {
  artistName: string;
}

// https://www.apollographql.com/docs/react/v3.0-beta/data/queries/
const _Artist: React.FC<Props> = ({ artistName }) => {
  const { data, loading, error } = useQuery<
    GetArtistQuery,
    GetArtistQueryVariables
  >(GET_ARTIST, {
    variables: { artistName },
    fetchPolicy: 'network-only'
  });
  // default cache-first doesn't work

  if (loading) return <h1>Loading...</h1>;

  if (error) return <p style={{ color: 'red' }}>{`Error! ${error.message}`}</p>;

  if (!data || !data.artist) return <div>no data</div>;

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

export default _Artist;

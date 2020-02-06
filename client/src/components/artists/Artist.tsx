import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Tracks from './Tracks';

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

interface Track {
  id: string;
  name: string;
  imageUrl: string;
  previewUrl: string;
}

interface Artist {
  imageUrl: string;
  name: string;
  genres: string[];
  followers: number;
  tracks: Track[];
}

// should be auto generated!?
interface TData {
  artist: Artist;
}
interface TVariables {
  artistName: string;
}

// https://www.apollographql.com/docs/react/v3.0-beta/data/queries/
const Artist: React.FC<Props> = ({ artistName }) => {
  const { data, loading, error } = useQuery<TData, TVariables>(GET_ARTIST, {
    variables: { artistName },
    fetchPolicy: 'network-only'
  });
  // default cache-first doesn't work

  if (loading) return <h1>Loading...</h1>;

  if (error) return <p style={{ color: 'red' }}>{`Error! ${error.message}`}</p>;

  if (!data) return <div>no data</div>;

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

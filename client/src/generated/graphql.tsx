import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export type Artist = {
   __typename?: 'Artist',
  id: Scalars['ID'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  genres: Array<Scalars['String']>,
  followers: Scalars['Int'],
  tracks: Array<Track>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ITuneArtist = {
   __typename?: 'ITuneArtist',
  id: Scalars['ID'],
  name: Scalars['String'],
  url?: Maybe<Scalars['String']>,
  genre?: Maybe<Scalars['String']>,
  songs: Array<Maybe<Song>>,
};


export type ITuneArtistSongsArgs = {
  limit?: Maybe<Scalars['Int']>
};

export type Query = {
   __typename?: 'Query',
  artist?: Maybe<Artist>,
  artists: Array<Maybe<ITuneArtist>>,
  songs: Array<Maybe<Song>>,
};


export type QueryArtistArgs = {
  name: Scalars['String']
};


export type QueryArtistsArgs = {
  name: Scalars['String'],
  limit?: Maybe<Scalars['Int']>
};


export type QuerySongsArgs = {
  name: Scalars['String'],
  limit?: Maybe<Scalars['Int']>
};

export type Song = {
   __typename?: 'Song',
  id: Scalars['ID'],
  name: Scalars['String'],
  album?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  lyrics?: Maybe<Scalars['String']>,
  tabs?: Maybe<Scalars['String']>,
  artist?: Maybe<ITuneArtist>,
};

export type Track = {
   __typename?: 'Track',
  id: Scalars['ID'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
};


export type GetArtistQueryVariables = {
  artistName: Scalars['String']
};


export type GetArtistQuery = (
  { __typename?: 'Query' }
  & { artist: Maybe<(
    { __typename?: 'Artist' }
    & Pick<Artist, 'name' | 'imageUrl' | 'genres' | 'followers' | 'id'>
    & { tracks: Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'name' | 'imageUrl' | 'previewUrl'>
    )> }
  )> }
);


export const GetArtistDocument = gql`
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

/**
 * __useGetArtistQuery__
 *
 * To run a query within a React component, call `useGetArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistQuery({
 *   variables: {
 *      artistName: // value for 'artistName'
 *   },
 * });
 */
export function useGetArtistQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
        return ApolloReactHooks.useQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, baseOptions);
      }
export function useGetArtistLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, baseOptions);
        }
export type GetArtistQueryHookResult = ReturnType<typeof useGetArtistQuery>;
export type GetArtistLazyQueryHookResult = ReturnType<typeof useGetArtistLazyQuery>;
export type GetArtistQueryResult = ApolloReactCommon.QueryResult<GetArtistQuery, GetArtistQueryVariables>;
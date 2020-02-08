const { gql } = require('apollo-server');
/* Apollo Server is a library that helps you build a production-ready graph API over your data. It can connect to any data source, including REST APIs and databases, and it seamlessly integrates with Apollo developer tooling.
 */

// Create a blueprint for your graph's data
// a schema is a blueprint for all of the data you can access in your graph.
// that describes all of your data's types and their relationships.
const typeDefs = gql`
  # schema below using GraphQL's schema definition language (SDL)

  # Query type, which is the entry point into our schema
  # that describes what data we can fetch.
  # all types in GraphQL are nullable by default
  type Query {
    artist(name: String!): Artist
    artists(name: String!, limit: Int = 5): [ITuneArtist]!
    songs(name: String!, limit: Int = 10): [Song]!
  }

  # primitive type like ID, String, Boolean, or Int,
  # custom scalars like Date

  # GraphQL object type

  type ITuneArtist {
    id: ID!
    name: String!
    url: String
    genre: String
    songs(limit: Int = 10): [Song]!
  }

  type Song {
    id: ID!
    name: String!
    album: String
    url: String
    lyrics: String
    tabs: String
    artist: ITuneArtist
  }

  type Artist {
    id: ID!
    name: String!
    imageUrl: String!
    genres: [String!]!
    followers: Int!
    tracks: [Track!]!
  }

  type Track {
    id: ID!
    name: String!
    imageUrl: String!
    previewUrl: String
  }
`;

module.exports = typeDefs;

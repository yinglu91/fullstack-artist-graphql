// don't have to write a resolver for a field if the parent object has a property with the same name.
module.exports = {
  Query: {
    artist: (_, { name }, { dataSources }) =>
      dataSources.artistAPI.getArtistByName({
        artistName: name
      }),
  },
  Artist: {
    tracks: (artist, _, { dataSources }) =>
      dataSources.artistAPI.getTracksByArtistId({
        artistId: artist.id
      })
  }
};

// keeping your resolvers thin as a best practice, which allows you to safely 
// refactor without worrying about breaking your API.

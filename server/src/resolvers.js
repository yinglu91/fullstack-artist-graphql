// don't have to write a resolver for a field if the parent object has a property with the same name.
module.exports = {
  Query: {
    artist: (_, { name }, { dataSources }) =>
      dataSources.artistAPI.getArtistByName({
        artistName: name
      }),

    artists: (_, args, ctx) => ctx.dataSources.iTunes.artists(args),
    songs: (_, args, ctx) => ctx.dataSources.iTunes.songs(args)
  },
  Artist: {
    tracks: (artist, _, { dataSources }) =>
      dataSources.artistAPI.getTracksByArtistId({
        artistId: artist.id
      })
  },
  ITuneArtist: {
    songs: ({ name }, { limit }, ctx) =>
      ctx.dataSources.iTunes.songs({ name, limit })
  },

  Song: {
    lyrics: (song, _, ctx) => ctx.dataSources.Lyrics.bySong(song),
    tabs: ({ name, artistName }) =>
      `http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${name}&a=${artistName}`
  }
};

// keeping your resolvers thin as a best practice, which allows you to safely
// refactor without worrying about breaking your API.

/*

{
  artists(name: "The Beatles") {
    id
    name
    url
    genre
  }
}

{
  artists(name: "The Beatles", limit:1) {
    id
    name
    url
    genre
  }
}
---
{
  songs(name: "Abbey Road") {
    id
    name
    artistName
    album
    url
  }
}

{
  songs(name: "Abbey Road", limit: 1) {
    id
    name
    artistName
    album
    url
  }
}

---
{
  artists(name: "The Beatles", limit:2) {
    id
    name
    url
    genre
    songs(limit:1) {
      id
      name
      artistName
      album
      url
    }
  }
}

--
{
  artists(name: "The Beatles", limit:2) {
    id
    name
    url
    genre
    songs(limit:1) {
      id
      name
      artistName
      album
      url
      lyrics
      tabs
    }
  }
}

lyrics -- word
tabs  - musicSheetUrl-- sheet music

*/

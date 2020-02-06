const { RESTDataSource } = require('apollo-datasource-rest');

class iTunes extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://itunes.apple.com/';
  }

  // https://github.com/nathanchapman/graphql-music/#setup

  async artists({ name, limit }) {
    console.log('YYYYY', this);
    const options = {
      query: {
        term: name,
        country: 'us',
        entity: 'allArtist',
        limit
      },
      json: true
    };

    const { body } = await this.get('search', options);
    console.log(body);

    const { results } = body;
    return results.map(artist => ({
      name: artist.artistName,
      url: artist.artistLinkUrl,
      id: artist.artistId,
      genre: artist.primaryGenreName
    }));
  }

  async songs({ name, limit }) {
    const options = {
      query: {
        term: name,
        country: 'us',
        entity: 'song',
        limit
      },
      json: true
    };

    const { body } = await this.get('search', options);
    const { results } = body;
    return results.map(song => ({
      name: song.trackName,
      artistName: song.artistName,
      album: song.collectionName,
      url: song.trackViewUrl,
      id: song.trackId,
      artistId: song.artistId
    }));
  }

  async artist({ id }) {
    const options = {
      query: { id },
      json: true
    };

    console.log(`looking up artist ${id}`);

    const { body } = await this.get('lookup', options);
    const artist = body.results[0];

    return {
      name: artist.artistName,
      url: artist.artistLinkUrl,
      id: artist.artistId,
      genre: artist.primaryGenreName
    };
  }
}

module.exports = iTunes;
